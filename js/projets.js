/* =========================================================
   Filtres de la section Projets
   Chaque <article class="project"> a un data-cat :
   "soft" (logiciel), "web" ou "sys" (système & matériel)
   ========================================================= */

function initProjectFilters() {
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cat = btn.dataset.filter;
      filters.forEach(function (f) { f.classList.toggle("is-active", f === btn); });
      projects.forEach(function (p) {
        p.classList.toggle("is-hidden", cat !== "all" && p.dataset.cat !== cat);
      });
    });
  });
}
