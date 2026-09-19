export const site = {
  title: "Maleeha Abid | Geography Student | GIS & Spatial Analysis",
  description:
    "BSc Geography student at Lahore College for Women University developing skills in GIS, spatial analysis, environmental research, mapping, and introductory Python, with internship experience at the Soil Survey of Punjab.",
  name: "Maleeha Abid",
  headlinePrimary: "BSc Geography Student",
  headlineSecondary: "GIS & Spatial Analysis",
  location: "Lahore, Pakistan",
  email: "malihaabid02@gmail.com",
  phone: "+92 325 8322544",
  cvPath: "/assets/Maleeha_Abid_CV.pdf",
  cvAvailable: true,
};

export const socials = [
  {
    id: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maleeha-abid-b76aa8364",
  },
  {
    id: "instagram" as const,
    label: "Instagram",
    href: "https://www.instagram.com/aleena_blog02/",
  },
];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const contact = {
  kicker: "Get in touch",
  intro:
    "Interested in GIS, geospatial analysis, environmental research, or internship opportunities? I would be glad to connect.",
  note: "Currently developing skills in GIS, spatial analysis, environmental mapping, and introductory Python, and looking for internships and academic opportunities where I can apply and expand these skills.",
  openToLabel: "Open to",
  openTo: ["GIS opportunities", "Research", "Internships", "Academic collaboration"],
  formTitle: "Send a Message",
  formIntro: "Fill in the form and I will reply by email.",
  formNote: "I will reply by email when I can.",
};

export const hero: {
  kicker: string;
  hello: string;
  intro: string;
  focusLabel: string;
  focus: string[];
  fields: string[];
  facts: {
    icon: "pin" | "study" | "work" | "code";
    label: string;
    title: string;
    detail?: string;
    meta?: string;
  }[];
  mapLabel: string;
  coordinates: [string, string];
} = {
  kicker: "Personal portfolio · Geography / GIS",
  hello: "Hello, I'm",
  intro:
    "Geography student developing practical skills in GIS, spatial mapping, and environmental research, with internship experience in soil mapping and introductory Python training.",
  focusLabel: "Current focus",
  focus: [
    "GIS & Geospatial Analysis",
    "Environmental Mapping",
    "Spatial Data",
    "Geography Research",
  ],
  fields: ["GIS", "Spatial Analysis", "Geography"],
  facts: [
    {
      icon: "pin" as const,
      label: "Location",
      title: "Lahore, Pakistan",
    },
    {
      icon: "study" as const,
      label: "Current study",
      title: "BSc Geography, 2023–2027",
      detail: "Lahore College for Women University",
    },
    {
      icon: "work" as const,
      label: "Recent placement",
      title: "GIS & Mapping Intern",
      detail: "Soil Survey of Punjab, Lahore",
      meta: "06 August 2026 – 28 August 2026",
    },
    {
      icon: "code" as const,
      label: "Additional training",
      title: "2-Day Python Workshop",
      detail: "Lahore College for Women University (LCWU)",
    },
  ],
  mapLabel: "Lahore",
  coordinates: ["31.52° N", "74.36° E"],
};

