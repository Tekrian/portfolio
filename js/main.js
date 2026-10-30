/* =========================================================
   Point d'entrée
   1. charge les sections (sections/*.html)
   2. puis lance toutes les fonctionnalités
   ========================================================= */

loadSections().then(function () {
  initLang();
  initNav();
  initAnimations();
  initImageFallback();
  initProjectFilters();
  initContactForm();
  initCvButtons();
  document.getElementById("year").textContent = new Date().getFullYear();
});
