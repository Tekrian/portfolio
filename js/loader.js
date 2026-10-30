/* =========================================================
   Chargement des sections
   Chaque section est un fichier dans sections/ (accueil.html,
   apropos.html…). On les insère dans index.html, dans l'ordre,
   à la place des <div data-section="..."></div>.
   ========================================================= */

function loadSections() {
  const slots = document.querySelectorAll("[data-section]");

  const requests = Array.from(slots).map(function (slot) {
    const file = "sections/" + slot.dataset.section + ".html";
    return fetch(file)
      .then(function (res) {
        if (!res.ok) throw new Error(file + " introuvable");
        return res.text();
      })
      .then(function (html) {
        slot.outerHTML = html;
      });
  });

  return Promise.all(requests).catch(function (err) {
    document.getElementById("app").innerHTML =
      '<p class="load-error">Impossible de charger les sections (' + err.message + ').<br>' +
      "Ouvre le site avec un serveur local (ex. extension Live Server de VS Code), " +
      "pas en double-cliquant sur index.html.</p>";
    throw err;
  });
}