export const about = {
  kicker: "About",
  indexLabel: "About me",
  title: "Geography Shapes",
  titleAccent: "My Perspective",
  tags: ["GIS", "Spatial Analysis", "Environmental Research"],
  lead: "Building a grounded combination of geography, GIS, and environmental research as an undergraduate student.",
  paragraphs: [
    "I am a BSc Geography student at Lahore College for Women University (2023–2027). My coursework spans geographic information systems, cartography, remote sensing, and environmental, human, and physical geography.",
    "Practical GIS exposure comes from a mapping internship with the Soil Survey of Punjab, Lahore, where I used GIS tools, digitisation, and layout composition for the preparation of soil maps.",
    "Alongside the Geography curriculum, I completed introductory Python training to begin developing computational skills for spatial data and research-oriented work. I am looking for internships and academic opportunities where I can apply and expand these skills.",
  ],
  languages: [
    { name: "Urdu", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "Punjabi", level: "Basic" },
  ],
  workingApproach: [
    "Analytical Thinking",
    "Attention to Detail",
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Adaptability",
  ],
  journeyLabel: "My journey",
  journey: [
    { icon: "book" as const, title: "Geography", text: "BSc programme" },
    { icon: "layers" as const, title: "GIS", text: "Coursework and mapping" },
    { icon: "pin" as const, title: "Practical Experience", text: "Soil mapping internship" },
    { icon: "code" as const, title: "Python", text: "Introductory workshop" },
  ],
  focusLabel: "Focus",
  focus: [
    { icon: "layers" as const, label: "GIS & Spatial Analysis" },
    { icon: "leaf" as const, label: "Environmental Mapping" },
    { icon: "chart" as const, label: "Spatial Data" },
    { icon: "search" as const, label: "Geography Research" },
  ],
};

export const skills: {
  intro: string;
  note: string;
  levelNote: string;
  groups: {
    id: string;
    title: string;
    items: { name: string; level?: string; detail?: string }[];
  }[];
  foundation: { title: string; items: string[] };
  path: string[];
} = {
  intro:
    "Technical and geospatial skills developed through coursework, practical experience, internship training, and independent learning.",
  note: "Growing through coursework, practical experience, and continuous learning.",
  levelNote: "Skill levels reflect my current stage of learning and practical experience.",
  groups: [
    {
      id: "gis",
      title: "GIS & Geospatial",
      items: [
        { name: "ArcGIS", level: "Beginner" },
        { name: "QGIS", level: "Beginner" },
        { name: "Map Digitisation" },
        { name: "Georeferencing" },
        { name: "Layer Editing" },
        { name: "Spatial Data Handling" },
        { name: "Map Visualisation" },
        { name: "Environmental Mapping" },
      ],
    },
    {
      id: "programming",
      title: "Programming & Data",
      items: [
        { name: "Python", level: "Introductory", detail: "Workshop-based training" },
        { name: "Data Collection & Documentation" },
      ],
    },
    {
      id: "office",
      title: "Microsoft Office",
      items: [
        { name: "Word" },
        { name: "PowerPoint" },
        { name: "Excel", level: "Basic" },
      ],
    },
  ],
  foundation: {
    title: "Academic Foundation",
    items: ["Geography", "GIS Coursework", "Practical Learning"],
  },
  path: ["Coursework", "Practical Experience", "Internship", "Continuous Learning"],
};

export const internship = {
  role: "GIS & Mapping Intern",
  organization: "Soil Survey of Punjab, Lahore",
  dates: "06 August 2026 – 28 August 2026",
  summary:
    "Short professional internship focused on GIS-supported soil mapping, using GIS tools, digitisation, and layout composition.",
  tags: ["GIS", "Soil Mapping", "Digitisation", "Map Layout"],
  bullets: [
    {
      icon: "layers" as const,
      text: "Used GIS tools for the preparation of soil maps.",
    },
    {
      icon: "cursor" as const,
      text: "Applied digitisation techniques for soil mapping.",
    },
    {
      icon: "layout" as const,
      text: "Worked with layout composition for the preparation of soil maps.",
    },
  ],
  certificate: {
    src: "/assets/internship/certificate.jpg",
    caption: "Internship Certificate, Soil Survey of Punjab, Lahore, 06–28 August 2026.",
    alt: "Internship certificate from the Soil Survey of Punjab, Lahore, awarded to Maleeha Abid, BSc Geography, for the internship from 06 August 2026 to 28 August 2026, covering GIS tools, digitisation, and layout composition for soil maps.",
  },
  gallery: [
    {
      id: "soil-mapping",
      label: "Soil mapping example",
      hint: "Place a soil-map image in public/assets/internship/soil-mapping.jpg",
    },
    {
      id: "digitisation",
      label: "Digitisation example",
      hint: "Place a digitisation screenshot in public/assets/internship/digitisation.jpg",
    },
  ],
};

