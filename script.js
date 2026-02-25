// script.js - Complete working version

// ==========================================
// FOR INGREDIENTS.HTML - Find recipes by ingredients
// ==========================================
const findRecipesBtn = document.getElementById("findRecipesBtn");
const recipeList = document.getElementById("recipeList");
const ingredientsInput = document.getElementById("ingredientsInput");

if (findRecipesBtn) {
  findRecipesBtn.addEventListener("click", async () => {
    const ingredientsText = ingredientsInput.value.trim();
    
    if (!ingredientsText) {
      alert("Please enter some ingredients!");
      return;
    }
    
    const ingredients = ingredientsText.split(",").map(i => i.trim());
    
    // Show loading message
    recipeList.innerHTML = "<p style='text-align:center; padding:20px;'>🔍 Finding recipes for you...</p>";
    
    try {
      console.log("Sending request with ingredients:", ingredients);
      
      const res = await fetch("http://localhost:3000/recipes-from-ingredients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients })
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const recipes = await res.json();
      console.log("Received recipes:", recipes);
      
      recipeList.innerHTML = "";

      if (!recipes || recipes.length === 0) {
        recipeList.innerHTML = "<p style='text-align:center;'>No recipes found. Try different ingredients!</p>";
        return;
      }

      recipes.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "recipe-card";
        div.style.marginBottom = "20px";
        div.style.padding = "15px";
        div.style.border = "1px solid #ddd";
        div.style.borderRadius = "8px";
        
        div.innerHTML = `
          <h3 style="margin-top:0;">${recipe.name}</h3>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
          <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
          <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
          <details>
            <summary style="cursor:pointer; color:#007bff;">Show Instructions</summary>
            <p style="margin-top:10px;">${recipe.instructions}</p>
          </details>
        `;
        recipeList.appendChild(div);
      });
      
    } catch (error) {
      console.error("Error:", error);
      recipeList.innerHTML = `
        <p style='color:red; text-align:center;'>
          ❌ Error: ${error.message}<br><br>
          Make sure the server is running! (node server.js)
        </p>
      `;
    }
  });
}

// ==========================================
// FOR FIND-INGREDIENTS.HTML - Find ingredients by recipe name
// ==========================================
const findIngredientsBtn = document.getElementById("findIngredientsBtn");
const recipeNameInput = document.getElementById("recipeNameInput");
const ingredientsList = document.getElementById("ingredientsList");

if (findIngredientsBtn) {
  findIngredientsBtn.addEventListener("click", async () => {
    const recipeName = recipeNameInput.value.trim();
    
    if (!recipeName) {
      alert("Please enter a recipe name!");
      return;
    }
    
    ingredientsList.innerHTML = "<p style='text-align:center; padding:20px;'>🔍 Finding ingredients...</p>";
    
    try {
      console.log("Sending request for recipe:", recipeName);
      
      const res = await fetch("http://localhost:3000/ingredients-from-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipeName })
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const recipe = await res.json();
      console.log("Received recipe details:", recipe);
      
      ingredientsList.innerHTML = "";

      const div = document.createElement("div");
      div.className = "recipe-details";
      div.style.padding = "20px";
      
      div.innerHTML = `
        <h2>${recipe.recipeName}</h2>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
        <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
        
        <h3>Ingredients:</h3>
        <ul style="line-height: 1.8;">
          ${recipe.ingredients.map(ing => `<li>${ing.amount} ${ing.item}</li>`).join('')}
        </ul>
        
        <h3>Instructions:</h3>
        <p style="line-height: 1.6;">${recipe.instructions}</p>
      `;
      ingredientsList.appendChild(div);
      
    } catch (error) {
      console.error("Error:", error);
      ingredientsList.innerHTML = `
        <p style='color:red; text-align:center;'>
          ❌ Error: ${error.message}<br><br>
          Make sure the server is running! (node server.js)
        </p>
      `;
    }
  });
}

console.log("Script loaded successfully!");