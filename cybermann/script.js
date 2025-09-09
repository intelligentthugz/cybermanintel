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