export const academicExperience = [
  {
    id: "gis-practice",
    number: "01",
    badge: "Academic project",
    title: "GIS & Mapping Practice",
    context: "University GIS practical assignments",
    overlay: "GIS · Mapping · Analysis",
    photo: "digitisation" as const,
    tags: ["ArcGIS", "QGIS", "Map Digitisation", "Georeferencing", "Map Visualisation", "Layer Editing"],
    bullets: [
      {
        icon: "layers" as const,
        text: "Applied basic map digitisation and layer-editing techniques using ArcGIS and QGIS.",
      },
      {
        icon: "pin" as const,
        text: "Worked with spatial data and basic georeferencing workflows in university GIS practical assignments.",
      },
      {
        icon: "chart" as const,
        text: "Created and interpreted map visualisations and layouts for academic geographic analysis.",
      },
    ],
  },
  {
    id: "coursework",
    number: "02",
    badge: "Academic coursework",
    title: "Geography Coursework",
    context: "Lahore College for Women University",
    overlay: "Environment · Geography · Research",
    photo: "environment" as const,
    tags: ["Field Observation", "Report Writing", "Environmental Analysis", "Academic Research"],
    bullets: [
      {
        icon: "book" as const,
        text: "Participated in map-based coursework and field observation activities.",
      },
      {
        icon: "edit" as const,
        text: "Assisted in preparing geography reports and academic presentations.",
      },
      {
        icon: "leaf" as const,
        text: "Applied basic environmental and geographic research methods in academic coursework.",
      },
    ],
  },
];

export const academicIntro =
  "GIS practical assignments and geography coursework completed during the BSc Geography programme. This section records academic experience, distinct from the professional internship above.";

export const mapsIntro =
  "Map images are not on the current CV. These frames are placeholders so files can be added later without redesigning the page.";

export const mapPlaceholders = [
  {
    id: "gis-map",
    icon: "pin" as const,
    title: "GIS map",
    description: "Academic or internship map visualisation.",
    tags: ["GIS", "Mapping", "Visualisation"],
    label: "Add GIS map",
    fileHint: "public/assets/maps/gis-map.jpg",
  },
  {
    id: "soil-map",
    icon: "layers" as const,
    title: "Soil map",
    description: "Soil-map example from the Soil Survey of Punjab internship.",
    tags: ["GIS Tools", "Digitisation", "Layout"],
    label: "Add soil map",
    fileHint: "public/assets/maps/soil-map.jpg",
  },
  {
    id: "digitisation-work",
    icon: "edit" as const,
    title: "Digitisation work",
    description: "Example of digitisation or layer-editing work.",
    tags: ["Digitisation", "Layer Editing"],
    label: "Add digitisation work",
    fileHint: "public/assets/maps/digitisation.jpg",
  },
  {
    id: "academic-map",
    icon: "book" as const,
    title: "Academic map",
    description: "Map produced for university GIS practical work.",
    tags: ["ArcGIS", "QGIS"],
    label: "Add academic map",
    fileHint: "public/assets/maps/academic-map.jpg",
  },
];

