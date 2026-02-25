// translations.js - Multi-language support for Chef Mood

const translations = {
  en: {
    // Common
    home: "Home",
    back: "Back",
    loading: "Loading",
    error: "Error",
    success: "Success",
    
    // Login Page
    loginTitle: "CHEF MOOD",
    emailOrUsername: "Email or Username",
    username: "Username",
    password: "Password",
    loginButton: "Login",
    createAccount: "Create an account",
    forgotPassword: "Forgot password?",
    loginError: "Invalid credentials",
    
    // Register Page
    registerTitle: "Register",
    phoneNumber: "Phone Number",
    phoneOptional: "(optional)",
    createAccountButton: "Create Account",
    phoneNumberPlaceholder: "Enter your phone number",
    
    // Home Page
    chefMood: "Chef Mood",
    explore: "Explore",
    ingredients: "Ingredients",
    recipes: "Recipes",
    favorites: "Favorites",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    
    // Explore Page
    exploreTitle: "Explore Recipes",
    filterByDifficulty: "Filter by Difficulty",
    all: "All",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    loadMore: "Load More Recipes",
    noMoreRecipes: "No more recipes!",
    discoverRecipes: "Discover amazing recipes",
    loadingRecipes: "🔍 Loading delicious recipes...",
    noRecipesFound: "No recipes found for this filter!",
    
    // Ingredients Page
    findByIngredients: "Find by Ingredients",
    enterIngredients: "Enter ingredients separated by commas:",
    ingredientsPlaceholder: "e.g. eggs, milk, flour",
    findRecipesButton: "Find Recipes",
    findingRecipes: "🔍 Finding recipes...",
    searchByIngredients: "Search by your ingredients",
    pleaseEnterIngredients: "Please enter some ingredients!",
    noRecipesFoundTry: "No recipes found. Try different ingredients!",
    serverError: "Server error",
    makeServerRunning: "Make sure the server is running!",
    
    // Recipes Page
    findByRecipes: "Find by Recipes",
    enterRecipeName: "Enter the name of a recipe:",
    recipeNamePlaceholder: "e.g. Chocolate Cake",
    findIngredientsButton: "Find Ingredients",
    findingIngredients: "🔍 Finding ingredients...",
    discoverWhatYouNeed: "Discover what you need",
    pleaseEnterRecipeName: "Please enter a recipe name!",
    
    // Recipe Card
    cookTime: "Cook Time",
    difficulty: "Difficulty",
    cuisine: "Cuisine",
    ingredientsLabel: "Ingredients:",
    showInstructions: "Show Instructions",
    servings: "servings",
    instructions: "Instructions:",
    
    // Favorites Page
    myFavorites: "My Favorites ❤️",
    remove: "Remove",
    clearAll: "🗑️ Clear All",
    noFavoritesYet: "No favorites yet!",
    saveRecipesYouLove: "Save recipes you love",
    findRecipes: "Find Recipes",
    yourSavedRecipes: "Your saved recipes",
    removeFavoriteConfirm: "Remove from favorites?",
    clearAllConfirm: "Delete all favorite recipes?",
    
    // Profile Page
    profileTitle: "My Account",
    loadingProfile: "Loading profile",
    phoneNumberLabel: "Phone Number",
    usernameLabel: "Username",
    notSet: "Not set",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    enterNewUsername: "Enter new username",
    enterNewPhone: "Enter new phone number",
    usernameCannotBeEmpty: "Username cannot be empty",
    updateSuccess: "Updated successfully!",
    updateFailed: "Failed to update profile",
    
    // Settings Page
    settingsTitle: "Account Privacy",
    changePassword: "Change Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    updatePasswordButton: "Update Password",
    
    // Forgot Password Page
    recoverAccount: "RECOVER ACCOUNT",
    enterPhoneToLogin: "Enter your phone number to log in.",
    loginWithPhone: "Login with Phone Number",
    backToLogin: "Back to Login",
    enterRegisteredPhone: "Enter your registered phone number",
    
    // Language Selector
    selectLanguage: "Language",
    
    // Footer
    copyright: "© 2025 Chef Mood"
  },
  
  ja: {
    // Common
    home: "ホーム",
    back: "戻る",
    loading: "読み込み中",
    error: "エラー",
    success: "成功",
    
    // Login Page
    loginTitle: "シェフムード",
    emailOrUsername: "メールアドレスまたはユーザー名",
    username: "ユーザー名",
    password: "パスワード",
    loginButton: "ログイン",
    createAccount: "アカウントを作成",
    forgotPassword: "パスワードをお忘れですか？",
    loginError: "認証情報が無効です",
    
    // Register Page
    registerTitle: "登録",
    phoneNumber: "電話番号",
    phoneOptional: "（任意）",
    createAccountButton: "アカウントを作成",
    phoneNumberPlaceholder: "電話番号を入力してください",
    
    // Home Page
    chefMood: "シェフムード",
    explore: "探索",
    ingredients: "材料",
    recipes: "レシピ",
    favorites: "お気に入り",
    profile: "プロフィール",
    settings: "設定",
    logout: "ログアウト",
    
    // Explore Page
    exploreTitle: "レシピを探索",
    filterByDifficulty: "難易度でフィルター",
    all: "すべて",
    easy: "簡単",
    medium: "普通",
    hard: "難しい",
    loadMore: "もっと読み込む",
    noMoreRecipes: "レシピがもうありません！",
    discoverRecipes: "素晴らしいレシピを発見",
    loadingRecipes: "🔍 美味しいレシピを読み込み中...",
    noRecipesFound: "このフィルターのレシピが見つかりません！",
    
    // Ingredients Page
    findByIngredients: "材料で検索",
    enterIngredients: "材料をカンマで区切って入力:",
    ingredientsPlaceholder: "例: 卵、牛乳、小麦粉",
    findRecipesButton: "レシピを検索",
    findingRecipes: "🔍 レシピを検索中...",
    searchByIngredients: "材料で検索",
    pleaseEnterIngredients: "材料を入力してください！",
    noRecipesFoundTry: "レシピが見つかりません。別の材料を試してください！",
    serverError: "サーバーエラー",
    makeServerRunning: "サーバーが実行されていることを確認してください！",
    
    // Recipes Page
    findByRecipes: "レシピで検索",
    enterRecipeName: "レシピ名を入力:",
    recipeNamePlaceholder: "例: チョコレートケーキ",
    findIngredientsButton: "材料を検索",
    findingIngredients: "🔍 材料を検索中...",
    discoverWhatYouNeed: "必要なものを発見",
    pleaseEnterRecipeName: "レシピ名を入力してください！",
    
    // Recipe Card
    cookTime: "調理時間",
    difficulty: "難易度",
    cuisine: "料理",
    ingredientsLabel: "材料:",
    showInstructions: "手順を表示",
    servings: "人分",
    instructions: "手順:",
    
    // Favorites Page
    myFavorites: "マイお気に入り ❤️",
    remove: "削除",
    clearAll: "🗑️ すべて削除",
    noFavoritesYet: "お気に入りはまだありません！",
    saveRecipesYouLove: "お気に入りのレシピを保存",
    findRecipes: "レシピを検索",
    yourSavedRecipes: "保存されたレシピ",
    removeFavoriteConfirm: "お気に入りから削除しますか？",
    clearAllConfirm: "すべてのお気に入りレシピを削除しますか？",
    
    // Profile Page
    profileTitle: "マイアカウント",
    loadingProfile: "プロフィールを読み込み中",
    phoneNumberLabel: "電話番号",
    usernameLabel: "ユーザー名",
    notSet: "未設定",
    edit: "編集",
    save: "保存",
    cancel: "キャンセル",
    enterNewUsername: "新しいユーザー名を入力",
    enterNewPhone: "新しい電話番号を入力",
    usernameCannotBeEmpty: "ユーザー名は空にできません",
    updateSuccess: "更新に成功しました！",
    updateFailed: "プロフィールの更新に失敗しました",
    
    // Settings Page
    settingsTitle: "アカウントのプライバシー",
    changePassword: "パスワードを変更",
    currentPassword: "現在のパスワード",
    newPassword: "新しいパスワード",
    updatePasswordButton: "パスワードを更新",
    
    // Forgot Password Page
    recoverAccount: "アカウントを回復",
    enterPhoneToLogin: "ログインするには電話番号を入力してください。",
    loginWithPhone: "電話番号でログイン",
    backToLogin: "ログインに戻る",
    enterRegisteredPhone: "登録された電話番号を入力してください",
    
    // Language Selector
    selectLanguage: "言語",
    
    // Footer
    copyright: "© 2025 シェフムード"
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('chefMoodLanguage') || 'en';
}

// Set current language
function setLanguage(lang) {
  localStorage.setItem('chefMoodLanguage', lang);
  location.reload(); // Reload page to apply translations
}

// Get translated text
function t(key) {
  const lang = getCurrentLanguage();
  return translations[lang][key] || translations['en'][key] || key;
}

// Get language name for display
function getLanguageName(code) {
  const names = {
    en: 'English',
    ja: '日本語',
  };
  return names[code] || code;
}
