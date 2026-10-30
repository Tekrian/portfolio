/* =========================================================
   Bouton « Télécharger mon CV »
   Les boutons sont cachés par défaut. Ils n'apparaissent que si
   le fichier assets/cv/CV-Briand-TETEH.pdf existe vraiment :
   aucun lien cassé tant que le CV n'a pas été ajouté.
   ========================================================= */

const CV_PATH = "assets/cv/CV-Briand-TETEH.pdf";

function initCvButtons() {
  const buttons = document.querySelectorAll(".js-cv");
  if (!buttons.length) return;

  fetch(CV_PATH, { method: "HEAD" })
    .then(function (res) {
      if (res.ok) {
        buttons.forEach(function (btn) { btn.hidden = false; });
      }
    })
    .catch(function () { /* pas de CV : les boutons restent cachés */ });
}
