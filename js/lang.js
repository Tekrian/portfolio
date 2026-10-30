/* =========================================================
   Langue FR / EN
   Le français est écrit dans les fichiers HTML ; l'anglais
   est dans js/i18n.js (même clé que l'attribut data-i18n).
   ========================================================= */

let currentLang = "fr";
const TRANSLATIONS_FR = {};

function setLang(lang) {
  const dict = lang === "en" ? TRANSLATIONS_EN : TRANSLATIONS_FR;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });

  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* stockage indisponible */ }
}

function initLang() {
  // On mémorise le texte français présent dans le HTML
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    TRANSLATIONS_FR[el.dataset.i18n] = el.innerHTML;
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
  });

  // Langue enregistrée, sinon langue du navigateur
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* rien */ }
  const browser = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  setLang(saved || browser);
}
