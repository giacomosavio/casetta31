function switchLang(lang) {
  // Lista degli ID delle sezioni IT/EN
  const ids = [
    'it', 'en',
    'scheda-it', 'scheda-en',
    'quattro-it', 'quattro-en',
    'cinque-it', 'cinque-en',
    'sei-it', 'sei-en'
  ];

  // Mostra solo la lingua selezionata
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = id.endsWith(lang) ? 'block' : 'none';
    }
  });
}

// Mostra solo italiano al caricamento
document.addEventListener('DOMContentLoaded', () => {
  switchLang('it');

  // Nasconde i bottoni IT/EN solo su index.html
  const path = window.location.pathname;

  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => {
      btn.style.visibility = 'hidden';
    });
  }
});

