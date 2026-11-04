export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

export interface ClientProject {
  slug: string;
  name: string;
  client: string;
  category: string;
  categories: string[];
  year: string;
  tagline: string;
  description: string;
  cover: string;
  stack: string[];
  deliverables: string[];
  link?: string;
  challenge: {
    title: string;
    description: string;
  };
  approach: {
    title: string;
    description: string;
  };
  stats?: Array<{
    label: string;
    value: string;
  }>;
  gallery: ProjectGalleryImage[];
}

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  category: "hardware" | "agent" | "productivity" | "business" | "infra";
  categoryLabel: string;
  url?: string;
  githubUrl?: string;
  tag: string;
  badge?: string;
}

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: "showcase",
    title: "Sites vitrines d'exception",
    tagline: "Une présence en ligne qui marque les esprits et convertit.",
    description:
      "Design d'auteur sur mesure, typographie rigoureuse, fluidité 60 FPS et SEO technique irréprochable. Pas de templates jetables, une identité forte taillée pour durer.",
    deliverables: ["Design UI/UX exclusif", "Animations GSAP & WebGL légères", "Score Lighthouse 95+", "Mobile-first & accessibilité"],
    icon: "solar:monitor-bold-duotone",
  },
  {
    id: "apps",
    title: "Applications web & métier",
    tagline: "Des outils sur mesure pour faire tourner votre activité.",
    description:
      "Architecture SvelteKit et Go ultra réactive, bases de données Postgres optimisées, APIs robustes. On développe le logiciel dont vous avez réellement besoin, sans usine à gaz.",
    deliverables: ["Portails clients & SaaS", "Tableaux de bord temps réel", "Authentification sécurisée", "Intégrations API & paiements"],
    icon: "solar:code-square-bold-duotone",
  },
  {
    id: "branding",
    title: "Direction artistique & Branding",
    tagline: "Un univers graphique singulier qui impose votre crédibilité.",
    description:
      "Création de logotypes, design systems, chartes graphiques complètes, assets 3D et guidelines typographiques pensées pour vivre sur le web comme sur le papier.",
    deliverables: ["Identité visuelle & logotype", "Design system & composants", "Modélisation 3D interactive", "Typographie & palette"],
    icon: "solar:palette-bold-duotone",
  },
  {
    id: "devops",
    title: "Infra & Hébergement souverain",
    tagline: "Vos serveurs, vos données. Zéro dépendance captive.",
    description:
      "Mise en place de serveurs dédiés Hetzner, conteneurisation Docker, certificats SSL automatiques avec Traefik, sauvegardes chiffrées et observabilité complète.",
    deliverables: ["Déploiement continu sans coupure", "Hébergement européen souverain", "Monitoring & alertes 24/7", "Sauvegardes automatisées"],
    icon: "solar:server-square-bold-duotone",
  },
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "marcel",
    name: "Marcel",
    client: "Marcel Productivity",
    category: "Applications",
    categories: ["Applications", "Branding"],
    year: "2025",
    tagline: "Transformer les tâches du quotidien en quête héroïque.",
    description: "Rebranding complet et développement d'une application de productivité gamifiée. Suivi d'habitudes, gains d'expérience et progression visuelle sans friction.",
    cover: "/images/projects/Marcel 3x3 dashboard.png",
    stack: ["SvelteKit", "Go", "PostgreSQL", "Tailwind CSS", "Figma"],
    deliverables: [
      "Identité graphique complète & logotype",
      "Application web responsive temps réel",
      "Moteur de gamification et calcul de scores",
      "API Go haute performance et schéma Postgres",
    ],
    link: "https://marcel.my/",
    challenge: {
      title: "Faire rimer rigueur quotidienne et engagement soutenu",
      description: "Les outils de productivité traditionnels souffrent d'un taux d'abandon élevé après deux semaines. Marcel devait transformer des routines répétitives en mécaniques gratifiantes, sans tomber dans le gadget superficiel ni alourdir la saisie quotidienne.",
    },
    approach: {
      title: "Une boucle de récompense directe servie par une stack ultra-rapide",
      description: "Nous avons repensé l'identité visuelle de fond en comble : palette vive, typographie nerveuse et signaux de progression clairs. Le moteur applicatif repose sur une API Go réactive et une interface SvelteKit réagissant sous les 16 millisecondes. Chaque validation d'habitude déclenche une rétroaction haptique et sonore mesurée.",
    },
    stats: [
      { label: "Temps de réponse API", value: "< 25ms" },
      { label: "Taux de rétention S4", value: "68%" },
      { label: "Score Lighthouse", value: "99/100" },
    ],
    gallery: [
      {
        src: "/images/projects/Marcel 3x3 dashboard.png",
        alt: "Tableau de bord principal Marcel avec vue des habitudes et métriques",
        caption: "Tableau de bord : synthèse quotidienne et quêtes actives",
        featured: true,
      },
      {
        src: "/images/projects/Marcel 2x3 rebranding.png",
        alt: "Recherche graphique et refonte de l'identité de marque Marcel",
        caption: "Refonte de marque : direction artistique et palette",
      },
      {
        src: "/images/projects/Marcel_1x2_phone.png",
        alt: "Application mobile Marcel sur smartphone",
        caption: "Expérience mobile : ergonomie au pouce et gestes rapides",
      },
      {
        src: "/images/projects/Marcel 2x2 logo.png",
        alt: "Logotype et grille de construction Marcel",
        caption: "Construction géométrique du logotype",
      },
      {
        src: "/images/projects/Marcel_2x1_onboarding.png",
        alt: "Parcours d'onboarding utilisateur Marcel",
        caption: "Parcours d'accueil épuré en trois étapes",
      },
      {
        src: "/images/projects/Marcel_2x2_calendar.png",
        alt: "Vue calendrier et historique de complétion Marcel",
        caption: "Vue temporelle des séries et régularité",
      },
    ],
  },
  {
    slug: "laura-herve",
    name: "Laura Hervé",
    client: "Laura Hervé Scénographie",
    category: "Vitrines",
    categories: ["Vitrines"],
    year: "2025",
    tagline: "Architecture d'intérieur et scénographie d'espaces vivants.",
    description: "Vitrine éditoriale au rythme photographique soigné pour une architecte et créatrice d'espaces. Transitions fluides, grand angle et immersion silencieuse.",
    cover: "/images/projects/LauraHerve.webp",
    stack: ["SvelteKit", "GSAP", "Tailwind CSS", "TypeScript"],
    deliverables: [
      "Direction artistique et typographie d'auteur",
      "Mise en scène photographique plein écran",
      "Animations de défilement discrètes sans à-coups",
      "Pipeline de compression d'images 4K sous les 200 Ko",
    ],
    challenge: {
      title: "Sublimer les volumes sans ralentir le rendu",
      description: "Les photographies d'architecture intérieure exigent un niveau de détail chirurgical. L'enjeu technique consistait à afficher des dizaines de clichés haute résolution tout en garantissant un affichage instantané et un défilement 60 FPS constant sur smartphone comme sur écran Retina.",
    },
    approach: {
      title: "Une mise en page éditoriale et un préchargement intelligent",
      description: "Nous avons conçu une interface dépouillée laissant respirer les textures brutes et les perspectives. L'encodage WebP adaptatif combiné à un préchargement par lot réduit le poids initial sous les 800 Ko sans aucune perte de piqué perceptible.",
    },
    stats: [
      { label: "Poids page moyen", value: "< 750 Ko" },
      { label: "Performance Lighthouse", value: "100/100" },
      { label: "Fluidité d'animation", value: "60 FPS" },
    ],
    gallery: [
      {
        src: "/images/projects/LauraHerve.webp",
        alt: "Page d'accueil du portfolio d'architecture d'intérieur Laura Hervé",
        caption: "Page d'accueil : typographie monumentale et mise en avant des chantiers",
        featured: true,
      },
      {
        src: "/images/projects/Laura.png",
        alt: "Détail de portfolio et vue projet scénographique",
        caption: "Vue projet : alternance de grands formats et de détails de matières",
      },
    ],
  },
  {
    slug: "projet-zero",
    name: "Projet Zéro",
    client: "Collectif Zéro",
    category: "3D",
    categories: ["3D", "Vitrines"],
    year: "2025",
    tagline: "Sensibilisation et action collective pour la transition écologique.",
    description: "Expérience web interactive mêlant visualisations de données temps réel, cartographie des initiatives locales et scènes 3D légères exécutées dans le navigateur.",
    cover: "/images/projects/ProjetZero_cover.png",
    stack: ["SvelteKit", "Three.js", "GLSL Shaders", "PostgreSQL"],
    deliverables: [
      "Scènes 3D interactives optimisées WebGL",
      "Visualisation de flux de données environnementales",
      "Cartographie interactive des points de collecte",
      "Architecture sobre à empreinte carbone minimale",
    ],
    challenge: {
      title: "Rendre l'impact écologique tangible sans lourdeur technique",
      description: "Sensibiliser sans culpabiliser nécessite de transformer des ordres de grandeur abstraits en visualisations compréhensibles. Le défi : intégrer des éléments 3D interactifs sur une cible grand public aux terminaux variés sans faire grimper l'empreinte énergétique de la page.",
    },
    approach: {
      title: "Shaders GLSL sur mesure et instanciation géométrique",
      description: "Nous avons bâti un univers visuel basé sur des shaders procéduraux légers avec Three.js. L'ensemble des calculs géométriques tourne sur GPU avec un budget mémoire inférieur à 25 Mo. La navigation reste fluide même sur des smartphones d'entrée de gamme.",
    },
    stats: [
      { label: "Budget mémoire GPU", value: "< 25 Mo" },
      { label: "Empreinte carbone", value: "0.12g CO2/vue" },
      { label: "Compatibilité mobile", value: "100%" },
    ],
    gallery: [
      {
        src: "/images/projects/ProjetZero_cover.png",
        alt: "Page d'accueil et visualisation 3D Projet Zéro",
        caption: "Écran d'ouverture : globe de données et indicateurs clés",
        featured: true,
      },
      {
        src: "/images/projects/ProjetZero_reveal.webp",
        alt: "Vue interactive de révélation des données environnementales",
        caption: "Module interactif : exploration des flux et leviers d'action",
      },
    ],
  },
  {
    slug: "solais-intra",
    name: "Solaïs",
    client: "Solaïs Énergie",
    category: "Applications",
    categories: ["Applications"],
    year: "2024",
    tagline: "Supervision centralisée d'installations solaires et autoconsommation.",
    description: "Portail technique pour le suivi en temps réel de parcs photovoltaïques, alertes d'anomalies matérielles et calcul automatisé des kilowattheures réinjectés.",
    cover: "/images/projects/SolaïsIntra.webp",
    stack: ["Go", "SvelteKit", "TimescaleDB", "MQTT", "Docker"],
    deliverables: [
      "Ingestion télémétrique haute fréquence MQTT",
      "Tableau de bord temps réel multi-sites",
      "Moteur d'alerte sur seuil d'anomalie",
      "Module de facturation et export réglementaire",
    ],
    challenge: {
      title: "Traiter des flux télémétriques continus sans latence",
      description: "Avec des centaines d'onduleurs transmettant tensions, températures et puissances instantanées toutes les 5 secondes, l'infrastructure devait absorber les pics de charge sans ralentir les consultations des techniciens d'astreinte sur le terrain.",
    },
    approach: {
      title: "Pipeline TimescaleDB et mise à jour temps réel par WebSockets",
      description: "Un démon Go ingère les paquets MQTT industriels, les agrège en mémoire et les compresse dans TimescaleDB. L'interface Svelte reçoit les deltas via WebSockets binaires, garantissant un rafraîchissement à la seconde avec une charge serveur minimale.",
    },
    stats: [
      { label: "Points de mesure / sec", value: "12 000" },
      { label: "Latence d'alerte", value: "< 1.2s" },
      { label: "Disponibilité annuelle", value: "99.98%" },
    ],
    gallery: [
      {
        src: "/images/projects/SolaïsIntra.webp",
        alt: "Interface de supervision des parcs photovoltaïques Solaïs",
        caption: "Console de supervision : métriques des onduleurs et alertes en direct",
        featured: true,
      },
    ],
  },
  {
    slug: "evelyne-crea",
    name: "Évelyne Création",
    client: "Atelier Évelyne",
    category: "Vitrines",
    categories: ["Vitrines", "Branding"],
    year: "2024",
    tagline: "Atelier de céramique artisanale et pièces sculpturales.",
    description: "Identité visuelle singulière et vitrine numérique pour une artisane céramiste. Révélation des matières brutes, catalogue de pièces uniques et prise de contact sur mesure.",
    cover: "/images/projects/EvelyneCrea.webp",
    stack: ["SvelteKit", "Tailwind CSS", "TypeScript"],
    deliverables: [
      "Charte graphique, logotype et papeterie",
      "Catalogue de pièces avec filtres de matières",
      "Mise en avant des étapes de cuisson et façonnage",
      "Optimisation SEO local pour l'atelier",
    ],
    challenge: {
      title: "Retranscrire la texture minérale et l'authenticité du fait main",
      description: "L'artisanat d'art exige une sensibilité graphique rare sur le web. Le site devait évoquer la chaleur de la terre cuite et l'aspérité des émaux, sans artifices ni surcharge visuelle qui détournerait le regard des créations.",
    },
    approach: {
      title: "Nuances terreuses, typographie fine et mise au point macro",
      description: "Nous avons élaboré une identité reposant sur des contrastes subtils de gris chauds et d'ocres. La vitrine valorise chaque pièce par une composition asymétrique et des prises de vue rapprochées révélant le grain naturel de l'argile.",
    },
    stats: [
      { label: "Prises de contact atelier", value: "+140%" },
      { label: "Temps de chargement", value: "0.4s" },
      { label: "Score accessibilité", value: "100/100" },
    ],
    gallery: [
      {
        src: "/images/projects/EvelyneCrea.webp",
        alt: "Vitrine de l'Atelier Évelyne Création avec catalogue de céramiques",
        caption: "Vitrine de l'atelier : sélection des pièces et narration de l'artisanat",
        featured: true,
      },
    ],
  },
  {
    slug: "retro-festival",
    name: "Rétro Festival",
    client: "Association Rétro Culture",
    category: "Branding",
    categories: ["Branding", "Vitrines"],
    year: "2024",
    tagline: "Festival indépendant célébrant le jeu vidéo d'époque et la culture pop.",
    description: "Direction artistique rétro-futuriste, identité complète de l'événement, programmation scénique horaire et système de billetterie sans frais intermédiaires.",
    cover: "/images/projects/RetroFestival.webp",
    stack: ["SvelteKit", "Tailwind CSS", "Go", "Stripe"],
    deliverables: [
      "Identité de marque, affiches et déclinaisons print",
      "Plateforme web avec grille horaire dynamique",
      "Billetterie intégrée sans intermédiaire",
      "Plan interactif du festival et des stands",
    ],
    challenge: {
      title: "Créer une ferveur visuelle tout en assurant des pics de billetterie",
      description: "Lors de l'ouverture de la billetterie, plusieurs milliers de visiteurs se connectent simultanément en quelques minutes. L'interface devait concilier un style visuel percutant d'inspiration arcade avec une robustesse transactionnelle à toute épreuve.",
    },
    approach: {
      title: "Graphisme percutant et serveur Go dimensionné pour les pics",
      description: "Nous avons combiné des typographies bitmap stylisées avec une palette néon sur fond sombre. Le système de réservation en Go gère les files d'attente et la validation Stripe en quelques millisecondes, garantissant zéro plantage lors des ouvertures de vente.",
    },
    stats: [
      { label: "Billets vendus en J1", value: "3 500" },
      { label: "Temps de paiement moyen", value: "38s" },
      { label: "Disponibilité pic de trafic", value: "100%" },
    ],
    gallery: [
      {
        src: "/images/projects/RetroFestival.webp",
        alt: "Affiche et vitrine web de l'événement Rétro Festival",
        caption: "Plateforme du festival : univers visuel 80s et programmation interactive",
        featured: true,
      },
    ],
  },
];

