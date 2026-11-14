import type { Messages } from "./fr";

export const en: Messages = {
  meta: {
    ogImageAlt: "Facile Studio: Web design and engineering studio",
  },
  common: {
    startProject: "Start a project",
    phone: "+33 7 68 88 88 18",
    home: "Home",
    projects: "Projects",
    backHome: "Back to home",
    newBadge: "New",
  },
  nav: {
    services: "Services",
    projets: "Projects",
    suite: "Suite",
    ecosystem: "Ecosystem",
    bulle: "Bulle",
    hardware: "Pastille",
    portfolio: "Portfolio",
  },
  footer: {
    studio: "Studio",
    products: "Products",
    contact: "Contact",
    projects: "Projects",
    account: "Facile account",
    suite: "The Suite",
    location: "Lyon · Strasbourg · Remote",
  },
  actions: {
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
  },
  home: {
    meta: {
      title: "Facile Studio · Web design and engineering studio",
      description: "Showcase sites, custom web apps, art direction and sovereign hosting, from the studio behind the Facile Suite.",
    },
    hero: {
      titleLine1: "We simplify,",
      titleLine2: "you create.",
      definition: "Done without effort, with no difficulty at all. Simple, easy.",
      intro: "A web design and engineering studio. We design, build and host showcase sites, apps and visual identities. Lightweight code, fast pages, and close attention to detail.",
      seeWork: "See our work",
    },
    services: {
      eyebrow: "Studio services",
      title: "What we build for you",
      intro: "You work directly with the designers and developers building your project. No middlemen.",
      deliverables: "Included deliverables",
      customTitle: "Need something outside these boxes?",
      customText: "Send us your brief and we will reply with a proposal within 48 hours.",
      quote: "Request a quote",
    },
    projects: {
      title: "Recent projects",
      intro: "Sites and apps designed and shipped by the studio.",
      viewAll: "View the full portfolio",
      live: "Live site",
      caseStudy: "Read the case study",
    },
    suite: {
      eyebrow: "Free to start",
      title: "The Facile Suite",
      intro: "The {count} open-source tools we built to ship your projects. Projects, invoices, files, email, calendar: one Facile account for all of it.",
      signupNote: "Free, and it takes a minute.",
      open: "Open",
      repo: "GitHub repo",
      showLess: "Show less",
      showMore: "Show the other {count} tools",
    },
    ecosystem: {
      title: "Tools that talk to each other",
      intro: "The Suite's tools and the projects we ship exchange data through open APIs and a shared event bus.",
    },
    bulle: {
      eyebrow: "Included in the Suite",
      title: "Bulle, the agent connected to all your tools",
      intro: "Bulle has its own computer, a Linux microVM, and plugs into all your Facile tools. It reads and writes your email in Courrier, files your tasks in Opus, books your meetings in Agenda, manages your files in Nuage and deploys your projects.",
      chips: [
        "Sovereign Linux microVM",
        "Courrier · Opus · Agenda · Nuage",
        "Matrix E2EE & Prisme",
        "Native MCP tools",
      ],
      try: "Try Bulle",
      source: "Source code",
    },
    hardware: {
      title: "Pastille, the voice assistant that fits in your palm",
      intro: "The studio also runs a hardware R&D workshop for custom connected devices. Pastille is our open demo: a 38 mm charm with an ESP32-S3, a round IPS display and firmware written in Rust with Embassy.",
      site: "Official Pastille site",
      schematics: "KiCad schematics",
    },
    contact: {
      title: "Have a site or an app in mind?",
      intro: "Tell us about your project, your constraints and your deadlines. We build showcase sites, business apps and hosting.",
      mailSubject: "[Project] New project with Facile Studio",
      noProjectTitle: "No project yet?",
      noProjectText: "Try the studio's tools. Your Facile account is free and opens the whole Suite.",
    },
  },
  community: {
    title: "A community that talks",
    intro: "Live discussions from Place. Ask questions, follow announcements, chat with the team.",
    announcement: "Announcement",
    today: "today",
    yesterday: "yesterday",
    daysAgo: "{count} days ago",
    replyOne: "{count} reply",
    replyMany: "{count} replies",
    newTopic: "New topic",
    join: "Join the community",
    discord: "Join the Discord",
  },
  pcb: {
    circuit: "3D circuit",
    case: "Case",
    auto: "Auto",
    loading: "Loading 3D model",
    unavailable: "3D preview unavailable",
    unavailableText: "The model could not load in this browser.",
    hint: "Drag to rotate · Scroll to zoom",
    validated: "Pastille · ERC/DRC passed",
  },
  graph: {
    label: "Architecture and connected ecosystem of the Facile Suite",
    categories: {
      bulle: "AI agent",
      pastille: "Hardware & IoT",
      fusible: "Electronics",
      sablier: "Time",
      opus: "Projects",
      vision: "Analytics",
      glouton: "Prospecting",
      ardoise: "Invoicing",
      plume: "Signatures",
      casier: "Secrets",
      nuage: "Storage",
      courrier: "Email",
      agenda: "Scheduling",
      feuilles: "Spreadsheets",
      docs: "Documents",
      toile: "Whiteboard",
      echo: "Video calls",
      capsule: "Encryption",
      scribe: "Audio",
      journal: "Logs",
      prisme: "Matrix chat",
      sonde: "Status",
      registre: "SSO auth",
      boite: "Packages",
      place: "Community",
    },
  },
  suiteCategories: {
    all: "Whole suite",
    agent: "AI & Agents",
    hardware: "Hardware",
    business: "Business",
    productivity: "Productivity",
    infra: "Infrastructure",
  },
  projectCategories: {
    all: "All",
    showcase: "Showcase sites",
    apps: "Apps",
    branding: "Branding",
    "3d": "3D",
  },
  projectsPage: {
    meta: {
      title: "Projects · Facile Studio",
      description: "Studio case studies. Showcase sites, business apps, art direction and 3D experiences.",
    },
    eyebrow: "Portfolio",
    title: "Case studies & work",
    intro: "Every project is custom-built, with no lock-in and APIs that respond in under 50 ms.",
    keyDeliverables: "Key deliverables",
    caseStudy: "Case study",
    ctaTitle: "Planning an app or a showcase site?",
    ctaText: "We design, build and host your tools, with no middlemen.",
    ctaButton: "Talk about your project",
  },
  projectPage: {
    metaTitle: "{name} · Case study · Facile Studio",
    metaDescription: "{name} by Facile Studio: {tagline}",
    back: "Back to projects",
    visit: "Visit the site",
    coverAlt: "Main preview of the {name} project",
    problem: "The problem",
    solution: "The solution",
    galleryEyebrow: "Screenshots",
    galleryTitle: "Gallery",
    galleryIntro: "Screenshots of production deliverables and mockups.",
    deliverables: "Project deliverables",
    stack: "Technologies & components",
    stackNote: "No closed proprietary dependencies. The code stays light and auditable.",
    ctaTitle: "Start a similar project",
    ctaText: "Similar goals for your app or showcase site? We will review your needs within 48 hours.",
    others: "Other projects",
    contact: "Contact us",
  },
  contact: {
    meta: {
      title: "Start a project · Facile Studio",
      description: "Tell us about your project. Custom design, solid code and sovereign hosting.",
    },
    progress: "Step {step} of {total}",
    steps: [
      "Project",
      "Budget",
      "Vision",
      "Contact",
    ],
    done: {
      title: "Your request is ready",
      text: "Your email app opened with the summary. Send the email and we will reply within 24 business hours.",
      summary: "Summary of your request",
      type: "Type:",
      budget: "Estimated budget:",
      timeline: "Timeline:",
      contact: "Contact:",
      edit: "Edit my request",
    },
    typeStep: {
      title: "What kind of project do you want to build?",
      intro: "Pick your main need.",
    },
    types: {
      showcase: {
        title: "Standout showcase site",
        category: "Showcase sites & Art direction",
        description: "Custom design, 60 FPS animations, SEO and an identity people remember.",
      },
      app: {
        title: "Web app & SaaS",
        category: "Engineering & Product",
        description: "Business tools, fast APIs, a reliable database and custom logic.",
      },
      branding: {
        title: "Art direction & Branding",
        category: "Design & Identity",
        description: "Logotype, typography, brand guidelines, design system and 3D mockups.",
      },
      infra: {
        title: "Infra & Sovereign hosting",
        category: "DevOps & Cloud",
        description: "Dedicated servers in Europe, Docker, Nginx and high availability.",
      },
      rnd: {
        title: "R&D, Hardware & Other",
        category: "Hardware & R&D",
        description: "Connected devices, Rust Embassy firmware, microVMs or an experimental project.",
      },
    },
    budgetStep: {
      title: "Budget and timeline",
      intro: "These ranges help us size the project.",
      budgetLabel: "Planned budget",
      timelineLabel: "Desired deadline or timeline",
    },
    budgets: {
      xs: {
        label: "< €5k",
        note: "Scoping or a small showcase site",
      },
      s: {
        label: "€5k–15k",
        note: "Custom showcase site or the first version of an app",
      },
      m: {
        label: "€15k–30k",
        note: "Full app, branding and design system",
      },
      l: {
        label: "> €30k",
        note: "Large app, R&D or a full ecosystem",
      },
    },
    timelines: {
      asap: "As soon as possible (< 1 month)",
      soon: "Within 1 to 3 months",
      later: "Within 3 to 6 months",
      flexible: "No fixed deadline",
    },
    visionStep: {
      title: "Tell us about your project",
      intro: "A few words are enough. Your business, your expectations, your constraints.",
      shortcuts: "Shortcuts:",
      detailsLabel: "Details (optional, but helpful)",
      placeholder: "Your audience, sites that inspire you, must-have features...",
    },
    tags: {
      redesign: "Redesign of an existing site",
      newSite: "New site",
      performance: "Performance",
      design: "Design & animations",
      hosting: "Sovereign hosting",
    },
    contactStep: {
      title: "How can we get back to you?",
      intro: "We review your project and reply within 24 business hours.",
      name: "Name or company *",
      namePlaceholder: "Alexandre Dumas, Studio Dumas",
      email: "Email *",
      emailPlaceholder: "alexandre@domaine.fr",
      phone: "Phone (optional)",
      phonePlaceholder: "+33 6 12 34 56 78",
      summary: "Project summary",
      nature: "Project type",
      budget: "Estimated budget",
      timeline: "Timeline",
      keyPoints: "Key points",
      notes: "Your notes",
      quote: "“{message}”",
      reply: "Reply within 24 business hours",
      transparent: "Transparent, no-obligation quote",
    },
    prev: "Back",
    next: "Continue",
    submit: "Send my project",
    mail: {
      subject: "[Project] {type} - {name}",
      greeting: "Hello Facile Studio,",
      name: "Name / Company:",
      email: "Email:",
      phone: "Phone:",
      type: "Project type:",
      budget: "Estimated budget:",
      timeline: "Target timeline:",
      keyPoints: "Key points:",
      description: "Description of the need:",
      notProvided: "Not provided",
      none: "None",
      toBeDefined: "To be discussed in our first call.",
      sentFrom: "Sent from facile.studio/contact",
    },
  },
  services: {
    showcase: {
      title: "Showcase sites",
      tagline: "A site that brings in clients.",
      description: "Custom design, careful typography, 60 FPS animations and technical SEO. No templates: every site starts from a blank page.",
      deliverables: [
        "Bespoke UI/UX design",
        "Lightweight GSAP & WebGL animations",
        "Lighthouse score 95+",
        "Mobile-first & accessible",
      ],
    },
    apps: {
      title: "Web & business apps",
      tagline: "The tools your business needs, and nothing more.",
      description: "SvelteKit and Go for the code, Postgres for the data, documented APIs. We build the software your need calls for, not a feature catalog.",
      deliverables: [
        "Client portals & SaaS",
        "Real-time dashboards",
        "Secure authentication",
        "API & payment integrations",
      ],
    },
    branding: {
      title: "Art direction & branding",
      tagline: "An identity people recognize at first glance.",
      description: "Logotype, brand guidelines, design system, 3D assets and typography rules. It all works as well on screen as on paper.",
      deliverables: [
        "Visual identity & logotype",
        "Design system & components",
        "Interactive 3D modeling",
        "Typography & palette",
      ],
    },
    devops: {
      title: "Infra & sovereign hosting",
      tagline: "Your servers, your data, no lock-in.",
      description: "Dedicated Hetzner servers, Docker containers, automatic SSL certificates through Traefik, encrypted backups and monitoring.",
      deliverables: [
        "Zero-downtime continuous deployment",
        "Sovereign European hosting",
        "24/7 monitoring & alerts",
        "Automated backups",
      ],
    },
  },
  projects: {
    marcel: {
      tagline: "Turning everyday tasks into a heroic quest.",
      description: "Brand redesign and a gamified productivity app. Habit tracking, experience points and visible progress.",
      deliverables: [
        "Full visual identity & logotype",
        "Real-time responsive web app",
        "Gamification and scoring engine",
        "High-performance Go API and Postgres schema",
      ],
      challenge: {
        title: "Pairing daily discipline with lasting engagement",
        description: "Traditional productivity tools see high drop-off after two weeks. Marcel had to turn repetitive routines into rewarding mechanics, without becoming a shallow gimmick or making daily input heavier.",
      },
      approach: {
        title: "A direct reward loop on a very fast stack",
        description: "We rethought the visual identity from the ground up: a vivid palette, punchy typography and clear progress signals. The app runs on a responsive Go API and a SvelteKit interface that reacts in under 16 milliseconds. Every completed habit triggers measured haptic and sound feedback.",
      },
      stats: [
        {
          label: "API response time",
          value: "< 25ms",
        },
        {
          label: "Week-4 retention",
          value: "68%",
        },
        {
          label: "Lighthouse score",
          value: "99/100",
        },
      ],
      gallery: [
        {
          alt: "Main Marcel dashboard showing habits and metrics",
          caption: "Dashboard: daily summary and active quests",
        },
        {
          alt: "Graphic exploration and redesign of the Marcel brand identity",
          caption: "Brand redesign: art direction and palette",
        },
        {
          alt: "Marcel mobile app on a smartphone",
          caption: "Mobile experience: thumb-friendly layout and quick gestures",
        },
        {
          alt: "Marcel logotype and construction grid",
          caption: "Geometric construction of the logotype",
        },
        {
          alt: "Marcel user onboarding flow",
          caption: "A clean three-step onboarding flow",
        },
        {
          alt: "Marcel calendar view and completion history",
          caption: "Timeline view of streaks and consistency",
        },
      ],
    },
    "laura-herve": {
      tagline: "Interior architecture and scenography.",
      description: "Editorial showcase site for an interior architect. Large photos, soft transitions and little text.",
      deliverables: [
        "Art direction and signature typography",
        "Full-screen photo staging",
        "Subtle, smooth scroll animations",
        "Image pipeline compressing 4K photos under 200 KB",
      ],
      challenge: {
        title: "Showcasing space without slowing the page",
        description: "Interior architecture photos demand surgical detail. The technical challenge was to show dozens of high-resolution shots while keeping display instant and scrolling at a steady 60 FPS on phones and Retina screens alike.",
      },
      approach: {
        title: "An editorial layout and smart preloading",
        description: "We designed a stripped-back interface that lets raw textures and perspectives breathe. Adaptive WebP encoding combined with batched preloading keeps the initial weight under 800 KB with no visible loss of sharpness.",
      },
      stats: [
        {
          label: "Average page weight",
          value: "< 750 KB",
        },
        {
          label: "Lighthouse performance",
          value: "100/100",
        },
        {
          label: "Animation smoothness",
          value: "60 FPS",
        },
      ],
      gallery: [
        {
          alt: "Home page of Laura Hervé's interior architecture portfolio",
          caption: "Home page: monumental typography and featured projects",
        },
        {
          alt: "Widescreen layout and photography of spaces",
          caption: "Widescreen view: room to breathe and balanced white space",
        },
        {
          alt: "Responsive mobile version of Laura Hervé's portfolio",
          caption: "Mobile version: smooth touch and frictionless navigation",
        },
        {
          alt: "Facade and architectural volumes",
          caption: "High-definition photography: play of shadows and raw volumes",
        },
        {
          alt: "Portfolio detail and scenography project view",
          caption: "Project view: large formats alternating with material details",
        },
      ],
    },
    "projet-zero": {
      tagline: "Awareness and collective action for the ecological transition.",
      description: "Interactive site with real-time data, a map of local initiatives and lightweight 3D scenes in the browser.",
      deliverables: [
        "Interactive 3D scenes optimized for WebGL",
        "Visualization of environmental data flows",
        "Interactive map of collection points",
        "Lean architecture with a minimal carbon footprint",
      ],
      challenge: {
        title: "Making ecological impact tangible without technical bloat",
        description: "Raising awareness without guilt-tripping means turning abstract orders of magnitude into visuals people understand. The challenge: add interactive 3D for a broad audience on all kinds of devices without driving up the page's energy footprint.",
      },
      approach: {
        title: "Custom GLSL shaders and geometry instancing",
        description: "We built a visual world on lightweight procedural shaders with Three.js. All geometry runs on the GPU within a memory budget under 25 MB. Navigation stays smooth even on entry-level phones.",
      },
      stats: [
        {
          label: "GPU memory budget",
          value: "< 25 MB",
        },
        {
          label: "Carbon footprint",
          value: "0.12 g CO2/view",
        },
        {
          label: "Mobile compatibility",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Projet Zéro home page and 3D visualization",
          caption: "Opening screen: data globe and key indicators",
        },
        {
          alt: "Interactive view revealing environmental data",
          caption: "Interactive module: exploring flows and levers for action",
        },
        {
          alt: "Node visualization and interconnection graph",
          caption: "Impact graph: the network of local ecological initiatives",
        },
        {
          alt: "Particle simulation of carbon flows",
          caption: "Lightweight WebGL physics simulation animated in real time",
        },
        {
          alt: "Energy indicators and real-time conversion",
          caption: "Board of high-leverage actions",
        },
      ],
    },
    bulle: {
      tagline: "An autonomous coding agent with its own computer in the browser.",
      description: "Each session runs in its own Linux microVM, with a real-time streaming interface. Bulle runs, tests and deploys the code.",
      deliverables: [
        "Isolated Linux microVM per session",
        "Real-time inference streaming and MCP tools",
        "Reactive Svelte 5 user interface",
        "Encrypted Matrix E2EE sync protocol",
      ],
      challenge: {
        title: "Delivering a fully autonomous agent without compromising security",
        description: "Giving a language model full shell access and a file system requires complete isolation and minimal network latency. Each session had to start in under two seconds inside a sealed sandbox.",
      },
      approach: {
        title: "Instant Linux microVMs and a native Go control protocol",
        description: "We built a runtime around Linux micro virtual machines paired with a lightweight Go daemon. The agent works on the file tree, runs builds and streams its steps over a typed event channel.",
      },
      stats: [
        {
          label: "MicroVM boot",
          value: "< 1.8s",
        },
        {
          label: "Streaming latency",
          value: "< 16ms",
        },
        {
          label: "Memory isolation",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Web interface of the Bulle autonomous coding agent",
          caption: "Bulle workspace: terminal, file tree and reasoning stream",
        },
        {
          alt: "Execution graph and agent orchestration",
          caption: "Multi-agent orchestration and task planning",
        },
        {
          alt: "Particle visualization of tokens and flows",
          caption: "Real-time visualization of model activity",
        },
      ],
    },
    "evelyne-crea": {
      tagline: "Handmade ceramics studio and sculptural pieces.",
      description: "Visual identity and website for a ceramicist. A catalog of one-of-a-kind pieces, material photography and a contact form.",
      deliverables: [
        "Brand guidelines, logotype and stationery",
        "Piece catalog with material filters",
        "Spotlight on the firing and shaping process",
        "Local SEO for the studio",
      ],
      challenge: {
        title: "Conveying mineral texture and the authenticity of handmade work",
        description: "Fine craft calls for rare graphic sensitivity on the web. The site had to evoke the warmth of terracotta and the roughness of glazes, with no gimmicks or visual clutter pulling the eye away from the work.",
      },
      approach: {
        title: "Earthy tones, fine typography and macro focus",
        description: "We built an identity on subtle contrasts of warm greys and ochres. The site gives each piece its moment through asymmetric composition and close-up shots that reveal the natural grain of the clay.",
      },
      stats: [
        {
          label: "Studio inquiries",
          value: "+140%",
        },
        {
          label: "Load time",
          value: "0.4s",
        },
        {
          label: "Accessibility score",
          value: "100/100",
        },
      ],
      gallery: [
        {
          alt: "Atelier Évelyne Création site with ceramics catalog",
          caption: "Studio site: selected pieces and the story of the craft",
        },
        {
          alt: "Pavements ceramic series and mineral textures",
          caption: "Pavements series: mineral sculptural work and glaze textures",
        },
        {
          alt: "Green ceramic series with plant forms and color contrasts",
          caption: "Green series: organic color studies and plant forms",
        },
        {
          alt: "Harmonie glazed ceramic series",
          caption: "Harmonie series: balanced materials and high-temperature firing",
        },
        {
          alt: "Temple monumental ceramic series",
          caption: "Temple series: one-of-a-kind architectural pieces and raw volumes",
        },
        {
          alt: "Escaliers series with geometry and cast shadows",
          caption: "Escaliers series: lines and geometric shadow play",
        },
      ],
    },
    "retro-festival": {
      tagline: "An independent festival celebrating retro video games and pop culture.",
      description: "Retro-futuristic art direction, event identity, schedule and ticketing with no middleman fees.",
      deliverables: [
        "Brand identity, posters and print materials",
        "Web platform with a dynamic schedule",
        "Built-in ticketing with no middleman",
        "Interactive map of the festival and stands",
      ],
      challenge: {
        title: "Building visual excitement while handling ticketing spikes",
        description: "When ticket sales open, several thousand visitors connect within minutes. The interface had to pair a bold arcade-inspired look with rock-solid transaction handling.",
      },
      approach: {
        title: "Bold graphics and a Go server sized for peaks",
        description: "We paired stylized bitmap typefaces with a neon palette on a dark background. The Go booking system handles queues and Stripe validation in milliseconds, with zero crashes when sales open.",
      },
      stats: [
        {
          label: "Tickets sold on day 1",
          value: "3,500",
        },
        {
          label: "Average checkout time",
          value: "38s",
        },
        {
          label: "Uptime at peak traffic",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Rétro Festival poster and event website",
          caption: "Festival platform: 80s visual world and interactive schedule",
        },
        {
          alt: "Visual work and retro gaming graphic world",
          caption: "Screen-printed posters and illustrations made for the event",
        },
        {
          alt: "Typographic variations and fanzines",
          caption: "Monochrome variations and physical signage for the stands",
        },
        {
          alt: "Scenography and arcade tournaments",
          caption: "Visual staging for retro tournaments and vintage arcade cabinets",
        },
        {
          alt: "Pixel art and competition awards",
          caption: "Exclusive pixel art badges awarded to finalists",
        },
      ],
    },
  },
  tools: {
    bulle: {
      tagline: "An AI assistant that gets the work done in your Facile apps.",
      description: "Bulle reads your mail, finds a slot in your calendar and files your tasks across the Facile apps. It asks before it acts.",
      tag: "AI · Assistant",
    },
    prisme: {
      tagline: "Team chat, one room per project.",
      description: "A room per project, a video call in one click, and Bulle answering when you mention it.",
      tag: "Chat · Matrix E2EE",
    },
    courrier: {
      tagline: "All your email addresses in one calm inbox.",
      description: "Bring your Gmail, OVH or OVH addresses into one clear inbox, share it with your team and let Bulle sum up long threads.",
      tag: "Email · IMAP/SMTP",
    },
    agenda: {
      tagline: "One shared calendar for the whole team, on every device.",
      description: "Meetings, deadlines and team availability, synced to your phone and your computer.",
      tag: "CalDAV · Scheduling",
    },
    echo: {
      tagline: "Video calls from a link, nothing to install.",
      description: "Create a room, send the link, talk. Every call is end-to-end encrypted, and Bulle can write up the meeting.",
      tag: "WebRTC · Video",
    },
    feuilles: {
      tagline: "Spreadsheets you edit together, Excel files included.",
      description: "Budgets, trackers and lists, together and live. Import your Excel files, your formulas work here.",
      tag: "Spreadsheet · xlsx",
    },
    docs: {
      tagline: "Documents you write together, live.",
      description: "Notes, meeting minutes and wikis written together, live, with your Feuilles sheets and Toile boards right in the page.",
      tag: "Docs · Real time",
    },
    toile: {
      tagline: "An endless whiteboard to share with your team.",
      description: "Stickies, arrows and drawings on an endless board, with your whole team live.",
      tag: "Canvas · Real time",
    },
    nuage: {
      tagline: "Your files everywhere, shared with a link.",
      description: "Keep your photos and documents, share them by link and work together in team folders.",
      tag: "Files · Sharing",
    },
    opus: {
      tagline: "Your team's projects, clear and followed live.",
      description: "Tasks, boards and timelines shared live. Time spent comes in from Sablier and your deadlines show up in Agenda.",
      tag: "Kanban · Tasks",
    },
    sablier: {
      tagline: "Your billable hours, tracked in one click.",
      description: "One click starts the timer. Every hour lands in the right project, at your hourly rate.",
      tag: "Time · Projects",
    },
    pastille: {
      tagline: "A round 42 mm charm linked to Bulle. Pre-order open.",
      description: "A small round 42 mm charm with a screen, linked to Bulle, your assistant. Pre-orders are open, shipping planned for March 2027.",
      tag: "ESP32-S3 · Embassy · BLE",
    },
    fusible: {
      tagline: "Check your circuit board before you order it.",
      description: "Describe your circuit board in code. Fusible checks every rule and blocks the export while an error remains.",
      tag: "Rust · PCB · CAD · MCP",
    },
    vision: {
      tagline: "Your site's visitors, without cookies.",
      description: "See who visits your site and where they come from. Vision uses no cookies.",
      tag: "Analytics · GDPR",
    },
    glouton: {
      tagline: "Your next clients, found while you sleep.",
      description: "Glouton finds businesses near you, scores every lead and drafts the first message.",
      tag: "Prospecting · Web",
    },
    ardoise: {
      tagline: "Quotes, compliant invoices and payments tracked, no paperwork.",
      description: "Send quotes, turn them into compliant invoices and track every payment. The contract goes out for signature in Plume.",
      tag: "Invoices · Quotes",
    },
    plume: {
      tagline: "Get a PDF signed with one link.",
      description: "Send a PDF, your client signs from their phone, and you get the signed copy with its proof.",
      tag: "Signatures · PDF",
    },
    casier: {
      tagline: "Your team's secrets, encrypted and injected into your apps.",
      description: "Your team's secrets, encrypted in one place and injected into your apps at launch. Every read is logged.",
      tag: "Secrets · AES-256",
    },
    capsule: {
      tagline: "Share a secret that disappears once read.",
      description: "A link that opens once, encrypted before it leaves your device. No account needed.",
      tag: "E2EE · Zero-Knowledge",
    },
    scribe: {
      tagline: "Your meetings transcribed and summed up on your Mac.",
      description: "Scribe transcribes your meetings on your Mac and writes the minutes, with decisions and next steps. Coming soon.",
      tag: "Audio · Summaries",
    },
    journal: {
      tagline: "All your app logs, in one place.",
      description: "Find why it crashed in one search, across all your apps, and follow errors live.",
      tag: "Telemetry · Logs",
    },
    sonde: {
      tagline: "Know a site is down before your clients do.",
      description: "Sonde alerts you the moment a site, a port or a cron job goes down, and your clients follow the status on a public page.",
      tag: "Uptime · Status",
    },
    registre: {
      tagline: "One account and one subscription for the whole suite.",
      description: "Sign in once, and the Facile apps open with the same account. One subscription unlocks the whole suite.",
      tag: "OIDC · SSO",
    },
    boite: {
      tagline: "Throwaway machines for your code and your AI agents.",
      description: "A throwaway machine for your code and your AI agents. Take a snapshot, break everything, roll back in one command.",
      tag: "Sandbox · VM",
    },
    place: {
      tagline: "The Facile community forum, linked to Discord.",
      description: "Help, release announcements and talks with the team, in one place. Your Discord threads show up here.",
      tag: "Forum · Discord",
    },
    gare: {
      tagline: "Deploy your apps from git to your own server.",
      description: "Push to git: Gare builds the app, puts it live and rolls back to the last version if it breaks.",
      tag: "Deploy · git",
    },
  },
};
