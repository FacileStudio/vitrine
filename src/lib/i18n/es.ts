import type { Messages } from "./fr";

export const es: Messages = {
  meta: {
    ogImageAlt: "Facile Studio: estudio de diseño e ingeniería web",
  },
  common: {
    startProject: "Empezar un proyecto",
    phone: "+33 7 68 88 88 18",
    home: "Inicio",
    projects: "Proyectos",
    backHome: "Volver al inicio",
    newBadge: "Nuevo",
  },
  nav: {
    services: "Servicios",
    projets: "Proyectos",
    suite: "Suite",
    ecosystem: "Ecosistema",
    bulle: "Bulle",
    hardware: "Pastille",
    portfolio: "Portfolio",
  },
  footer: {
    studio: "Estudio",
    products: "Productos",
    contact: "Contacto",
    projects: "Proyectos",
    account: "Cuenta Facile",
    suite: "La Suite",
    location: "Lyon · Estrasburgo · En remoto",
  },
  actions: {
    themeLight: "Cambiar a tema claro",
    themeDark: "Cambiar a tema oscuro",
  },
  home: {
    meta: {
      title: "Facile Studio · Estudio de diseño e ingeniería web",
      description: "Webs de presentación, aplicaciones web a medida, dirección de arte y alojamiento soberano, del estudio que está detrás de la Suite Facile.",
    },
    hero: {
      titleLine1: "Nosotros simplificamos,",
      titleLine2: "tú creas.",
      definition: "Que se hace sin esfuerzo, que no presenta ninguna dificultad. Simple, sencillo.",
      intro: "Estudio de diseño e ingeniería web. Diseñamos, desarrollamos y alojamos webs de presentación, aplicaciones e identidades visuales. Código ligero, páginas rápidas y mucha atención al detalle.",
      seeWork: "Ver nuestros trabajos",
    },
    services: {
      eyebrow: "Servicios del estudio",
      title: "Lo que construimos para ti",
      intro: "Trabajas directamente con los diseñadores y desarrolladores que hacen tu proyecto. Sin intermediarios.",
      deliverables: "Entregables incluidos",
      customTitle: "¿Tu necesidad no encaja en estas casillas?",
      customText: "Envíanos tu pliego de condiciones y te respondemos con una propuesta en 48 h.",
      quote: "Pedir presupuesto",
    },
    projects: {
      title: "Algunos proyectos recientes",
      intro: "Webs y aplicaciones diseñadas y entregadas por el estudio.",
      viewAll: "Ver todo el portfolio",
      live: "Web en línea",
      caseStudy: "Ver el caso de estudio",
    },
    suite: {
      eyebrow: "Gratis también para ti",
      title: "La Suite Facile",
      intro: "Las {count} herramientas libres que hemos construido para entregar tus proyectos. Proyectos, facturas, archivos, correo, agenda: una sola cuenta Facile las abre todas.",
      signupNote: "Gratis, y se tarda un minuto.",
      open: "Acceder",
      repo: "Repositorio GitHub",
      showLess: "Ver menos",
      showMore: "Ver las otras {count} herramientas",
    },
    ecosystem: {
      title: "Herramientas que se hablan",
      intro: "Las herramientas de la Suite y los proyectos que entregamos se comunican mediante APIs abiertas y un bus de eventos común.",
    },
    bulle: {
      eyebrow: "Incluido en la Suite",
      title: "Bulle, el agente conectado a todas tus herramientas",
      intro: "Bulle tiene su propio ordenador, una microVM Linux, y se conecta a todas tus herramientas Facile. Lee y redacta tus correos en Courrier, ordena tus tareas en Opus, encaja tus citas en Agenda, gestiona tus archivos en Nuage y despliega tus proyectos.",
      chips: [
        "MicroVM Linux soberana",
        "Courrier · Opus · Agenda · Nuage",
        "Matrix E2EE y Prisme",
        "Herramientas MCP nativas",
      ],
      try: "Probar Bulle",
      source: "Código fuente",
    },
    hardware: {
      title: "Pastille, el asistente de voz que cabe en la palma de la mano",
      intro: "El estudio también tiene un taller de I+D de hardware para objetos conectados a medida. Pastille es nuestra demostración abierta. Un colgante de 38 mm con un ESP32-S3, una pantalla redonda IPS y un firmware en Rust Embassy.",
      site: "Web oficial de Pastille",
      schematics: "Esquemas KiCad",
    },
    contact: {
      title: "¿Tienes en mente una web o una aplicación?",
      intro: "Cuéntanos tu proyecto, tus limitaciones y tus plazos. Hacemos webs de presentación, aplicaciones de negocio y alojamiento.",
      mailSubject: "[Proyecto] Nuevo proyecto con Facile Studio",
      noProjectTitle: "¿Aún no tienes proyecto?",
      noProjectText: "Prueba las herramientas del estudio. Tu cuenta Facile es gratuita y abre toda la Suite.",
    },
  },
  community: {
    title: "Una comunidad que conversa",
    intro: "Las conversaciones de Place, en directo. Haz tus preguntas, sigue los anuncios y habla con el equipo.",
    announcement: "Anuncio",
    today: "hoy",
    yesterday: "ayer",
    daysAgo: "hace {count} días",
    replyOne: "{count} respuesta",
    replyMany: "{count} respuestas",
    newTopic: "Nuevo tema",
    join: "Unirse a la comunidad",
    discord: "Unirse al Discord",
  },
  pcb: {
    circuit: "Circuito 3D",
    case: "Carcasa",
    auto: "Auto",
    loading: "Cargando el modelo 3D",
    unavailable: "Vista 3D no disponible",
    unavailableText: "El modelo no se ha podido cargar en este navegador.",
    hint: "Arrastra para girar · Rueda para hacer zoom",
    validated: "Pastille · ERC/DRC validados",
  },
  graph: {
    label: "Arquitectura y ecosistema conectados de la Suite Facile",
    categories: {
      bulle: "Agente IA",
      pastille: "Hardware e IoT",
      fusible: "Electrónica",
      sablier: "Tiempo",
      opus: "Proyectos",
      vision: "Analítica",
      glouton: "Prospección",
      ardoise: "Facturación",
      plume: "Firma",
      casier: "Secretos",
      nuage: "Almacenamiento",
      courrier: "Correo",
      agenda: "Planificación",
      feuilles: "Hojas de cálculo",
      docs: "Documentos",
      toile: "Pizarra",
      echo: "Videollamada",
      capsule: "Cifrado",
      scribe: "Audio",
      journal: "Logs",
      prisme: "Chat Matrix",
      sonde: "Estado",
      registre: "Auth SSO",
      boite: "Paquetes",
      place: "Comunidad",
    },
  },
  suiteCategories: {
    all: "Toda la suite",
    agent: "IA y agentes",
    hardware: "Hardware",
    business: "Negocio",
    productivity: "Productividad",
    infra: "Infraestructura",
  },
  projectCategories: {
    all: "Todos",
    showcase: "Webs de presentación",
    apps: "Aplicaciones",
    branding: "Branding",
    "3d": "3D",
  },
  projectsPage: {
    meta: {
      title: "Proyectos · Facile Studio",
      description: "Casos de estudio del estudio. Webs de presentación, aplicaciones de negocio, dirección de arte y experiencias 3D.",
    },
    eyebrow: "Portfolio",
    title: "Casos de estudio y trabajos",
    intro: "Cada proyecto se hace a medida, sin dependencias cautivas, con APIs que responden en menos de 50 ms.",
    keyDeliverables: "Entregables clave",
    caseStudy: "Caso de estudio",
    ctaTitle: "¿Tienes un proyecto de aplicación o de web corporativa?",
    ctaText: "Diseñamos, desarrollamos y alojamos tus herramientas, sin intermediarios.",
    ctaButton: "Hablar de tu proyecto",
  },
  projectPage: {
    metaTitle: "{name} · Caso de estudio · Facile Studio",
    metaDescription: "{name} por Facile Studio: {tagline}",
    back: "Volver a los proyectos",
    visit: "Ver la web",
    coverAlt: "Vista principal del proyecto {name}",
    problem: "El problema",
    solution: "La solución",
    galleryEyebrow: "Capturas",
    galleryTitle: "Galería",
    galleryIntro: "Capturas de los entregables en producción y maquetas.",
    deliverables: "Entregables del proyecto",
    stack: "Tecnologías y componentes",
    stackNote: "Ninguna dependencia propietaria cerrada. El código sigue siendo ligero y auditable.",
    ctaTitle: "Lanzar un proyecto similar",
    ctaText: "¿Objetivos parecidos para tu aplicación o tu web corporativa? Estudiamos tu necesidad en 48 horas.",
    others: "Otros proyectos",
    contact: "Contáctanos",
  },
  contact: {
    meta: {
      title: "Empezar un proyecto · Facile Studio",
      description: "Cuéntanos tu proyecto. Diseño a medida, código sólido y alojamiento soberano.",
    },
    progress: "Paso {step} de {total}",
    steps: [
      "Proyecto",
      "Presupuesto",
      "Visión",
      "Contacto",
    ],
    done: {
      title: "Tu solicitud está lista",
      text: "Tu cliente de correo se ha abierto con el resumen. Envía el correo y te respondemos en 24 h laborables.",
      summary: "Resumen de tu solicitud",
      type: "Tipo:",
      budget: "Presupuesto orientativo:",
      timeline: "Calendario:",
      contact: "Contacto:",
      edit: "Modificar mi solicitud",
    },
    typeStep: {
      title: "¿Qué tipo de proyecto quieres crear?",
      intro: "Elige tu necesidad principal.",
    },
    types: {
      showcase: {
        title: "Web corporativa excepcional",
        category: "Webs de presentación y dirección de arte",
        description: "Diseño a medida, animaciones a 60 FPS, SEO y una identidad que se recuerda.",
      },
      app: {
        title: "Aplicación web y SaaS",
        category: "Ingeniería y producto",
        description: "Herramienta de negocio, APIs rápidas, base de datos fiable y lógica a medida.",
      },
      branding: {
        title: "Dirección de arte y branding",
        category: "Diseño e identidad",
        description: "Logotipo, tipografía, manual de marca, design system y maquetas 3D.",
      },
      infra: {
        title: "Infra y alojamiento soberano",
        category: "DevOps y cloud",
        description: "Servidores dedicados en Europa, Docker, Nginx y alta disponibilidad.",
      },
      rnd: {
        title: "I+D, hardware y otros",
        category: "Hardware e I+D",
        description: "Objetos conectados, firmware Rust Embassy, microVMs o proyecto experimental.",
      },
    },
    budgetStep: {
      title: "Presupuesto y calendario",
      intro: "Estas referencias nos ayudan a dimensionar el proyecto.",
      budgetLabel: "Presupuesto previsto",
      timelineLabel: "Plazo o calendario deseado",
    },
    budgets: {
      xs: {
        label: "< 5k €",
        note: "Definición del proyecto o web corporativa pequeña",
      },
      s: {
        label: "5k - 15k €",
        note: "Web corporativa a medida o primera versión de una aplicación",
      },
      m: {
        label: "15k - 30k €",
        note: "Aplicación completa, branding y design system",
      },
      l: {
        label: "> 30k €",
        note: "Gran aplicación, I+D o ecosistema completo",
      },
    },
    timelines: {
      asap: "Lo antes posible (< 1 mes)",
      soon: "En 1 a 3 meses",
      later: "En 3 a 6 meses",
      flexible: "Sin fecha límite",
    },
    visionStep: {
      title: "Cuéntanos tu proyecto",
      intro: "Bastan unas palabras. Tu actividad, tus expectativas, tus limitaciones.",
      shortcuts: "Atajos:",
      detailsLabel: "Detalles (opcional, pero útil)",
      placeholder: "Tu público, las webs que te inspiran, las funcionalidades imprescindibles...",
    },
    tags: {
      redesign: "Rediseño de una web existente",
      newSite: "Web nueva",
      performance: "Rendimiento",
      design: "Diseño y animaciones",
      hosting: "Alojamiento soberano",
    },
    contactStep: {
      title: "¿Cómo podemos ponernos en contacto contigo?",
      intro: "Estudiamos tu proyecto y te respondemos en 24 h laborables.",
      name: "Nombre o empresa *",
      namePlaceholder: "Lucía García, Estudio García",
      email: "Email *",
      emailPlaceholder: "lucia@dominio.es",
      phone: "Teléfono (opcional)",
      phonePlaceholder: "612 34 56 78",
      summary: "Resumen de tu proyecto",
      nature: "Tipo de proyecto",
      budget: "Presupuesto orientativo",
      timeline: "Calendario",
      keyPoints: "Puntos clave",
      notes: "Tus notas",
      quote: "«{message}»",
      reply: "Respuesta en 24 h laborables",
      transparent: "Presupuesto transparente y sin compromiso",
    },
    prev: "Anterior",
    next: "Continuar",
    submit: "Enviar mi proyecto",
    mail: {
      subject: "[Proyecto] {type} - {name}",
      greeting: "Hola, Facile Studio:",
      name: "Nombre / Empresa:",
      email: "Email:",
      phone: "Teléfono:",
      type: "Tipo de proyecto:",
      budget: "Presupuesto estimado:",
      timeline: "Calendario previsto:",
      keyPoints: "Puntos clave:",
      description: "Descripción de la necesidad:",
      notProvided: "No indicado",
      none: "Ninguno",
      toBeDefined: "Por concretar en nuestra primera conversación.",
      sentFrom: "Enviado desde facile.studio/contact",
    },
  },
  services: {
    showcase: {
      title: "Webs de presentación",
      tagline: "Una web que te trae clientes.",
      description: "Diseño a medida, tipografía cuidada, animaciones a 60 FPS y SEO técnico. Sin plantillas: cada web parte de una página en blanco.",
      deliverables: [
        "Diseño UI/UX exclusivo",
        "Animaciones GSAP y WebGL ligeras",
        "Puntuación Lighthouse 95+",
        "Mobile-first y accesibilidad",
      ],
    },
    apps: {
      title: "Aplicaciones web y de negocio",
      tagline: "Las herramientas que tu actividad necesita, y nada más.",
      description: "SvelteKit y Go para el código, Postgres para los datos, APIs documentadas. Construimos el software que responde a tu necesidad, no un catálogo de funciones.",
      deliverables: [
        "Portales de clientes y SaaS",
        "Paneles en tiempo real",
        "Autenticación segura",
        "Integraciones API y pagos",
      ],
    },
    branding: {
      title: "Dirección de arte y branding",
      tagline: "Una identidad que se reconoce a primera vista.",
      description: "Logotipo, manual de marca, design system, assets 3D y reglas tipográficas. Todo funciona igual de bien en pantalla que en papel.",
      deliverables: [
        "Identidad visual y logotipo",
        "Design system y componentes",
        "Modelado 3D interactivo",
        "Tipografía y paleta",
      ],
    },
    devops: {
      title: "Infra y alojamiento soberano",
      tagline: "Tus servidores, tus datos, sin dependencias cautivas.",
      description: "Servidores dedicados Hetzner, contenedores Docker, certificados SSL automáticos con Traefik, copias de seguridad cifradas y monitorización.",
      deliverables: [
        "Despliegue continuo sin cortes",
        "Alojamiento europeo soberano",
        "Monitorización y alertas 24/7",
        "Copias de seguridad automáticas",
      ],
    },
  },
  projects: {
    marcel: {
      tagline: "Convertir las tareas del día a día en una misión heroica.",
      description: "Rediseño de marca y aplicación de productividad gamificada. Seguimiento de hábitos, puntos de experiencia y progreso visible.",
      deliverables: [
        "Identidad gráfica completa y logotipo",
        "Aplicación web responsive en tiempo real",
        "Motor de gamificación y cálculo de puntuaciones",
        "API Go de alto rendimiento y esquema Postgres",
      ],
      challenge: {
        title: "Conciliar la constancia diaria con un compromiso sostenido",
        description: "Las herramientas de productividad tradicionales sufren una alta tasa de abandono tras dos semanas. Marcel tenía que convertir rutinas repetitivas en mecánicas gratificantes, sin caer en el gadget superficial ni complicar el registro diario.",
      },
      approach: {
        title: "Un bucle de recompensa directo sobre un stack ultrarrápido",
        description: "Rediseñamos la identidad visual de arriba abajo: paleta viva, tipografía enérgica y señales de progreso claras. El motor se apoya en una API Go reactiva y una interfaz SvelteKit que responde en menos de 16 milisegundos. Cada hábito validado activa una respuesta háptica y sonora medida.",
      },
      stats: [
        {
          label: "Tiempo de respuesta API",
          value: "< 25ms",
        },
        {
          label: "Retención en la semana 4",
          value: "68%",
        },
        {
          label: "Puntuación Lighthouse",
          value: "99/100",
        },
      ],
      gallery: [
        {
          alt: "Panel principal de Marcel con vista de hábitos y métricas",
          caption: "Panel: resumen diario y misiones activas",
        },
        {
          alt: "Investigación gráfica y rediseño de la identidad de marca de Marcel",
          caption: "Rediseño de marca: dirección de arte y paleta",
        },
        {
          alt: "Aplicación móvil de Marcel en un smartphone",
          caption: "Experiencia móvil: ergonomía para el pulgar y gestos rápidos",
        },
        {
          alt: "Logotipo y retícula de construcción de Marcel",
          caption: "Construcción geométrica del logotipo",
        },
        {
          alt: "Recorrido de onboarding de Marcel",
          caption: "Bienvenida depurada en tres pasos",
        },
        {
          alt: "Vista de calendario e historial de cumplimiento de Marcel",
          caption: "Vista temporal de rachas y regularidad",
        },
      ],
    },
    "laura-herve": {
      tagline: "Interiorismo y escenografía.",
      description: "Web editorial para una interiorista. Fotos grandes, transiciones suaves y poco texto.",
      deliverables: [
        "Dirección de arte y tipografía de autor",
        "Puesta en escena fotográfica a pantalla completa",
        "Animaciones de scroll discretas y sin tirones",
        "Pipeline de compresión de imágenes 4K por debajo de 200 KB",
      ],
      challenge: {
        title: "Realzar los volúmenes sin ralentizar la carga",
        description: "La fotografía de interiorismo exige un nivel de detalle quirúrgico. El reto técnico era mostrar decenas de imágenes en alta resolución con una carga instantánea y un scroll constante a 60 FPS, tanto en smartphone como en pantalla Retina.",
      },
      approach: {
        title: "Una maquetación editorial y una precarga inteligente",
        description: "Diseñamos una interfaz despojada que deja respirar las texturas en bruto y las perspectivas. La codificación WebP adaptativa, combinada con una precarga por lotes, reduce el peso inicial por debajo de 800 KB sin pérdida de nitidez perceptible.",
      },
      stats: [
        {
          label: "Peso medio de página",
          value: "< 750 KB",
        },
        {
          label: "Rendimiento Lighthouse",
          value: "100/100",
        },
        {
          label: "Fluidez de animación",
          value: "60 FPS",
        },
      ],
      gallery: [
        {
          alt: "Página de inicio del portfolio de interiorismo de Laura Hervé",
          caption: "Página de inicio: tipografía monumental y obras destacadas",
        },
        {
          alt: "Maquetación en pantalla grande y fotografía de espacios",
          caption: "Vista en pantalla grande: espacios que respiran y blancos equilibrados",
        },
        {
          alt: "Versión móvil responsive del portfolio de Laura Hervé",
          caption: "Versión móvil: fluidez táctil y navegación sin fricción",
        },
        {
          alt: "Fachada y volúmenes arquitectónicos",
          caption: "Fotografía en alta definición: juegos de sombras y volúmenes en bruto",
        },
        {
          alt: "Detalle del portfolio y vista de un proyecto escenográfico",
          caption: "Vista de proyecto: alternancia de grandes formatos y detalles de materiales",
        },
      ],
    },
    "projet-zero": {
      tagline: "Concienciación y acción colectiva para la transición ecológica.",
      description: "Web interactiva con datos en tiempo real, un mapa de iniciativas locales y escenas 3D ligeras en el navegador.",
      deliverables: [
        "Escenas 3D interactivas optimizadas en WebGL",
        "Visualización de flujos de datos medioambientales",
        "Cartografía interactiva de puntos de recogida",
        "Arquitectura sobria con huella de carbono mínima",
      ],
      challenge: {
        title: "Hacer tangible el impacto ecológico sin pesadez técnica",
        description: "Concienciar sin culpabilizar exige convertir órdenes de magnitud abstractos en visualizaciones comprensibles. El reto: integrar elementos 3D interactivos para un público general con dispositivos muy variados sin disparar la huella energética de la página.",
      },
      approach: {
        title: "Shaders GLSL a medida e instanciación geométrica",
        description: "Construimos un universo visual basado en shaders procedurales ligeros con Three.js. Todos los cálculos geométricos se ejecutan en la GPU con un presupuesto de memoria inferior a 25 MB. La navegación sigue siendo fluida incluso en smartphones de gama de entrada.",
      },
      stats: [
        {
          label: "Presupuesto de memoria GPU",
          value: "< 25 MB",
        },
        {
          label: "Huella de carbono",
          value: "0.12g CO2/vista",
        },
        {
          label: "Compatibilidad móvil",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Página de inicio y visualización 3D de Projet Zéro",
          caption: "Pantalla de apertura: globo de datos e indicadores clave",
        },
        {
          alt: "Vista interactiva que revela los datos medioambientales",
          caption: "Módulo interactivo: exploración de flujos y palancas de acción",
        },
        {
          alt: "Visualización nodal y grafo de interconexiones",
          caption: "Grafo de impacto: red de iniciativas ecológicas locales",
        },
        {
          alt: "Simulación de partículas de los flujos de carbono",
          caption: "Simulación física ligera en WebGL animada en tiempo real",
        },
        {
          alt: "Indicadores de energía y conversión en tiempo real",
          caption: "Panel de acciones con gran efecto palanca",
        },
      ],
    },
    bulle: {
      tagline: "Agente de código autónomo con su propio ordenador en el navegador.",
      description: "Cada sesión se ejecuta en su propia microVM Linux, con una interfaz en streaming en tiempo real. Bulle ejecuta, prueba y despliega el código.",
      deliverables: [
        "MicroVM Linux aislada por sesión",
        "Streaming de inferencia en tiempo real y herramientas MCP",
        "Interfaz de usuario reactiva en Svelte 5",
        "Protocolo de sincronización cifrado Matrix E2EE",
      ],
      challenge: {
        title: "Ofrecer un agente autónomo completo sin comprometer la seguridad",
        description: "Dar a un modelo de lenguaje acceso completo a una shell y a un sistema de archivos exige un aislamiento total y una latencia de red mínima. Cada sesión tenía que arrancar en menos de dos segundos dentro de un sandbox estanco.",
      },
      approach: {
        title: "MicroVMs Linux instantáneas y protocolo de control nativo en Go",
        description: "Diseñamos un runtime en torno a micromáquinas virtuales Linux acopladas a un daemon Go ligero. El agente manipula el árbol de archivos, lanza compilaciones y transmite sus pasos por un canal de eventos tipado.",
      },
      stats: [
        {
          label: "Arranque de la MicroVM",
          value: "< 1.8s",
        },
        {
          label: "Latencia de streaming",
          value: "< 16ms",
        },
        {
          label: "Aislamiento de memoria",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Interfaz web del agente de código autónomo Bulle",
          caption: "Espacio de trabajo de Bulle: terminal, árbol de archivos y flujo de razonamiento",
        },
        {
          alt: "Grafo de ejecución y orquestación de agentes",
          caption: "Orquestación multiagente y planificación de tareas",
        },
        {
          alt: "Visualización de partículas de tokens y flujos",
          caption: "Visualización en tiempo real de la actividad del modelo",
        },
      ],
    },
    "evelyne-crea": {
      tagline: "Taller de cerámica artesanal y piezas escultóricas.",
      description: "Identidad visual y web para una ceramista. Catálogo de piezas únicas, fotos de materia y formulario de contacto.",
      deliverables: [
        "Manual de marca, logotipo y papelería",
        "Catálogo de piezas con filtros por material",
        "Etapas de cocción y modelado en primer plano",
        "Optimización SEO local para el taller",
      ],
      challenge: {
        title: "Transmitir la textura mineral y la autenticidad de lo hecho a mano",
        description: "La artesanía artística exige una sensibilidad gráfica poco habitual en la web. La web tenía que evocar la calidez de la terracota y la aspereza de los esmaltes, sin artificios ni sobrecarga visual que desviara la mirada de las creaciones.",
      },
      approach: {
        title: "Matices terrosos, tipografía fina y enfoque macro",
        description: "Creamos una identidad basada en sutiles contrastes de grises cálidos y ocres. La web pone en valor cada pieza con una composición asimétrica y tomas cercanas que revelan el grano natural de la arcilla.",
      },
      stats: [
        {
          label: "Contactos con el taller",
          value: "+140%",
        },
        {
          label: "Tiempo de carga",
          value: "0.4s",
        },
        {
          label: "Puntuación de accesibilidad",
          value: "100/100",
        },
      ],
      gallery: [
        {
          alt: "Web del Atelier Évelyne Création con catálogo de cerámicas",
          caption: "Web del taller: selección de piezas y relato artesanal",
        },
        {
          alt: "Serie Pavements de cerámicas y texturas minerales",
          caption: "Serie Pavements: trabajo escultórico mineral y texturas de esmaltes",
        },
        {
          alt: "Serie Green de cerámicas vegetales y contrastes cromáticos",
          caption: "Serie Green: exploración cromática orgánica y formas vegetales",
        },
        {
          alt: "Serie Harmonie de cerámicas esmaltadas",
          caption: "Serie Harmonie: equilibrio de materiales y cocción a alta temperatura",
        },
        {
          alt: "Serie Temple de cerámicas monumentales",
          caption: "Serie Temple: arquitectura de piezas únicas y volúmenes en bruto",
        },
        {
          alt: "Serie Escaliers, geometría y sombras proyectadas",
          caption: "Serie Escaliers: líneas y juegos de sombras geométricas",
        },
      ],
    },
    "retro-festival": {
      tagline: "Festival independiente que celebra los videojuegos de época y la cultura pop.",
      description: "Dirección de arte retrofuturista, identidad del evento, programa por horas y venta de entradas sin comisiones de intermediarios.",
      deliverables: [
        "Identidad de marca, carteles y piezas impresas",
        "Plataforma web con parrilla horaria dinámica",
        "Venta de entradas integrada sin intermediarios",
        "Plano interactivo del festival y de los stands",
      ],
      challenge: {
        title: "Generar entusiasmo visual y aguantar los picos de venta",
        description: "Al abrir la venta de entradas, varios miles de visitantes se conectan a la vez en pocos minutos. La interfaz tenía que conciliar un estilo visual contundente de inspiración arcade con una solidez transaccional a toda prueba.",
      },
      approach: {
        title: "Gráfica contundente y servidor Go dimensionado para los picos",
        description: "Combinamos tipografías bitmap estilizadas con una paleta neón sobre fondo oscuro. El sistema de reservas en Go gestiona las colas y la validación de Stripe en pocos milisegundos, sin ninguna caída en las aperturas de venta.",
      },
      stats: [
        {
          label: "Entradas vendidas el día 1",
          value: "3500",
        },
        {
          label: "Tiempo medio de pago",
          value: "38s",
        },
        {
          label: "Disponibilidad en picos de tráfico",
          value: "100%",
        },
      ],
      gallery: [
        {
          alt: "Cartel y web del evento Rétro Festival",
          caption: "Plataforma del festival: universo visual ochentero y programación interactiva",
        },
        {
          alt: "Creaciones visuales y universo gráfico retro-gaming",
          caption: "Carteles e ilustraciones serigrafiadas creadas para el evento",
        },
        {
          alt: "Variantes tipográficas y fanzines",
          caption: "Variantes monocromas y señalética física de los stands",
        },
        {
          alt: "Escenografía y torneos arcade",
          caption: "Escenografía visual de los torneos retro y máquinas de época",
        },
        {
          alt: "Pixel art y premios de competición",
          caption: "Insignias pixel art exclusivas entregadas a los finalistas",
        },
      ],
    },
  },
  tools: {
    bulle: {
      tagline: "Compañero IA autónomo en su microVM dedicada",
      description: "Agente de ingeniería completo con VM persistente, chat Matrix, OpenUI y avatar expresivo.",
      tag: "MicroVM · Matrix · OpenUI",
    },
    prisme: {
      tagline: "Mensajería de equipo y salas conectadas en Matrix",
      description: "Salas por proyecto, llamadas cifradas y compañeros IA Bulle integrados. Un Slack soberano sin suscripción.",
      tag: "Chat · Matrix E2EE",
    },
    courrier: {
      tagline: "Tu correo en tu casa",
      description: "IMAP y SMTP nativos, varias cuentas, una interfaz sin distracciones.",
      tag: "Email · IMAP/SMTP",
    },
    agenda: {
      tagline: "El calendario compartido del estudio",
      description: "Citas, fechas límite y disponibilidad del equipo. CalDAV nativo, sin pasar por Google.",
      tag: "CalDAV · Planificación",
    },
    echo: {
      tagline: "Videollamadas cifradas sin instalar nada",
      description: "Crea una sala, comparte el enlace y listo. WebRTC cifrado.",
      tag: "WebRTC · Vídeo",
    },
    feuilles: {
      tagline: "La hoja de cálculo colaborativa del estudio",
      description: "Motor IronCalc, coedición en directo, importación y exportación xlsx. Legible por agentes vía MCP.",
      tag: "Hoja de cálculo · xlsx",
    },
    docs: {
      tagline: "Documentos escritos a varias manos",
      description: "Árbol de páginas por espacio, edición en tiempo real, exportación a PDF. Legible por agentes vía MCP.",
      tag: "Docs · Tiempo real",
    },
    toile: {
      tagline: "Una pizarra infinita para compartir",
      description: "Notas, dibujo y formas en un lienzo sin límites, en tiempo real con todo el equipo.",
      tag: "Canvas · Tiempo real",
    },
    nuage: {
      tagline: "El almacenamiento de archivos del estudio",
      description: "El drive del estudio, conectado a todas tus herramientas con una API compatible con S3. Comparte archivos sin intermediarios.",
      tag: "Archivos · S3",
    },
    opus: {
      tagline: "La gestión de proyectos que no te frena",
      description: "Kanban, enlaces entre tareas, búsqueda instantánea. Nada superfluo.",
      tag: "Kanban · Tareas",
    },
    sablier: {
      tagline: "Tus horas facturables, registradas en un clic",
      description: "Un clic para empezar, un clic para parar. Tiempo desglosado por proyecto, sesiones compartidas en directo.",
      tag: "Tiempo · Proyectos",
    },
    pastille: {
      tagline: "Baliza de voz y sensor conectado libre de 38 mm",
      description: "Hardware abierto BOHS-01, audio dúplex a 16 kHz, pantalla circular IPS y firmware Rust Embassy.",
      tag: "ESP32-S3 · Embassy · BLE",
    },
    fusible: {
      tagline: "Placas, firmware y carcasas en un solo proyecto verificado",
      description: "Linter eléctrico y físico, pines de firmware Rust generados, piezas 3D en código, lista de materiales y archivos de fabricación. Bulle lo controla vía MCP.",
      tag: "Rust · PCB · CAD · MCP",
    },
    vision: {
      tagline: "La analítica web que respeta a tus visitantes",
      description: "Un script ligero, sin cookies, datos en tiempo real, conforme al RGPD.",
      tag: "Analítica · RGPD",
    },
    glouton: {
      tagline: "Tus próximos clientes, encontrados mientras duermes",
      description: "Glouton explora la web, analiza los stacks técnicos y cualifica los leads para el estudio.",
      tag: "Prospección · Web",
    },
    ardoise: {
      tagline: "Factura, cobra y olvídate",
      description: "Stripe integrado, presupuestos convertidos en factura en un clic, recordatorios automáticos y recibos en PDF.",
      tag: "Facturas · Stripe",
    },
    plume: {
      tagline: "Firma electrónica, sin complicaciones",
      description: "Sube un PDF, coloca los campos de firma y envía el enlace al cliente. Simple y con validez legal.",
      tag: "Firma · PDF",
    },
    casier: {
      tagline: "Caja fuerte de secretos para tu equipo",
      description: "Cifrado AES-256-GCM, inyección en la shell, historial de versiones y registro de auditoría.",
      tag: "Secretos · AES-256",
    },
    capsule: {
      tagline: "Comparte un secreto que se autodestruye",
      description: "Cifrado de extremo a extremo en el navegador. El servidor nunca ve el contenido. Caducidad a elegir.",
      tag: "E2EE · Zero-Knowledge",
    },
    scribe: {
      tagline: "Transcripción de audio y resúmenes estructurados",
      description: "Graba tus reuniones, transcribe en local y en tiempo real, y redacta el acta.",
      tag: "Audio · Resumen",
    },
    journal: {
      tagline: "Logs centralizados para toda la infraestructura",
      description: "Recoge los logs de Docker, búsqueda instantánea, detección de errores y alertas.",
      tag: "Telemetría · Logs",
    },
    sonde: {
      tagline: "Monitorización de disponibilidad y página de estado pública",
      description: "Heartbeats, sondas multirregión y alertas en cuanto un servicio cae.",
      tag: "Uptime · Estado",
    },
    registre: {
      tagline: "Una sola cuenta para todo el ecosistema",
      description: "OIDC estándar y sesiones compartidas entre todas las herramientas.",
      tag: "OIDC · SSO",
    },
    boite: {
      tagline: "Gestor de paquetes y artefactos binarios",
      description: "Aloja tus artefactos, imágenes Docker y dependencias privadas.",
      tag: "Paquetes · OCI",
    },
    place: {
      tagline: "El foro de la comunidad Facile",
      description: "La comunidad Facile reunida en un foro web conectado a Discord. Haz tus preguntas, sigue los anuncios y habla con el equipo.",
      tag: "Foro · Discord",
    },
  },
};