export const SUITE_TOOLS: ToolItem[] = [
  {
    id: "bulle",
    name: "Bulle",
    tagline: "Compagnon IA autonome dans sa microVM dédiée",
    description: "Agent d'ingénierie complet avec VM persistante, chat Matrix, OpenUI et avatar expressif.",
    icon: "solar:smile-circle-bold-duotone",
    category: "agent",
    categoryLabel: "IA & Agents",
    url: "https://bulle.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Bulle",
    tag: "MicroVM · Matrix · OpenUI",
    badge: "Nouveau",
  },
  {
    id: "pastille",
    name: "Pastille",
    tagline: "Balise vocale et capteur connecté libre de 38 mm",
    description: "Hardware ouvert BOHS-01, audio 16 kHz duplex, écran circulaire IPS et firmware Rust Embassy.",
    icon: "solar:circle-dot-bold-duotone",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    url: "https://pastille.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Pastille",
    tag: "ESP32-S3 · Embassy · BLE",
    badge: "Nouveau",
  },
  {
    id: "fusible",
    name: "Fusible",
    tagline: "Linter et gestionnaire de projets électroniques en Rust",
    description: "Vérification de règles électriques, parser Gerber/KiCad et générateur de pinouts pour Embassy.",
    icon: "solar:cpu-bolt-bold-duotone",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    githubUrl: "https://github.com/FacileStudio",
    tag: "Rust · Gerber · ERC",
    badge: "Nouveau",
  },
  {
    id: "sablier",
    name: "Sablier",
    tagline: "Vos heures facturables, tracées sans friction",
    description: "Un clic pour lancer, un clic pour arrêter. Ventilation par projet et sessions partagées en direct.",
    icon: "solar:hourglass-bold-duotone",
    category: "productivity",
    categoryLabel: "Productivité",
    url: "https://sablier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Sablier",
    tag: "Temps · Projets",
  },
  {
    id: "opus",
    name: "Opus",
    tagline: "La gestion de projet qui ne vous ralentit pas",
    description: "Kanban épuré, relations entre tâches, recherche instantanée. L'essentiel qui fait le maximum.",
    icon: "solar:box-minimalistic-bold-duotone",
    category: "productivity",
    categoryLabel: "Productivité",
    url: "https://opus.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Opus",
    tag: "Kanban · Tâches",
  },
  {
    id: "vision",
    name: "Vision",
    tagline: "L'analytique web qui respecte vos visiteurs",
    description: "Un script ultraléger, zéro cookie, données en temps réel et conformité RGPD native.",
    icon: "solar:panorama-bold-duotone",
    category: "business",
    categoryLabel: "Business",
    url: "https://vision.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Vision",
    tag: "Analytique · RGPD",
  },
  {
    id: "glouton",
    name: "Glouton",
    tagline: "Vos prochains clients trouvés pendant que vous dormez",
    description: "Glouton explore le web, analyse les stacks techniques et qualifie les prospects pour le studio.",
    icon: "solar:leaf-bold-duotone",
    category: "business",
    categoryLabel: "Business",
    url: "https://glouton.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Glouton",
    tag: "Prospection · Web",
  },
  {
    id: "ardoise",
    name: "Ardoise",
    tagline: "Facturez, encaissez, oubliez",
    description: "Stripe intégré, devis convertis en un clic, relances automatiques et reçus PDF fiscaux.",
    icon: "solar:bill-list-bold-duotone",
    category: "business",
    categoryLabel: "Business",
    url: "https://ardoise.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Ardoise",
    tag: "Factures · Stripe",
  },
  {
    id: "plume",
    name: "Plume",
    tagline: "La signature électronique sans usine à gaz",
    description: "Déposez un PDF, placez les champs de signature, envoyez le lien au client. Simple et opposable.",
    icon: "solar:ruler-cross-pen-bold-duotone",
    category: "business",
    categoryLabel: "Business",
    url: "https://plume.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Plume",
    tag: "Signature · PDF",
  },
  {
    id: "casier",
    name: "Casier",
    tagline: "Coffre-fort à secrets pour votre équipe",
    description: "Chiffrement AES-256-GCM, injection dans le shell, historique versionné et audit trail complet.",
    icon: "solar:safe-2-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://casier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Casier",
    tag: "Secrets · AES-256",
  },
  {
    id: "nuage",
    name: "Nuage",
    tagline: "Le stockage fichiers du studio",
    description: "Drive interne connecté à tous vos outils via API S3 compatible. Partage sécurisé sans intermédiaire.",
    icon: "solar:cloud-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://nuage.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Nuage",
    tag: "Fichiers · S3",
  },
  {
    id: "courrier",
    name: "Courrier",
    tagline: "Votre email chez vous",
    description: "IMAP et SMTP natifs, gestion multi-comptes, interface épurée pensée pour la concentration.",
    icon: "solar:letter-opened-bold-duotone",
    category: "productivity",
    categoryLabel: "Productivité",
    url: "https://courrier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Courrier",
    tag: "Email · IMAP/SMTP",
  },
  {
    id: "agenda",
    name: "Agenda",
    tagline: "Le calendrier partagé du studio",
    description: "Rendez-vous, deadlines, disponibilités d'équipe. CalDAV natif, sans passer par Google.",
    icon: "solar:calendar-add-bold-duotone",
    category: "productivity",
    categoryLabel: "Productivité",
    url: "https://agenda.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Agenda",
    tag: "CalDAV · Planning",
  },
  {
    id: "echo",
    name: "Echo",
    tagline: "Visioconférence chiffrée sans installation",
    description: "Créez une salle, partagez l'URL, démarrez l'échange. Basé sur WebRTC sécurisé.",
    icon: "solar:monitor-camera-bold-duotone",
    category: "productivity",
    categoryLabel: "Productivité",
    url: "https://echo.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Echo",
    tag: "WebRTC · Visio",
  },
  {
    id: "capsule",
    name: "Capsule",
    tagline: "Partagez un secret qui s'autodétruit",
    description: "Chiffrement de bout en bout dans le navigateur, zero-knowledge côté serveur, expiration configurable.",
    icon: "solar:pills-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://capsule.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Capsule",
    tag: "E2EE · Zero-Knowledge",
  },
  {
    id: "scribe",
    name: "Scribe",
    tagline: "Transcription audio et synthèses structurées",
    description: "Capture des réunions, transcription locale temps réel et comptes-rendus exploitables.",
    icon: "solar:microphone-2-bold-duotone",
    category: "agent",
    categoryLabel: "IA & Agents",
    url: "https://scribe.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Scribe",
    tag: "Audio · Synthèse",
  },
  {
    id: "journal",
    name: "Journal",
    tagline: "Logs centralisés pour toute l'infrastructure",
    description: "Collecteur Docker, recherche instantanée, détection d'erreurs et alertes automatiques.",
    icon: "solar:notebook-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://journal.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Journal",
    tag: "Télémétrie · Logs",
  },
  {
    id: "antenne",
    name: "Antenne",
    tagline: "Le bus d'événements central de la suite",
    description: "Centralisez les alertes de toute l'infrastructure et distribuez-les sur Discord, Matrix ou SMS.",
    icon: "solar:satellite-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://antenne.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Antenne",
    tag: "Event Bus · Alertes",
  },
  {
    id: "sonde",
    name: "Sonde",
    tagline: "Surveillance de disponibilité et status page publique",
    description: "Heartbeats automatiques, sondes multi-régions et notification immédiate en cas d'incident.",
    icon: "solar:radar-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://sonde.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Sonde",
    tag: "Uptime · Statut",
  },
  {
    id: "porte",
    name: "Porte",
    tagline: "Authentification unifiée SSO pour tout l'écosystème",
    description: "Protocole OIDC standardisé, sessions partagées et sécurité zéro compromis sur tous les outils.",
    icon: "solar:lock-keyhole-bold-duotone",
    category: "infra",
    categoryLabel: "Infrastructure",
    url: "https://sso.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Porte",
    tag: "OIDC · SSO",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Toute la suite" },
  { id: "agent", label: "IA & Agents" },
  { id: "hardware", label: "Hardware" },
  { id: "business", label: "Business" },
  { id: "productivity", label: "Productivité" },
  { id: "infra", label: "Infrastructure" },
] as const;

export const NAV_LINKS = [
  { id: "hero", label: "Studio" },
  { id: "services", label: "Prestations" },
  { id: "projets", label: "Réalisations" },
  { id: "ecosystem", label: "Architecture" },
  { id: "suite", label: "La Suite" },
  { id: "bulle", label: "Bulle" },
  { id: "hardware", label: "Atelier R&D" },
  { id: "contact", label: "Contact" },
] as const;

export const STUDIO_METRICS = [
  { value: "100%", label: "Code propriétaire ou open source", sub: "Aucun CMS tiers" },
  { value: "60 FPS", label: "Fluidité d'interaction", sub: "Animations optimisées" },
  { value: "< 50ms", label: "Temps de réponse moyen", sub: "Sur nos applications Go" },
  { value: "0", label: "Abonnement captif inutile", sub: "Hébergement maîtrisé" },
];

export const HERO_STATS = [
  { label: "Outils Intégrés", value: "20", detail: "Hébergés sous facile.studio" },
  { label: "Single Sign-On", value: "1 Compte", detail: "OIDC standardisé RFC 8628" },
  { label: "Hardware & IA", value: "BOHS-01", detail: "Pastille Charm + Agent Bulle" },
  { label: "Dépendance Cloud", value: "0%", detail: "Vos serveurs, vos données" },
];
