/* =========================================================
   Formulaire de contact
   Vérifie les champs puis ouvre l'application mail du
   visiteur avec le message pré-rempli. Aucun service externe.
   ========================================================= */

const CONTACT_EMAIL = "tetehbriand@gmail.com";

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = UI_MESSAGES[currentLang];
    let valid = true;

    form.querySelectorAll("input, textarea").forEach(function (field) {
      const ok = field.value.trim() !== "" && field.checkValidity();
      field.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = msg.formError;
      status.className = "form-status err";
      return;
    }

    const fields = form.elements;
    const name = fields.namedItem("name").value.trim();
    const email = fields.namedItem("email").value.trim();
    const body = fields.namedItem("message").value.trim() + "\n\n— " + name + " (" + email + ")";

    window.location.href = "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(msg.mailSubject + " — " + name) +
      "&body=" + encodeURIComponent(body);

    status.textContent = msg.formOk;
    status.className = "form-status ok";
    form.reset();
  });
}
