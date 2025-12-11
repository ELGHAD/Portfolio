// assets/js/projects.js
// Source unique de vérité pour les projets

window.PROJECTS = [
  // ======================
  // PROJETS PROFESSIONNELS
  // ======================
  {
    id: "ratitec",
    title: "RATITEC — Plateforme Énergie Renouvelable",
    description:
      "Plateforme web intégrée pour la gestion et le suivi des projets ENR (énergies renouvelables) : chantiers, techniciens, clients et facturation.",
    tech: ["Spring Boot", "React", "Tailwind CSS", "MySQL"],
    role: "Full-stack",
    year: 2025,
    category: "professionnel",
    group: "Web full-stack",
    image: "assets/img/projects/ratitec.jfif",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
    details: `
      <p><strong>RATITEC — Plateforme intégrée pour la gestion des projets ENR</strong></p>
      <ul>
        <li>Conception et développement, en binôme, d’une plateforme web permettant la gestion centralisée des projets d’énergies renouvelables : suivi des chantiers, planification des techniciens et supervision des clients.</li>
        <li>Mise en place d’un backend Spring Boot organisé autour d’API REST robustes, d’une architecture métier claire (services), d’un mapping DTO structuré et d’un modèle relationnel MySQL optimisé grâce à JPA/Hibernate.</li>
        <li>Développement d’un module de communication interne améliorant la coordination opérationnelle : historique des interventions, remontées terrain, suivi des statuts et gestion des validations.</li>
        <li>Conception et automatisation du système de facturation : génération dynamique des factures, contrôle métier, suivi des paiements et notifications associées.</li>
        <li>Réalisation du frontend en React + Tailwind CSS pour offrir une interface moderne, fluide, responsive et orientée utilisateur.</li>
        <li>Méthodologie Agile (Scrum) avec sprints courts, démonstrations régulières et amélioration continue du produit.</li>
        <li><strong>Bénéfices :</strong> meilleure traçabilité des opérations, réduction du travail manuel et optimisation de la communication entre équipes.</li>
      </ul>
      <p><strong>Stack :</strong> Spring Boot, Spring MVC, Spring Data JPA/Hibernate, DTO/Mapper, MySQL, React, Tailwind CSS, Git/GitHub, UML.</p>
    `,
  },
  {
    id: "alten",
    title: "ALTEN — Gestionnaire de Tâches",
    description:
      "Application web de gestion des tâches avec rôles (RBAC), suivi des activités et interface responsive pour les équipes internes.",
    tech: ["Symfony", "PHP", "JavaScript", "MySQL"],
    role: "Full-stack",
    year: 2024,
    category: "professionnel",
    group: "Web full-stack",
    image: "assets/img/projects/alten.jfif",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
    details: `
      <p><strong>ALTEN — Application de gestion des tâches avec accès par rôles (RBAC)</strong></p>
      <ul>
        <li>Développement, en collaboration avec une équipe projet, d’une application web de gestion des tâches destinée à améliorer l’organisation et le suivi opérationnel.</li>
        <li>Conception d’un backend structuré avec Symfony : contrôleurs, services métiers, entités, API sécurisées et base MySQL optimisée.</li>
        <li>Mise en place d’un système RBAC permettant une gestion fine des droits d’accès selon les profils utilisateurs.</li>
        <li>Implémentation d’un moteur de gestion des tâches : création, assignation, commentaires internes, notifications, historique des modifications et filtres avancés.</li>
        <li>Conception d’interfaces ergonomiques et responsives avec JavaScript moderne et composants dynamiques (listes filtrables, tableaux interactifs, vues par statut).</li>
        <li>Travail en mode Agile : réunions régulières, priorisation du backlog et amélioration continue de l’expérience utilisateur.</li>
        <li><strong>Impact :</strong> gain de productivité, meilleure visibilité sur l’avancement des tâches et réduction des blocages grâce à un workflow plus structuré.</li>
      </ul>
      <p><strong>Stack :</strong> Symfony, PHP, JavaScript, MySQL, RBAC, Git/GitHub, UML.</p>
    `,
  },
  {
    id: "som",
    title: "Sounds of Morocco (SOM)",
    description:
      "Site moderne pour un label de musique électronique marocain, développé en HTML, CSS et JavaScript. Design multi-page, animations légères, responsive et identité visuelle inspirée du paysage musical marocain.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Front-end",
    year: 2025,
    category: "professionnel",
    group: "Front-end & UI",
    image: "assets/img/projects/som.png",
    links: {
      demo: "https://soundsofmorocco.com",
      repo: "",
      caseStudy: "",
    },
    details: `
      <p><strong>Sounds of Morocco — Site vitrine pour un label de musique électronique marocain</strong></p>
      <ul>
        <li>Conception d’un site web multi-page pour mettre en valeur le label, ses artistes, ses sorties et ses évènements.</li>
        <li>Travail approfondi sur l’UI/UX : hiérarchie visuelle, contrastes, typographie et mise en avant du contenu musical.</li>
        <li>Mise en place d’animations légères (transitions, hover, effets de reveal) pour donner une impression de fluidité sans nuire aux performances.</li>
        <li>Design responsive pensé mobile-first afin d’offrir une expérience cohérente sur smartphones, tablettes et desktop.</li>
        <li>Intégration de sections dédiées : releases, news, partenaires, formulaire de contact, liens vers plateformes de streaming.</li>
        <li><strong>Objectif :</strong> offrir une image professionnelle du label, renforcer sa présence en ligne et faciliter la découverte de ses artistes.</li>
      </ul>
      <p><strong>Stack :</strong> HTML5, CSS3, JavaScript, responsive design, animations CSS.</p>
    `,
  },

  // ==================
  // PROJETS PERSONNELS
  // ==================

  {
    title: "Portail Association EMSI",
    description:
      "Plateforme Laravel pour gérer associations, clubs, événements et activités EMSI Rabat avec rôles (admin, membre) et tableaux de bord.",
    tech: ["Laravel", "Blade", "JavaScript", "MySQL"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    group: "Web full-stack",
    image: "assets/img/projects/emsi.jfif",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/Emsi_Association",
      caseStudy: "",
    },
  },

  {
    title: "E-Market Hub",
    description:
      "Application e-commerce full-stack avec gestion produit, panier, commandes et authentification sécurisée, pensée pour un déploiement cloud (Docker / CI/CD).",
    tech: ["Spring Boot", "React", "MySQL", "Docker"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    group: "Web full-stack",
    image: "assets/img/projects/ecommerce.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },

  {
    title: "Clothing Ecommerce",
    description:
      "Boutique en ligne pour vêtements développée avec Laravel 12 et TailwindCSS : catalogue, panier, commandes, comptes clients et dashboard admin complet.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    group: "Web full-stack",
    image: "assets/img/projects/brand.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "ProfTaskManager",
    description:
      "Application web de gestion de tâches pour enseignants : création et suivi de tâches, filtres, authentification et interface responsive.",
    tech: ["Python", "Django", "MySQL", "HTML/CSS"],
    role: "Back-end",
    year: 2024,
    category: "personnel",
    group: "Web full-stack",
    image: "assets/img/projects/prof.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "Restaurant — Site Django",
    description:
      "Site restaurant avec Django : pages dynamiques, gestion du menu, back-office admin et design responsive.",
    tech: ["Django", "Python", "HTML/CSS"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    group: "Web full-stack",
    image: "assets/img/projects/restaurant.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "Pharmacy Manager",
    description:
      "Application de gestion de pharmacie en Java Swing & MySQL : gestion du stock, des ventes, des clients, alertes d’expiration et rôles utilisateurs.",
    tech: ["Java", "Swing", "MySQL"],
    role: "Back-end / Desktop",
    year: 2025,
    category: "personnel",
    group: "Desktop & client lourd",
    image: "assets/img/projects/pharmacy.png",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/Pharmacy-Manager",
      caseStudy: "",
    },
  },

  {
    title: "TaskManager Android",
    description:
      "Application Android de gestion de tâches (CRUD) avec architecture MVVM, Room pour la persistance locale et interface claire.",
    tech: ["Android", "Kotlin", "Room", "MVVM"],
    role: "Mobile",
    year: 2025,
    category: "personnel",
    group: "Mobile",
    image: "assets/img/projects/taskflow.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "To-Do List React",
    description:
      "Application de gestion de tâches simple mais soignée avec React, design stylé et persistance locale.",
    tech: ["React", "JavaScript"],
    role: "Front-end",
    year: 2025,
    category: "personnel",
    group: "Front-end & UI",
    image: "assets/img/projects/todoapp.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },
  {
    title: "AI Chatbot",
    description:
      "Assistant conversationnel moderne construit avec React et OpenAI API : interface de chat, mode sombre et historique des messages.",
    tech: ["React", "JavaScript", "OpenAI API"],
    role: "Front-end",
    year: 2025,
    category: "personnel",
    group: "Front-end & UI",
    image: "assets/img/projects/chatbot.png",
    links: {
      demo: "",
      repo: "",
      caseStudy: "",
    },
  },

  {
    title: "Restaurant Manager (.NET)",
    description:
      "Application de gestion de restaurant en C# / .NET : gestion des commandes, du menu, des ventes et coordination du staff, avec SQL Server.",
    tech: [".NET", "C#", "Entity Framework Core", "SQL Server"],
    role: "Full-stack",
    year: 2025,
    category: "personnel",
    group: "Desktop & client lourd",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/Restaurant_Management",
      caseStudy: "",
    },
  },
  {
    title: "Student Management System",
    description:
      "Application Java de gestion des étudiants (ajout, mise à jour, recherche) avec une structure orientée objet claire.",
    tech: ["Java"],
    role: "Back-end / Desktop",
    year: 2025,
    category: "personnel",
    group: "Desktop & client lourd",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/Student_Management_System",
      caseStudy: "",
    },
  },
  {
    title: "Music Player (Java)",
    description:
      "Lecteur de musique en Java permettant de lire, stopper et rejouer des fichiers .wav via javax.sound.sampled.",
    tech: ["Java"],
    role: "Back-end / Desktop",
    year: 2025,
    category: "personnel",
    group: "Desktop & client lourd",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/Music_Player",
      caseStudy: "",
    },
  },

  {
    title: "TP Data REST — Spring Boot",
    description:
      "TP avancé avec Spring Data REST : exposition automatique des entités via REST, pagination, tri, projections et configuration fine.",
    tech: ["Spring Boot", "Spring Data REST", "JPA", "MySQL"],
    role: "Back-end",
    year: 2025,
    category: "personnel",
    group: "Projets académiques & TP",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/tpdatarest",
      caseStudy: "",
    },
  },
  {
    title: "TP REST — Spring Boot",
    description:
      "API REST avec Spring Boot pour la gestion d’articles/produits : endpoints CRUD, couches Controller / Service / Repository et tests avec Postman.",
    tech: ["Spring Boot", "REST", "JPA"],
    role: "Back-end",
    year: 2025,
    category: "personnel",
    group: "Projets académiques & TP",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/tprest",
      caseStudy: "",
    },
  },
  {
    title: "Little Lemon (Django)",
    description:
      "Mini-projet Django inspiré d’un restaurant pour pratiquer les vues, modèles, templates, admin et bonnes pratiques.",
    tech: ["Django", "Python"],
    role: "Back-end",
    year: 2025,
    category: "personnel",
    group: "Projets académiques & TP",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/LittleLemon",
      caseStudy: "",
    },
  },
  {
    title: "StudentHub (Java Streams)",
    description:
      "Mini-projet Java pour manipuler Streams, Optionals et Lambdas sur un jeu de données d’étudiants (filtres, mapping, agrégations).",
    tech: ["Java", "Streams"],
    role: "Back-end",
    year: 2025,
    category: "personnel",
    group: "Projets académiques & TP",
    image: "",
    links: {
      demo: "",
      repo: "https://github.com/ELGHAD/StudentHub",
      caseStudy: "",
    },
  },
];