export const education: {
  title: string;
  institution: string;
  place: string;
  city: string;
  dates: string;
  icon: "cap" | "book" | "doc";
  summary: string;
  image?: { id: "lcwu" | "concordia" | "pride"; alt: string };
  details?: string[];
  detailsLabel?: string;
}[] = [
  {
    title: "Bachelor of Science (BSc) — Geography",
    institution: "Lahore College for Women University, Lahore",
    place: "Lahore College for Women University",
    city: "Lahore",
    dates: "2023 – 2027",
    icon: "cap",
    image: {
      id: "lcwu",
      alt: "Crest of Lahore College for Women University",
    },
    summary:
      "Undergraduate Geography degree in progress, with academic work in GIS, spatial analysis, environmental studies, and geographic research.",
    details: [
      "Geographic Information Systems (GIS)",
      "Cartography",
      "Remote Sensing",
      "Environmental Geography",
      "Human Geography",
      "Physical Geography",
    ],
    detailsLabel: "Relevant coursework",
  },
  {
    title: "F.Sc Pre-Medical",
    institution: "Concordia College, Lahore",
    place: "Concordia College",
    city: "Lahore",
    dates: "2023",
    icon: "book",
    image: {
      id: "concordia",
      alt: "Logo of Concordia Colleges",
    },
    summary: "Completed intermediate Pre-Medical studies.",
  },
  {
    title: "Matriculation",
    institution: "Pride School System, Lahore",
    place: "Pride School System",
    city: "Lahore",
    dates: "2021",
    icon: "doc",
    image: {
      id: "pride",
      alt: "Logo of Pride School System",
    },
    summary: "Completed matriculation.",
  },
];

export const workshopsIntro =
  "Additional training and workshops. These are not employment entries.";

export const workshops = [
  {
    id: "python",
    number: "01",
    badge: "Workshop",
    title: "2-Day Python Workshop (LCWU)",
    institution: "Lahore College for Women University",
    dates: "",
    summary:
      "Introductory Python training completed outside the formal Geography curriculum.",
    tags: ["Python", "Introductory Training"],
    mark: "code" as const,
    bullets: [] as string[],
  },
  {
    id: "field-research",
    number: "02",
    badge: "International workshop",
    title: "International Workshop on Field Research & Migration Studies (Global South)",
    institution: "Lahore College for Women University",
    dates: "November 2025",
    summary: "",
    tags: ["Field Research", "Migration Studies", "Research Methods"],
    mark: "globe" as const,
    bullets: [
      "Strengthened fieldwork and geographic data collection skills.",
      "Examined migration patterns and socio-economic factors in developing regions.",
      "Built familiarity with research methodologies used in geography studies.",
    ],
  },
];

export const interests: {
  id: string;
  number: string;
  title: string;
  icon: "layers" | "chart" | "map" | "leaf" | "satellite" | "globe";
  text: string;
  image?: {
    id: "gis" | "spatial" | "digitisation" | "environment" | "sensing" | "research";
    alt: string;
  };
}[] = [
  {
    id: "gis",
    number: "01",
    title: "GIS & Geospatial Analysis",
    icon: "layers",
    image: {
      id: "gis",
      alt: "",
    },
    text: "Developing GIS skills through university practical work and internship mapping.",
  },
  {
    id: "spatial",
    number: "02",
    title: "Spatial Data",
    icon: "chart",
    image: {
      id: "spatial",
      alt: "",
    },
    text: "Learning to work with spatial data for mapping and basic geographic analysis.",
  },
  {
    id: "digitisation",
    number: "03",
    title: "Map Digitisation",
    icon: "map",
    image: {
      id: "digitisation",
      alt: "",
    },
    text: "Practising digitisation and layer editing in academic GIS work and soil-map preparation.",
  },
  {
    id: "environment",
    number: "04",
    title: "Environmental Mapping",
    icon: "leaf",
    image: {
      id: "environment",
      alt: "",
    },
    text: "Interest in environmental and soil mapping, including internship work on soil maps.",
  },
  {
    id: "sensing",
    number: "05",
    title: "Remote Sensing",
    icon: "satellite",
    image: {
      id: "sensing",
      alt: "",
    },
    text: "Remote sensing is part of my BSc Geography coursework.",
  },
  {
    id: "research",
    number: "06",
    title: "Geography Research",
    icon: "globe",
    image: {
      id: "research",
      alt: "",
    },
    text: "Building research skills through coursework, fieldwork training, and further study.",
  },
];
