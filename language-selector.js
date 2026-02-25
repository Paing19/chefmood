// language-selector.js - Language selector component logic

// Create and inject language selector HTML
function createLanguageSelector() {
  const currentLang = getCurrentLanguage();
  
  const selectorHTML = `
    <div class="language-selector">
      <button class="language-btn" id="langBtn">
        <span class="globe-icon">🌐</span>
        <span id="currentLangDisplay">${getLanguageName(currentLang)}</span>
      </button>
      <div class="language-dropdown" id="langDropdown">
        <div class="language-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">English</div>
        <div class="language-option ${currentLang === 'ja' ? 'active' : ''}" data-lang="ja">日本語</div>
      </div>
    </div>
  `;
  
  // Insert into body
  document.body.insertAdjacentHTML('beforeend', selectorHTML);
  
  // Add event listeners
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });
  
  // Handle language selection
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.lang;
      if (selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });
}

// Initialize language selector when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createLanguageSelector);
} else {
  createLanguageSelector();
}
