// assets/js/projects.js
// Source unique de vérité pour tes projets (catégorisés).
// Catégories: "professionnel" | "personnel"
window.PROJECTS = [
  // ======================
  // PROJETS PROFESSIONNELS
  // ======================
  {
    title: "ALTEN — Gestionnaire de Tâches",
    description:
      "Application web de gestion des tâches avec RBAC, suivi en temps réel et UI responsive pour améliorer la productivité d’équipe.",
    tech: ["Symfony", "JavaScript", "MySQL"],
    role: "Full-stack",
    year: 2024,
    category: "professionnel",
    image: "assets/img/projects/alten-tasks.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "RATITEC — Plateforme Énergie Renouvelable",
    description:
      "Plateforme temps réel pour le suivi de chantiers, la planification des techniciens et des KPI interactifs (+35% de suivi).",
    tech: ["Laravel", "React", "MySQL"],
    role: "Full-stack",
    year: 2025,
    category: "professionnel",
    image: "assets/img/projects/ratitec.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },

  // ==================
  // PROJETS PERSONNELS
  // ==================
  {
    title: "E-Market Hub",
    description:
      "Application e-commerce full-stack avec gestion produits, authentification sécurisée et CI/CD cloud.",
    tech: ["Spring Boot", "React", "MySQL", "Cloud"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    image: "assets/img/projects/e-market-hub.png",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/...", // ← remplace
      caseStudy: "",
    },
  },
  {
    title: "AI Chatbot",
    description:
      "Assistant conversationnel moderne basé sur l’API OpenAI avec interface responsive.",
    tech: ["React", "OpenAI API"],
    role: "Front-end",
    year: 2025,
    category: "personnel",
    image: "assets/img/projects/ai-chatbot.png",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/...", // ← remplace
      caseStudy: "",
    },
  },
  {
    title: "ProfTaskManager",
    description:
      "Gestion des tâches pour enseignants : authentification, suivi en temps réel et interface responsive.",
    tech: ["Python", "Django", "MySQL", "HTML/CSS"],
    role: "Back-end",
    year: 2024,
    category: "personnel",
    image: "assets/img/projects/prof-task-manager.png",
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    title: "Portail Association EMSI",
    description:
      "Plateforme clubs/événements/actualités avec tableaux de bord et accès par rôles.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    role: "Full-stack",
    year: 2024,
    category: "personnel",
    image: "assets/img/projects/emsi-portal.png",
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    title: "CloudFlow",
    description:
      "Application web cloud-native avec authentification et RBAC, déployée sur Azure (scalabilité + CI/CD).",
    tech: ["Spring Boot", "React", "Azure", "RBAC"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    image: "assets/img/projects/cloudflow.png",
    links: { demo: "", repo: "https://github.com/ELGHAD/...", caseStudy: "" },
  },
  {
    title: "Pharmacy Manager",
    description:
      "Application de gestion de pharmacie (Stock, ventes, clients) avec interface bureau.",
    tech: ["Java", "Swing", "MySQL"],
    role: "Back-end",
    year: 2024,
    category: "personnel",
    image: "assets/img/projects/pharmacy-manager.png",
    links: { demo: "", repo: "https://github.com/ELGHAD/...", caseStudy: "" },
  },
  {
    title: "Restaurant Manager",
    description:
      "Gestion de restaurant (commandes, tables, menu) avec back-office web.",
    tech: [".NET", "C#", "SQL Server"],
    role: "Full-stack",
    year: 2024,
    category: "personnel",
    image: "assets/img/projects/restaurant-manager.png",
    links: { demo: "", repo: "https://github.com/ELGHAD/...", caseStudy: "" },
  },
  {
    title: "TaskManager Android",
    description: "Application Android de gestion de tâches (CRUD, MVVM, Room).",
    tech: ["Android", "Kotlin", "Room", "MVVM"],
    role: "Mobile",
    year: 2024,
    category: "personnel",
    image: "assets/img/projects/taskmanager-android.png",
    links: { demo: "", repo: "https://github.com/ELGHAD/...", caseStudy: "" },
  },
];
