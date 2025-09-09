document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cm-menu-toggle");
  const panel = document.getElementById("cm-nav");

  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("cm-show");
    btn.classList.toggle("cm-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  panel.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      panel.classList.remove("cm-show");
      btn.classList.remove("cm-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
});

// CONTACT BUTTONS
function openWhatsApp() {
  window.open("https://wa.me/2349050555065?text=Hello Cybermann, I need your services.", "_blank");
}

function makeCall() {
  window.location.href = "tel:+2349050555065";
}

function sendEmail() {
  window.location.href = "mailto:intelligentt102@gmail.com?subject=Cybermann Inquiry&body=Hi, I’m interested in your services.";
}
