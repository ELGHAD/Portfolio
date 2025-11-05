// === Thème & navigation (inchangé) ===
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "light") root.classList.add("light");
if (toggle)
  toggle.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem(
      "theme",
      root.classList.contains("light") ? "light" : "dark"
    );
  });
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      if (navLinks?.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
      }
    }
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// === Projets : état + éléments ===
const state = { search: "", tech: "", year: "", category: "" };
const els = {
  grid: document.getElementById("projectGrid"),
  search: document.getElementById("searchInput"),
  tech: document.getElementById("techSelect"),
  year: document.getElementById("yearSelect"),
  clear: document.getElementById("clearFilters"),
  tabs: document.querySelectorAll(".tabs .tab"),
};

function normalize(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function matchProject(p) {
  // Catégorie ('' = toutes)
  const catOK =
    !state.category || normalize(p.category) === normalize(state.category);

  // Texte libre
  const s = normalize(state.search);
  const inText =
    !s ||
    normalize(p.title).includes(s) ||
    normalize(p.description).includes(s) ||
    (p.tech || []).some((t) => normalize(t).includes(s));

  // Tech exacte (si sélectionnée)
  const techOk =
    !state.tech ||
    (p.tech || []).some((t) => normalize(t) === normalize(state.tech));

  // Année (égalité simple)
  const yearOk = !state.year || String(p.year) === String(state.year);

  return catOK && inText && techOk && yearOk;
}

function projectCard(p) {
  const techChips = (p.tech || [])
    .map((t) => `<span class="skill">${t}</span>`)
    .join("");
  const demoBtn = p.links?.demo
    ? `<a class="btn" href="${p.links.demo}" target="_blank" rel="noopener">Demo</a>`
    : "";
  const repoBtn = p.links?.repo
    ? `<a class="btn" href="${p.links.repo}" target="_blank" rel="noopener">Code</a>`
    : "";
  const caseBtn = p.links?.caseStudy
    ? `<a class="btn" href="${p.links.caseStudy}">Case Study</a>`
    : "";
  const catLabel =
    p.category === "professionnel" ? "Professionnel" : "Personnel";

  return `
    <article class="card project">
      ${p.image ? `<img src="${p.image}" alt="" class="project-cover" />` : ""}
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="chips" style="margin-top:6px">
        <span class="chip">${catLabel}</span>
      </div>
      <div class="skills">${techChips}</div>
      <div class="actions">${demoBtn}${repoBtn}${caseBtn}</div>
    </article>
  `;
}

function renderProjects() {
  if (!els.grid) return;
  const data = (window.PROJECTS || []).filter(matchProject);
  els.grid.innerHTML = data.length
    ? data.map(projectCard).join("")
    : `<div class="card"><p class="muted">Aucun projet ne correspond à vos filtres.</p></div>`;
}

function bindFilters() {
  els.search?.addEventListener("input", () => {
    state.search = els.search.value;
    renderProjects();
  });
  els.tech?.addEventListener("change", () => {
    state.tech = els.tech.value;
    renderProjects();
  });
  els.year?.addEventListener("change", () => {
    state.year = els.year.value;
    renderProjects();
  });
  els.clear?.addEventListener("click", () => {
    state.search = "";
    state.tech = "";
    state.year = "";
    if (els.search) els.search.value = "";
    if (els.tech) els.tech.value = "";
    if (els.year) els.year.value = "";
    renderProjects();
  });

  // Tabs Catégorie
  els.tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.tabs.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      state.category = btn.dataset.category || "";
      renderProjects();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindFilters();
  renderProjects();
});
