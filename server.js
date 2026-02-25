// server.js - Updated with language support
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML/CSS files

// Language mapping for OpenAI prompts
const languageNames = {
  'en': 'English',
  'ja': 'Japanese',
};

// Route 1: Find recipes by ingredients (with language support)
app.post('/recipes-from-ingredients', async (req, res) => {
  try {
    const { ingredients, language = 'en' } = req.body;
    const targetLanguage = languageNames[language] || 'English';
    
    const prompt = `Given these ingredients: ${ingredients.join(', ')}

Generate 5 creative recipes that can be made using ONLY these ingredients (you can assume basic pantry items like salt, pepper, oil).

IMPORTANT: Respond ENTIRELY in ${targetLanguage}. All recipe names, ingredients, instructions, and cuisine names must be in ${targetLanguage}.

Return ONLY a JSON array with this exact format:
[
  {
    "name": "Recipe Name in ${targetLanguage}",
    "ingredients": ["ingredient1 in ${targetLanguage}", "ingredient2 in ${targetLanguage}"],
    "instructions": "Step by step instructions in ${targetLanguage}",
    "cookTime": "15 minutes (or equivalent in ${targetLanguage})",
    "difficulty": "Easy/Medium/Hard in ${targetLanguage}",
    "cuisine": "Cuisine type in ${targetLanguage}"
  }
]`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    // Clean the response - remove markdown code blocks if present
    let responseText = completion.choices[0].message.content;
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const recipes = JSON.parse(responseText);
    res.json(recipes);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate recipes' });
  }
});

// Route 2: Find ingredients needed for a recipe (with language support)
app.post('/ingredients-from-recipe', async (req, res) => {
  try {
    const { recipeName, language = 'en' } = req.body;
    const targetLanguage = languageNames[language] || 'English';
    
    const prompt = `For the recipe "${recipeName}", provide a detailed ingredients list with exact measurements.

IMPORTANT: Respond ENTIRELY in ${targetLanguage}. All text including recipe name, ingredient names, amounts, units, and instructions must be in ${targetLanguage}.

Return ONLY a JSON object with this exact format:
{
  "recipeName": "${recipeName} (translated to ${targetLanguage} if needed)",
  "servings": 4,
  "ingredients": [
    {"item": "ingredient name in ${targetLanguage}", "amount": "2 cups (or equivalent in ${targetLanguage})"},
    {"item": "ingredient name in ${targetLanguage}", "amount": "1 tbsp (or equivalent in ${targetLanguage})"}
  ],
  "instructions": "Detailed step-by-step cooking instructions in ${targetLanguage}",
  "cookTime": "30 minutes (or equivalent in ${targetLanguage})",
  "difficulty": "Medium/Easy/Hard in ${targetLanguage}"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    // Clean the response - remove markdown code blocks if present
    let responseText = completion.choices[0].message.content;
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const recipeDetails = JSON.parse(responseText);
    res.json(recipeDetails);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate ingredient list' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Language support enabled: English, Japanese');
  console.log('Open your browser and go to http://localhost:3000');
});
