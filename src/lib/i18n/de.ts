import type { Messages } from "./fr";

export const de: Messages = {
  meta: {
    ogImageAlt: "Facile Studio: Studio für Webdesign und Engineering",
  },
  common: {
    startProject: "Projekt starten",
    phone: "+33 7 68 88 88 18",
    home: "Startseite",
    projects: "Projekte",
    backHome: "Zur Startseite",
    newBadge: "Neu",
  },
  nav: {
    services: "Leistungen",
    projets: "Projekte",
    suite: "Suite",
    ecosystem: "Ökosystem",
    bulle: "Bulle",
    hardware: "Pastille",
    portfolio: "Portfolio",
  },
  footer: {
    studio: "Studio",
    products: "Produkte",
    contact: "Kontakt",
    projects: "Projekte",
    account: "Facile-Konto",
    suite: "Die Suite",
    location: "Lyon · Straßburg · Remote",
  },
  actions: {
    themeLight: "Zum hellen Design wechseln",
    themeDark: "Zum dunklen Design wechseln",
  },
  home: {
    meta: {
      title: "Facile Studio · Studio für Webdesign und Engineering",
      description: "Websites, maßgeschneiderte Web-Apps, Art Direction und souveränes Hosting vom Studio hinter der Facile Suite.",
    },
    hero: {
      titleLine1: "Wir vereinfachen,",
      titleLine2: "Sie gestalten.",
      definition: "Was ohne Mühe gelingt und keine Schwierigkeit bereitet. Einfach, leicht.",
      intro: "Studio für Webdesign und Engineering. Wir entwerfen, entwickeln und hosten Websites, Anwendungen und visuelle Identitäten. Schlanker Code, schnelle Seiten und viel Liebe zum Detail.",
      seeWork: "Unsere Arbeiten",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Was wir für Sie bauen",
      intro: "Sie arbeiten direkt mit den Designern und Entwicklern, die Ihr Projekt umsetzen. Ohne Zwischenhändler.",
      deliverables: "Inklusive",
      customTitle: "Ihr Bedarf passt in keine dieser Kategorien?",
      customText: "Schicken Sie uns Ihr Lastenheft, Sie erhalten innerhalb von 48 Stunden ein Angebot.",
      quote: "Angebot anfragen",
    },
    projects: {
      title: "Aktuelle Projekte",
      intro: "Websites und Anwendungen, vom Studio entworfen und ausgeliefert.",
      viewAll: "Ganzes Portfolio ansehen",
      live: "Live-Website",
      caseStudy: "Zur Fallstudie",
    },
    suite: {
      eyebrow: "Auch für Sie kostenlos",
      title: "Die Facile Suite",
      intro: "Die {count} freien Tools, mit denen wir Ihre Projekte umsetzen. Projekte, Rechnungen, Dateien, E-Mails, Kalender: Ein einziges Facile-Konto öffnet sie alle.",
      signupNote: "Kostenlos und in einer Minute erledigt.",
      open: "Öffnen",
      repo: "GitHub-Repo",
      showLess: "Weniger anzeigen",
      showMore: "Die {count} weiteren Tools anzeigen",
    },
    ecosystem: {
      title: "Tools, die miteinander sprechen",
      intro: "Die Tools der Suite und die Projekte, die wir ausliefern, kommunizieren über offene APIs und einen gemeinsamen Event-Bus.",
    },
    bulle: {
      eyebrow: "In der Suite enthalten",
      title: "Bulle, der Agent für all Ihre Tools",
      intro: "Bulle hat einen eigenen Computer, eine Linux-MicroVM, und ist mit allen Ihren Facile-Tools verbunden. Er liest und schreibt Ihre E-Mails in Courrier, ordnet Ihre Aufgaben in Opus, plant Ihre Termine in Agenda, verwaltet Ihre Dateien in Nuage und deployt Ihre Projekte.",
      chips: [
        "Souveräne Linux-MicroVM",
        "Courrier · Opus · Agenda · Nuage",
        "Matrix E2EE & Prisme",
        "Native MCP-Tools",
      ],
      try: "Bulle testen",
      source: "Quellcode",
    },
    hardware: {
      title: "Pastille, der Sprachassistent für die Handfläche",
      intro: "Das Studio hat auch eine Hardware-Werkstatt für Forschung und Entwicklung maßgeschneiderter vernetzter Geräte. Pastille ist unsere offene Demo. Ein 38-mm-Anhänger mit ESP32-S3, rundem IPS-Display und Firmware in Rust Embassy.",
      site: "Offizielle Pastille-Website",
      schematics: "KiCad-Schaltpläne",
    },
    contact: {
      title: "Eine Website oder App im Kopf?",
      intro: "Erzählen Sie uns von Ihrem Projekt, Ihren Anforderungen und Ihrem Zeitplan. Wir machen Websites, Business-Anwendungen und Hosting.",
      mailSubject: "[Projekt] Neues Projekt mit Facile Studio",
      noProjectTitle: "Noch kein Projekt?",
      noProjectText: "Probieren Sie die Tools des Studios aus. Ihr Facile-Konto ist kostenlos und öffnet die ganze Suite.",
    },
  },
  community: {
    title: "Eine Community im Austausch",
    intro: "Die Diskussionen auf Place, live. Stellen Sie Fragen, verfolgen Sie Ankündigungen, tauschen Sie sich mit dem Team aus.",
    announcement: "Ankündigung",
    today: "heute",
    yesterday: "gestern",
    daysAgo: "vor {count} Tagen",
    replyOne: "{count} Antwort",
    replyMany: "{count} Antworten",
    newTopic: "Neues Thema",
    join: "Community beitreten",
    discord: "Discord beitreten",
  },
  pcb: {
    circuit: "3D-Platine",
    case: "Gehäuse",
    auto: "Auto",
    loading: "3D-Modell wird geladen",
    unavailable: "3D-Vorschau nicht verfügbar",
    unavailableText: "Das Modell konnte in diesem Browser nicht geladen werden.",
    hint: "Ziehen zum Drehen · Scrollen zum Zoomen",
    validated: "Pastille · ERC/DRC bestanden",
  },
  graph: {
    label: "Architektur und vernetztes Ökosystem der Facile Suite",
    categories: {
      bulle: "KI-Agent",
      pastille: "Hardware & IoT",
      fusible: "Elektronik",
      sablier: "Zeit",
      opus: "Projekte",
      vision: "Analytics",
      glouton: "Akquise",
      ardoise: "Rechnungen",
      plume: "Signatur",
      casier: "Secrets",
      nuage: "Speicher",
      courrier: "E-Mail",
      agenda: "Planung",
      feuilles: "Tabellen",
      docs: "Dokumente",
      toile: "Whiteboard",
      echo: "Video",
      capsule: "Verschlüsselung",
      scribe: "Audio",
      journal: "Logs",
      prisme: "Matrix-Chat",
      sonde: "Status",
      registre: "SSO-Auth",
      boite: "Pakete",
      place: "Community",
    },
  },
  suiteCategories: {
    all: "Ganze Suite",
    agent: "KI & Agenten",
    hardware: "Hardware",
    business: "Business",
    productivity: "Produktivität",
    infra: "Infrastruktur",
  },
  projectCategories: {
    all: "Alle",
    showcase: "Websites",
    apps: "Apps",
    branding: "Branding",
    "3d": "3D",
  },
  projectsPage: {
    meta: {
      title: "Projekte · Facile Studio",
      description: "Fallstudien des Studios. Websites, Business-Anwendungen, Art Direction und 3D-Erlebnisse.",
    },
    eyebrow: "Portfolio",
    title: "Fallstudien & Arbeiten",
    intro: "Jedes Projekt ist maßgeschneidert, ohne Lock-in, mit APIs, die in unter 50 ms antworten.",
    keyDeliverables: "Kernleistungen",
    caseStudy: "Fallstudie",
    ctaTitle: "Sie planen eine App oder Website?",
    ctaText: "Wir entwerfen, entwickeln und hosten Ihre Tools, ohne Zwischenhändler.",
    ctaButton: "Projekt besprechen",
  },
  projectPage: {
    metaTitle: "{name} · Fallstudie · Facile Studio",
    metaDescription: "{name} von Facile Studio: {tagline}",
    back: "Zurück zu den Projekten",
    visit: "Website ansehen",
    coverAlt: "Hauptansicht des Projekts {name}",
    problem: "Das Problem",
    solution: "Die Lösung",
    galleryEyebrow: "Screenshots",
    galleryTitle: "Galerie",
    galleryIntro: "Screenshots der Ergebnisse im Live-Betrieb und Entwürfe.",
    deliverables: "Projektleistungen",
    stack: "Technologien & Komponenten",
    stackNote: "Keine proprietären, geschlossenen Abhängigkeiten. Der Code bleibt schlank und prüfbar.",
    ctaTitle: "Ein ähnliches Projekt starten",
    ctaText: "Ähnliche Ziele für Ihre App oder Website? Wir prüfen Ihren Bedarf innerhalb von 48 Stunden.",
    others: "Weitere Projekte",
    contact: "Kontakt aufnehmen",
  },
  contact: {
    meta: {
      title: "Projekt starten · Facile Studio",
      description: "Erzählen Sie uns von Ihrem Projekt. Maßgeschneidertes Design, solider Code und souveränes Hosting.",
    },
    progress: "Schritt {step} von {total}",
    steps: [
      "Projekt",
      "Budget",
      "Vision",
      "Kontakt",
    ],
    done: {
      title: "Ihre Anfrage ist bereit",
      text: "Ihr E-Mail-Programm hat sich mit der Zusammenfassung geöffnet. Senden Sie die E-Mail ab, wir antworten innerhalb von 24 Stunden an Werktagen.",
      summary: "Zusammenfassung Ihrer Anfrage",
      type: "Art:",
      budget: "Budgetrahmen:",
      timeline: "Zeitplan:",
      contact: "Kontakt:",
      edit: "Anfrage bearbeiten",
    },
    typeStep: {
      title: "Welche Art von Projekt möchten Sie umsetzen?",
      intro: "Wählen Sie Ihren Hauptbedarf.",
    },
    types: {
      showcase: {
        title: "Herausragende Website",
        category: "Websites & Art Direction",
        description: "Maßgeschneidertes Design, Animationen mit 60 FPS, SEO und eine Identität, die im Gedächtnis bleibt.",
      },
      app: {
        title: "Web-App & SaaS",
        category: "Engineering & Produkt",
        description: "Business-Tool, schnelle APIs, verlässliche Datenbank und maßgeschneiderte Logik.",
      },
      branding: {
        title: "Art Direction & Branding",
        category: "Design & Identität",
        description: "Logo, Typografie, Styleguide, Design-System und 3D-Mockups.",
      },
      infra: {
        title: "Infra & souveränes Hosting",
        category: "DevOps & Cloud",
        description: "Dedizierte Server in Europa, Docker, Nginx und Hochverfügbarkeit.",
      },
      rnd: {
        title: "F&E, Hardware & Sonstiges",
        category: "Hardware & F&E",
        description: "Vernetzte Geräte, Firmware in Rust Embassy, MicroVMs oder ein experimentelles Projekt.",
      },
    },
    budgetStep: {
      title: "Budget und Zeitplan",
      intro: "Diese Angaben helfen uns, das Projekt richtig einzuschätzen.",
      budgetLabel: "Geplantes Budget",
      timelineLabel: "Gewünschter Zeitrahmen",
    },
    budgets: {
      xs: {
        label: "< 5.000\u00A0€",
        note: "Konzept oder kleine Website",
      },
      s: {
        label: "5.000–15.000\u00A0€",
        note: "Maßgeschneiderte Website oder erste Version einer App",
      },
      m: {
        label: "15.000–30.000\u00A0€",
        note: "Vollständige App, Branding und Design-System",
      },
      l: {
        label: "> 30.000\u00A0€",
        note: "Große App, F&E oder komplettes Ökosystem",
      },
    },
    timelines: {
      asap: "So bald wie möglich (< 1 Monat)",
      soon: "In 1 bis 3 Monaten",
      later: "In 3 bis 6 Monaten",
      flexible: "Kein fester Termin",
    },
    visionStep: {
      title: "Erzählen Sie uns von Ihrem Projekt",
      intro: "Ein paar Worte genügen. Ihr Geschäft, Ihre Erwartungen, Ihre Rahmenbedingungen.",
      shortcuts: "Schnellauswahl:",
      detailsLabel: "Details (optional, aber hilfreich)",
      placeholder: "Ihre Zielgruppe, Websites, die Sie inspirieren, unverzichtbare Funktionen...",
    },
    tags: {
      redesign: "Relaunch einer Website",
      newSite: "Neue Website",
      performance: "Performance",
      design: "Design & Animationen",
      hosting: "Souveränes Hosting",
    },
    contactStep: {
      title: "Wie können wir Sie erreichen?",
      intro: "Wir prüfen Ihr Projekt und antworten innerhalb von 24 Stunden an Werktagen.",
      name: "Name oder Firma *",
      namePlaceholder: "Anna Schmidt, Studio Schmidt",
      email: "E-Mail *",
      emailPlaceholder: "anna@beispiel.de",
      phone: "Telefon (optional)",
      phonePlaceholder: "+49 151 23456789",
      summary: "Zusammenfassung Ihres Projekts",
      nature: "Projektart",
      budget: "Budgetrahmen",
      timeline: "Zeitplan",
      keyPoints: "Kernpunkte",
      notes: "Ihre Notizen",
      quote: "„{message}“",
      reply: "Antwort innerhalb von 24 h an Werktagen",
      transparent: "Transparentes, unverbindliches Angebot",
    },
    prev: "Zurück",
    next: "Weiter",
    submit: "Projekt senden",
    mail: {
      subject: "[Projekt] {type} - {name}",
      greeting: "Hallo Facile Studio,",
      name: "Name / Firma:",
      email: "E-Mail:",
      phone: "Telefon:",
      type: "Projektart:",
      budget: "Geschätztes Budget:",
      timeline: "Geplanter Zeitrahmen:",
      keyPoints: "Kernpunkte:",
      description: "Beschreibung des Bedarfs:",
      notProvided: "Nicht angegeben",
      none: "Keine",
      toBeDefined: "Wird in unserem ersten Gespräch geklärt.",
      sentFrom: "Gesendet über facile.studio/contact",
    },
  },
  services: {
    showcase: {
      title: "Websites",
      tagline: "Eine Website, die Kunden bringt.",
      description: "Maßgeschneidertes Design, sorgfältige Typografie, Animationen mit 60 FPS und technisches SEO. Keine Templates, jede Website beginnt mit einer leeren Seite.",
      deliverables: [
        "Exklusives UI/UX-Design",
        "Leichte GSAP- & WebGL-Animationen",
        "Lighthouse-Score 95+",
        "Mobile-first & Barrierefreiheit",
      ],
    },
    apps: {
      title: "Web- & Business-Apps",
      tagline: "Die Tools, die Ihr Geschäft braucht, und nichts weiter.",
      description: "SvelteKit und Go für den Code, Postgres für die Daten, dokumentierte APIs. Wir bauen die Software, die Ihren Bedarf erfüllt, keinen Funktionskatalog.",
      deliverables: [
        "Kundenportale & SaaS",
        "Echtzeit-Dashboards",
        "Sichere Authentifizierung",
        "API-Integrationen & Zahlungen",
      ],
    },
    branding: {
      title: "Art Direction & Branding",
      tagline: "Eine Identität, die man auf den ersten Blick erkennt.",
      description: "Logo, Styleguide, Design-System, 3D-Assets und typografische Regeln. Alles funktioniert auf dem Bildschirm genauso gut wie auf Papier.",
      deliverables: [
        "Visuelle Identität & Logo",
        "Design-System & Komponenten",
        "Interaktive 3D-Modellierung",
        "Typografie & Farbpalette",
      ],
    },
    devops: {
      title: "Infra & souveränes Hosting",
      tagline: "Ihre Server, Ihre Daten, ohne Lock-in.",
      description: "Dedizierte Hetzner-Server, Docker-Container, automatische SSL-Zertifikate über Traefik, verschlüsselte Backups und Monitoring.",
      deliverables: [
        "Continuous Deployment ohne Ausfall",
        "Souveränes Hosting in Europa",
        "Monitoring & Alarme rund um die Uhr",
        "Automatisierte Backups",
      ],
    },
  },
  projects: {
    marcel: {
      tagline: "Alltagsaufgaben in eine Heldenreise verwandeln.",
      description: "Rebranding und gamifizierte Produktivitäts-App. Gewohnheits-Tracking, Erfahrungspunkte und sichtbarer Fortschritt.",
      deliverables: [
        "Vollständige visuelle Identität & Logo",
        "Responsive Echtzeit-Web-App",
        "Gamification-Engine und Punkteberechnung",
        "Hochperformante Go-API und Postgres-Schema",
      ],
      challenge: {
        title: "Tägliche Disziplin und dauerhafte Motivation vereinen",
        description: "Klassische Produktivitäts-Tools haben nach zwei Wochen eine hohe Abbruchrate. Marcel sollte monotone Routinen in lohnende Mechaniken verwandeln, ohne zur oberflächlichen Spielerei zu werden oder die tägliche Eingabe zu verkomplizieren.",
      },
      approach: {
        title: "Eine direkte Belohnungsschleife auf einem extrem schnellen Stack",
        description: "Wir haben die visuelle Identität von Grund auf neu gedacht: kräftige Farben, dynamische Typografie und klare Fortschrittssignale. Die Anwendung basiert auf einer reaktiven Go-API und einer SvelteKit-Oberfläche, die in unter 16 Millisekunden reagiert. Jede abgehakte Gewohnheit löst ein dezentes haptisches und akustisches Feedback aus.",
      },
      stats: [
        {
          label: "API-Antwortzeit",
          value: "< 25 ms",
        },
        {
          label: "Retention in Woche 4",
          value: "68 %",
        },
        {
          label: "Lighthouse-Score",
          value: "99/100",
        },
      ],
      gallery: [
        {
          alt: "Haupt-Dashboard von Marcel mit Gewohnheiten und Kennzahlen",
          caption: "Dashboard: Tagesübersicht und aktive Quests",
        },
        {
          alt: "Grafische Recherche und Rebranding der Marke Marcel",
          caption: "Rebranding: Art Direction und Farbpalette",
        },
        {
          alt: "Mobile App von Marcel auf dem Smartphone",
          caption: "Mobile Erfahrung: Daumenbedienung und schnelle Gesten",
        },
        {
          alt: "Logo und Konstruktionsraster von Marcel",
          caption: "Geometrische Konstruktion des Logos",
        },
        {
          alt: "Onboarding-Ablauf von Marcel",
          caption: "Reduziertes Onboarding in drei Schritten",
        },
        {
          alt: "Kalenderansicht und Erledigungsverlauf von Marcel",
          caption: "Zeitachse der Serien und Regelmäßigkeit",
        },
      ],
    },
    "laura-herve": {
      tagline: "Innenarchitektur und Szenografie.",
      description: "Editoriale Website für eine Innenarchitektin. Große Fotos, sanfte Übergänge und wenig Text.",
      deliverables: [
        "Art Direction und charakterstarke Typografie",
        "Vollbild-Inszenierung der Fotografie",
        "Dezente, ruckelfreie Scroll-Animationen",
        "Kompressions-Pipeline für 4K-Bilder unter 200 KB",
      ],
      challenge: {
        title: "Räume zur Geltung bringen, ohne das Rendering zu bremsen",
        description: "Fotos von Innenarchitektur verlangen höchste Detailtreue. Die technische Herausforderung: Dutzende hochauflösende Aufnahmen anzeigen und dabei sofortiges Laden und konstantes Scrollen mit 60 FPS garantieren, auf dem Smartphone wie auf dem Retina-Display.",
      },
      approach: {
        title: "Ein editoriales Layout und intelligentes Vorladen",
        description: "Wir haben eine reduzierte Oberfläche gestaltet, die rohen Texturen und Perspektiven Raum lässt. Adaptive WebP-Kodierung und stapelweises Vorladen senken das initiale Gewicht auf unter 800 KB, ohne sichtbaren Schärfeverlust.",
      },
      stats: [
        {
          label: "Durchschn. Seitengewicht",
          value: "< 750 KB",
        },
        {
          label: "Lighthouse-Performance",
          value: "100/100",
        },
        {
          label: "Flüssige Animation",
          value: "60 FPS",
        },
      ],
      gallery: [
        {
          alt: "Startseite des Innenarchitektur-Portfolios von Laura Hervé",
          caption: "Startseite: monumentale Typografie und Fokus auf die Projekte",
        },
        {
          alt: "Großbild-Layout und Raumfotografie",
          caption: "Großbildansicht: Luft für die Räume und ausgewogener Weißraum",
        },
        {
          alt: "Responsive Mobilversion des Portfolios von Laura Hervé",
          caption: "Mobilversion: flüssige Touch-Bedienung und reibungslose Navigation",
        },
        {
          alt: "Fassade und architektonische Volumen",
          caption: "HD-Fotografie: Schattenspiele und rohe Volumen",
        },
        {
          alt: "Portfolio-Detail und Ansicht eines Szenografie-Projekts",
          caption: "Projektansicht: Wechsel aus Großformaten und Materialdetails",
        },
      ],
    },
    "projet-zero": {
      tagline: "Aufklärung und gemeinsames Handeln für den ökologischen Wandel.",
      description: "Interaktive Website mit Echtzeitdaten, einer Karte lokaler Initiativen und leichten 3D-Szenen im Browser.",
      deliverables: [
        "Interaktive, WebGL-optimierte 3D-Szenen",
        "Visualisierung von Umweltdatenströmen",
        "Interaktive Karte der Sammelstellen",
        "Schlanke Architektur mit minimalem CO2-Fußabdruck",
      ],
      challenge: {
        title: "Ökologische Wirkung greifbar machen, ohne technischen Ballast",
        description: "Aufklären, ohne Schuldgefühle zu wecken, heißt abstrakte Größenordnungen in verständliche Visualisierungen zu übersetzen. Die Herausforderung: interaktive 3D-Elemente für ein breites Publikum auf unterschiedlichsten Geräten einbinden, ohne den Energieverbrauch der Seite in die Höhe zu treiben.",
      },
      approach: {
        title: "Maßgeschneiderte GLSL-Shader und geometrisches Instancing",
        description: "Wir haben eine visuelle Welt aus leichten prozeduralen Shadern mit Three.js gebaut. Alle geometrischen Berechnungen laufen auf der GPU mit einem Speicherbudget unter 25 MB. Die Navigation bleibt selbst auf Einsteiger-Smartphones flüssig.",
      },
      stats: [
        {
          label: "GPU-Speicherbudget",
          value: "< 25 MB",
        },
        {
          label: "CO2-Fußabdruck",
          value: "0,12 g CO2/Aufruf",
        },
        {
          label: "Mobile Kompatibilität",
          value: "100 %",
        },
      ],
      gallery: [
        {
          alt: "Startseite und 3D-Visualisierung von Projet Zéro",
          caption: "Startbildschirm: Datenglobus und Kernindikatoren",
        },
        {
          alt: "Interaktive Ansicht zur Enthüllung von Umweltdaten",
          caption: "Interaktives Modul: Datenströme und Handlungshebel erkunden",
        },
        {
          alt: "Knotenvisualisierung und Vernetzungsgraph",
          caption: "Wirkungsgraph: Netz lokaler ökologischer Initiativen",
        },
        {
          alt: "Partikelsimulation der CO2-Ströme",
          caption: "Leichte WebGL-Physiksimulation, in Echtzeit animiert",
        },
        {
          alt: "Energieindikatoren und Umrechnung in Echtzeit",
          caption: "Übersicht der wirkungsvollsten Maßnahmen",
        },
      ],
    },
    bulle: {
      tagline: "Autonomer Coding-Agent mit eigenem Computer im Browser.",
      description: "Jede Sitzung läuft in ihrer eigenen Linux-MicroVM, mit einer Oberfläche, die in Echtzeit streamt. Bulle führt Code aus, testet und deployt ihn.",
      deliverables: [
        "Isolierte Linux-MicroVM pro Sitzung",
        "Echtzeit-Streaming der Inferenz und MCP-Tools",
        "Reaktive Benutzeroberfläche mit Svelte 5",
        "Verschlüsseltes Sync-Protokoll mit Matrix E2EE",
      ],
      challenge: {
        title: "Einen vollwertigen autonomen Agenten bieten, ohne die Sicherheit zu gefährden",
        description: "Einem Sprachmodell vollen Shell-Zugriff und ein Dateisystem zu geben, erfordert vollständige Isolation und minimale Netzwerklatenz. Jede Sitzung musste in unter zwei Sekunden in einer dichten Sandbox starten.",
      },
      approach: {
        title: "Sofort startende Linux-MicroVMs und ein natives Steuerprotokoll in Go",
        description: "Wir haben eine Runtime rund um virtuelle Linux-Mikromaschinen gebaut, gekoppelt an einen schlanken Go-Daemon. Der Agent bearbeitet den Dateibaum, startet Builds und übermittelt seine Schritte über einen typisierten Event-Kanal.",
      },
      stats: [
        {
          label: "MicroVM-Start",
          value: "< 1,8 s",
        },
        {
          label: "Streaming-Latenz",
          value: "< 16 ms",
        },
        {
          label: "Speicherisolation",
          value: "100 %",
        },
      ],
      gallery: [
        {
          alt: "Weboberfläche des autonomen Coding-Agenten Bulle",
          caption: "Arbeitsoberfläche von Bulle: Terminal, Dateibaum und Gedankengang",
        },
        {
          alt: "Ausführungsgraph und agentische Orchestrierung",
          caption: "Multi-Agenten-Orchestrierung und Aufgabenplanung",
        },
        {
          alt: "Partikelvisualisierung von Tokens und Datenströmen",
          caption: "Echtzeit-Visualisierung der Modellaktivität",
        },
      ],
    },
    "evelyne-crea": {
      tagline: "Keramikwerkstatt für Handwerkskunst und skulpturale Stücke.",
      description: "Visuelle Identität und Website für eine Keramikerin. Katalog mit Unikaten, Materialfotos und Kontaktformular.",
      deliverables: [
        "Styleguide, Logo und Geschäftsausstattung",
        "Stückkatalog mit Materialfiltern",
        "Einblicke in Brennen und Formgebung",
        "Lokale SEO-Optimierung für die Werkstatt",
      ],
      challenge: {
        title: "Mineralische Textur und die Echtheit von Handarbeit vermitteln",
        description: "Kunsthandwerk verlangt im Web ein seltenes gestalterisches Feingefühl. Die Website sollte die Wärme von Terrakotta und die Rauheit der Glasuren spürbar machen, ohne Effekthascherei oder visuelle Überladung, die vom Werk ablenkt.",
      },
      approach: {
        title: "Erdige Töne, feine Typografie und Makro-Fokus",
        description: "Wir haben eine Identität aus subtilen Kontrasten zwischen warmen Grautönen und Ocker entwickelt. Die Website setzt jedes Stück mit asymmetrischer Komposition und Nahaufnahmen in Szene, die die natürliche Körnung des Tons zeigen.",
      },
      stats: [
        {
          label: "Anfragen an die Werkstatt",
          value: "+140 %",
        },
        {
          label: "Ladezeit",
          value: "0,4 s",
        },
        {
          label: "Barrierefreiheits-Score",
          value: "100/100",
        },
      ],
      gallery: [
        {
          alt: "Website des Atelier Évelyne Création mit Keramikkatalog",
          caption: "Website der Werkstatt: Auswahl der Stücke und Geschichte des Handwerks",
        },
        {
          alt: "Keramikserie Pavements und mineralische Texturen",
          caption: "Serie Pavements: mineralische Skulpturarbeit und Glasurtexturen",
        },
        {
          alt: "Keramikserie Green mit pflanzlichen Formen und Farbkontrasten",
          caption: "Serie Green: organische Farbexperimente und pflanzliche Formen",
        },
        {
          alt: "Glasierte Keramikserie Harmonie",
          caption: "Serie Harmonie: Balance der Materialien und Hochtemperaturbrand",
        },
        {
          alt: "Monumentale Keramikserie Temple",
          caption: "Serie Temple: Architektur aus Unikaten und rohen Volumen",
        },
        {
          alt: "Serie Escaliers mit Geometrie und Schlagschatten",
          caption: "Serie Escaliers: Linien und geometrische Schattenspiele",
        },
      ],
    },
    "retro-festival": {
      tagline: "Unabhängiges Festival für klassische Videospiele und Popkultur.",
      description: "Retro-futuristische Art Direction, Event-Identität, Programm und Ticketing ohne Vermittlungsgebühren.",
      deliverables: [
        "Markenidentität, Plakate und Printmedien",
        "Webplattform mit dynamischem Zeitplan",
        "Integriertes Ticketing ohne Zwischenhändler",
        "Interaktiver Plan von Festival und Ständen",
      ],
      challenge: {
        title: "Visuelle Begeisterung wecken und Ticket-Spitzen sicher abfangen",
        description: "Zum Vorverkaufsstart verbinden sich innerhalb weniger Minuten mehrere tausend Besucher gleichzeitig. Die Oberfläche musste einen markanten Arcade-Look mit absolut belastbaren Transaktionen vereinen.",
      },
      approach: {
        title: "Markante Grafik und ein Go-Server für Lastspitzen",
        description: "Wir haben stilisierte Bitmap-Schriften mit einer Neonpalette auf dunklem Grund kombiniert. Das Buchungssystem in Go verwaltet Warteschlangen und Stripe-Validierung in wenigen Millisekunden und garantiert null Ausfälle beim Verkaufsstart.",
      },
      stats: [
        {
          label: "Tickets am 1. Tag",
          value: "3.500",
        },
        {
          label: "Durchschn. Bezahldauer",
          value: "38 s",
        },
        {
          label: "Verfügbarkeit bei Spitzenlast",
          value: "100 %",
        },
      ],
      gallery: [
        {
          alt: "Plakat und Website des Rétro Festival",
          caption: "Festivalplattform: 80er-Jahre-Ästhetik und interaktives Programm",
        },
        {
          alt: "Visuelle Arbeiten und Retro-Gaming-Grafikwelt",
          caption: "Siebgedruckte Plakate und Illustrationen für das Event",
        },
        {
          alt: "Typografische Varianten und Fanzines",
          caption: "Monochrome Varianten und Beschilderung der Stände vor Ort",
        },
        {
          alt: "Szenografie und Arcade-Turniere",
          caption: "Visuelle Szenografie der Retro-Turniere und klassischen Automaten",
        },
        {
          alt: "Pixel Art und Wettbewerbspreise",
          caption: "Exklusive Pixel-Art-Abzeichen für die Finalisten",
        },
      ],
    },
  },
  tools: {
    bulle: {
      tagline: "Autonomer KI-Begleiter in seiner eigenen MicroVM",
      description: "Vollwertiger Engineering-Agent mit persistenter VM, Matrix-Chat, OpenUI und ausdrucksstarkem Avatar.",
      tag: "MicroVM · Matrix · OpenUI",
    },
    prisme: {
      tagline: "Team-Messaging und vernetzte Räume auf Matrix",
      description: "Räume pro Projekt, verschlüsselte Anrufe und integrierte Bulle-KI-Teammitglieder. Ein souveränes Slack ohne Abo.",
      tag: "Chat · Matrix E2EE",
    },
    courrier: {
      tagline: "Ihre E-Mails bei Ihnen",
      description: "Natives IMAP und SMTP, mehrere Konten, eine Oberfläche ohne Ablenkung.",
      tag: "E-Mail · IMAP/SMTP",
    },
    agenda: {
      tagline: "Der gemeinsame Kalender des Studios",
      description: "Termine, Deadlines, Verfügbarkeit im Team. Natives CalDAV, ohne Umweg über Google.",
      tag: "CalDAV · Planung",
    },
    echo: {
      tagline: "Verschlüsselte Videokonferenzen ohne Installation",
      description: "Raum erstellen, Link teilen, los geht's. Verschlüsseltes WebRTC.",
      tag: "WebRTC · Video",
    },
    feuilles: {
      tagline: "Die kollaborative Tabellenkalkulation des Studios",
      description: "IronCalc-Engine, gemeinsames Bearbeiten live, Import und Export von xlsx. Für Agenten lesbar über MCP.",
      tag: "Tabellen · xlsx",
    },
    docs: {
      tagline: "Dokumente, gemeinsam geschrieben",
      description: "Seitenbaum pro Bereich, Bearbeitung in Echtzeit, PDF-Export. Für Agenten lesbar über MCP.",
      tag: "Docs · Echtzeit",
    },
    toile: {
      tagline: "Ein unendliches Whiteboard zum Teilen",
      description: "Notizen, Zeichnungen und Formen auf einer grenzenlosen Fläche, in Echtzeit mit dem ganzen Team.",
      tag: "Canvas · Echtzeit",
    },
    nuage: {
      tagline: "Der Dateispeicher des Studios",
      description: "Das Drive des Studios, über eine S3-kompatible API mit all Ihren Tools verbunden. Dateien teilen ohne Zwischenhändler.",
      tag: "Dateien · S3",
    },
    opus: {
      tagline: "Projektmanagement, das Sie nicht ausbremst",
      description: "Kanban, verknüpfte Aufgaben, Sofortsuche. Nichts Überflüssiges.",
      tag: "Kanban · Aufgaben",
    },
    sablier: {
      tagline: "Ihre abrechenbaren Stunden, mit einem Klick erfasst",
      description: "Ein Klick zum Starten, ein Klick zum Stoppen. Zeit nach Projekt aufgeteilt, gemeinsame Sitzungen live.",
      tag: "Zeit · Projekte",
    },
    pastille: {
      tagline: "Offener Sprach-Beacon und vernetzter Sensor mit 38 mm",
      description: "Offene Hardware BOHS-01, 16-kHz-Duplex-Audio, rundes IPS-Display und Firmware in Rust Embassy.",
      tag: "ESP32-S3 · Embassy · BLE",
    },
    fusible: {
      tagline: "Platinen, Firmware und Gehäuse in einem geprüften Projekt",
      description: "Elektrischer und physischer Linter, generierte Rust-Firmware-Pins, 3D-Teile als Code, Stückliste und Fertigungsdateien. Steuerbar durch Bulle über MCP.",
      tag: "Rust · PCB · CAD · MCP",
    },
    vision: {
      tagline: "Web-Analytics, die Ihre Besucher respektiert",
      description: "Ein leichtes Skript, keine Cookies, Echtzeitdaten, DSGVO-konform.",
      tag: "Analytics · DSGVO",
    },
    glouton: {
      tagline: "Ihre nächsten Kunden, gefunden während Sie schlafen",
      description: "Glouton durchsucht das Web, analysiert Tech-Stacks und qualifiziert Leads für das Studio.",
      tag: "Akquise · Web",
    },
    ardoise: {
      tagline: "Abrechnen, kassieren, vergessen",
      description: "Integriertes Stripe, Angebote mit einem Klick in Rechnungen umwandeln, automatische Mahnungen und PDF-Belege.",
      tag: "Rechnungen · Stripe",
    },
    plume: {
      tagline: "Elektronische Signatur ohne Overhead",
      description: "PDF hochladen, Signaturfelder platzieren, Link an den Kunden senden. Einfach und rechtsgültig.",
      tag: "Signatur · PDF",
    },
    casier: {
      tagline: "Tresor für die Secrets Ihres Teams",
      description: "AES-256-GCM-Verschlüsselung, Injektion in die Shell, Versionsverlauf und Audit-Log.",
      tag: "Secrets · AES-256",
    },
    capsule: {
      tagline: "Teilen Sie ein Geheimnis, das sich selbst zerstört",
      description: "Ende-zu-Ende-verschlüsselt im Browser. Der Server sieht den Inhalt nie. Ablaufzeit frei wählbar.",
      tag: "E2EE · Zero-Knowledge",
    },
    scribe: {
      tagline: "Audio-Transkription und strukturierte Zusammenfassungen",
      description: "Nimmt Ihre Meetings auf, transkribiert lokal in Echtzeit und schreibt das Protokoll.",
      tag: "Audio · Zusammenfassung",
    },
    journal: {
      tagline: "Zentrale Logs für die gesamte Infrastruktur",
      description: "Sammelt Docker-Logs, Sofortsuche, Fehlererkennung und Alarme.",
      tag: "Telemetrie · Logs",
    },
    sonde: {
      tagline: "Verfügbarkeitsüberwachung und öffentliche Statusseite",
      description: "Heartbeats, Prüfungen aus mehreren Regionen und Alarm, sobald ein Dienst ausfällt.",
      tag: "Uptime · Status",
    },
    registre: {
      tagline: "Ein Konto für das ganze Ökosystem",
      description: "Standard-OIDC und gemeinsame Sitzungen über alle Tools hinweg.",
      tag: "OIDC · SSO",
    },
    boite: {
      tagline: "Paketmanager und Binär-Artefakte",
      description: "Hostet Ihre Artefakte, Docker-Images und privaten Abhängigkeiten.",
      tag: "Pakete · OCI",
    },
    place: {
      tagline: "Das Forum der Facile-Community",
      description: "Die Facile-Community in einem Webforum, verbunden mit Discord. Stellen Sie Fragen, verfolgen Sie Ankündigungen, tauschen Sie sich mit dem Team aus.",
      tag: "Forum · Discord",
    },
  },
};
