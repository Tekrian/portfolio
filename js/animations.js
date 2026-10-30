/* =========================================================
   Animations d'apparition au défilement
   + remplacement propre des images manquantes
   ========================================================= */

function initAnimations() {
  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 80 + "ms"; // léger décalage entre voisins
    observer.observe(el);
  });
}

function initImageFallback() {
  function markMissing(img) {
    const box = img.closest(".project-img");
    if (box) box.classList.add("img-missing");
    img.style.visibility = "hidden";
  }

  document.querySelectorAll("img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      markMissing(img);
    } else {
      img.addEventListener("error", function () { markMissing(img); });
    }
  });
}
