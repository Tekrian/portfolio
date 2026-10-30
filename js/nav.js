/* =========================================================
   Navigation
   - menu burger sur mobile
   - fond de l'en-tête + barre de progression au défilement
   - lien du menu actif selon la section visible
   ========================================================= */

function initNav() {
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  const progress = document.getElementById("scroll-progress");

  /* Menu mobile */
  function closeMenu() {
    navLinks.classList.remove("is-open");
    header.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", function () {
    const open = navLinks.classList.toggle("is-open");
    header.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* En-tête et barre de progression */
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Lien actif */
  const linkById = {};
  document.querySelectorAll(".nav-link").forEach(function (a) {
    linkById[a.getAttribute("href").slice(1)] = a;
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Object.values(linkById).forEach(function (a) { a.classList.remove("is-active"); });
      const link = linkById[entry.target.id];
      if (link) link.classList.add("is-active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });

  /* Si l'adresse contient une ancre (#projets…), on y va une fois les sections chargées */
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
}
