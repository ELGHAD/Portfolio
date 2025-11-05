// Theme toggle (light/dark) + persist preference
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");

if (saved === "light") root.classList.add("light");

if (toggle) {
  toggle.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem(
      "theme",
      root.classList.contains("light") ? "light" : "dark"
    );
  });
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}

// Smooth scroll for internal links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
