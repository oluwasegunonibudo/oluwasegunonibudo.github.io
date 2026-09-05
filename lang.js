const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navWork: "Work",
    navResearch: "Research & Publications",
    navWorkshops: "Workshops",
    navInternship: "Internship",
    navProjects: "Projects & Maps",
    navSocial: "Social Media",

    homeTitle: "Geospatial Analyst • Applied Geologist • Cartographer • Remote Sensing Specialist",
    homeP1: "I am a Geospatial Analyst and Applied Geologist with over seven years of experience integrating GIS, remote sensing, and geological science to support environmental management, groundwater exploration, land administration, and sustainable development.",
    homeP2: "I have contributed to major GIS and land administration projects at OYOGIS, KADGIS, and NASRDA, conducted award‑winning research on groundwater prediction and lineament mapping, and published multiple peer‑reviewed studies on geospatial modelling, DEM‑derived lineament extraction, and environmental analysis.",
    homeP3: "I also train professionals, students, and government staff in GIS and remote sensing, leading geospatial intelligence seminars and capacity‑building programs across Nigeria and China. This portfolio showcases my research, projects, maps, teaching engagements, and professional contributions—reflecting my commitment to advancing geospatial science for sustainable development and informed decision‑making.",
    homeProjectTitle: "Professional Activities & Project Showcase",
    homeProjectText: "Images from my professional engagements, including GIS analysis, fieldwork, training sessions, workshops, conference presentations, and project contributions across OYOGIS, KADGIS, NASRDA, Onidex Geo‑Spatial Solutions Akure, and the China University of Mining and Technology (CUMT).",

    footerHeading: "Let's Connect for Research or Professional Opportunities",
    footerSubtext: "Open to collaborations, geospatial data analysis projects, or full-time roles in GIS and Remote Sensing.",

    aboutHeading: "About Me",
    aboutP1: "I am Oluwasegun Onibudo, a Geospatial Analyst and Applied Geologist with a strong multidisciplinary background in GIS, remote sensing, cartography, and earth science.",
    aboutP2: "With over seven years of hands‑on experience, I have contributed to major geospatial and land‑administration projects across Nigeria and China.",
    aboutP3: "I am also a published researcher with multiple peer‑reviewed journal articles and international conference presentations.",
    aboutP4: "Beyond research and project execution, I am deeply committed to capacity building through seminars, workshops, and professional development programs.",
    aboutP5: "This portfolio reflects my journey across geology, geospatial science, research, teaching, and professional practice.",

    skillsHeading: "Technical Skills & Competencies",
    skillsSubtext: "A comprehensive blend of geospatial, analytical, and technical skills developed through hands‑on fieldwork, academic research, and applied GIS/Remote Sensing projects.",

    skill1: "GIS Software: ArcGIS Pro, ArcGIS Server, ArcMap, QGIS, ILWIS, PCI Geomatica, RockWorks",
    skill2: "Remote Sensing Tools: ERDAS Imagine, ENVI, Google Earth",
    skill3: "Geospatial Techniques: spatial analysis, digitization, GPS operation, image processing, land‑use mapping, ground‑truthing, georeferencing",
    skill4: "Programming & Automation: Python, geospatial data analysis, visualization, task automation",
    skill5: "Data Management: SQL querying, database design, spatial databases, metadata management",
    skill6: "Professional Tools: Microsoft Office, report writing, map production, workflow documentation"
  },

  de: {
    navHome: "Startseite",
    navAbout: "Über mich",
    navWork: "Arbeit",
    navResearch: "Forschung & Veröffentlichungen",
    navWorkshops: "Workshops",
    navInternship: "Praktikum",
    navProjects: "Projekte & Karten",
    navSocial: "Soziale Medien",

    homeTitle: "Geodatenanalyst • Angewandter Geologe • Kartograph • Fernerkundungsspezialist",
    homeP1: "Ich bin ein Geodatenanalyst und angewandter Geologe mit über sieben Jahren Erfahrung in der Integration von GIS, Fernerkundung und Geowissenschaften.",
    homeP2: "Ich habe zu wichtigen GIS- und Landverwaltungsprojekten beigetragen und preisgekrönte Forschung durchgeführt.",
    homeP3: "Ich schule Fachkräfte, Studierende und Behördenmitarbeiter in GIS und Fernerkundung.",
    homeProjectTitle: "Berufliche Aktivitäten & Projektübersicht",
    homeProjectText: "Bilder aus meinen beruflichen Tätigkeiten, einschließlich GIS-Analyse, Feldarbeit, Schulungen, Workshops und Konferenzpräsentationen.",

    footerHeading: "Kontakt für Forschungs- oder berufliche Möglichkeiten",
    footerSubtext: "Offen für Zusammenarbeit, GIS-Datenanalyseprojekte oder Vollzeitstellen im Bereich GIS und Fernerkundung.",

    aboutHeading: "Über mich",
    aboutP1: "Ich bin Oluwasegun Onibudo, ein Geodatenanalyst und angewandter Geologe mit starkem multidisziplinärem Hintergrund.",
    aboutP2: "Mit über sieben Jahren praktischer Erfahrung habe ich zu wichtigen geospatialen Projekten in Nigeria und China beigetragen.",
    aboutP3: "Ich bin ein veröffentlichter Forscher mit mehreren begutachteten Artikeln und internationalen Konferenzbeiträgen.",
    aboutP4: "Neben Forschung und Projekten engagiere ich mich stark für die Weiterbildung durch Seminare und Workshops.",
    aboutP5: "Dieses Portfolio zeigt meinen Weg durch Geologie, Geodatenwissenschaft, Forschung und berufliche Praxis.",

    skillsHeading: "Technische Fähigkeiten & Kompetenzen",
    skillsSubtext: "Eine umfassende Mischung aus geospatialen, analytischen und technischen Fähigkeiten.",

    skill1: "GIS-Software: ArcGIS Pro, ArcGIS Server, ArcMap, QGIS, ILWIS, PCI Geomatica, RockWorks",
    skill2: "Fernerkundungswerkzeuge: ERDAS Imagine, ENVI, Google Earth",
    skill3: "Geodaten-Techniken: räumliche Analyse, Digitalisierung, GPS, Bildverarbeitung, Kartierung",
    skill4: "Programmierung & Automatisierung: Python, Datenanalyse, Visualisierung",
    skill5: "Datenmanagement: SQL, Datenbankdesign, räumliche Datenbanken, Metadatenverwaltung",
    skill6: "Professionelle Werkzeuge: Microsoft Office, Berichtserstellung, Kartenproduktion"
  }
};

// Load saved language
let currentLang = localStorage.getItem("siteLanguage") || "en";

// Handle language switch
document.getElementById("lang-switch").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  localStorage.setItem("siteLanguage", currentLang);
  applyTranslations();
});

// Apply translations
function applyTranslations() {
  const map = {
    "nav-home": "navHome",
    "nav-about": "navAbout",
    "nav-work": "navWork",
    "nav-research": "navResearch",
    "nav-workshops": "navWorkshops",
    "nav-internship": "navInternship",
    "nav-projects": "navProjects",
    "nav-social": "navSocial",

    "home-title": "homeTitle",
    "home-p1": "homeP1",
    "home-p2": "homeP2",
    "home-p3": "homeP3",
    "home-project-title": "homeProjectTitle",
    "home-project-text": "homeProjectText",

    "footer-heading": "footerHeading",
    "footer-subtext": "footerSubtext",

    "about-heading": "aboutHeading",
    "about-p1": "aboutP1",
    "about-p2": "aboutP2",
    "about-p3": "aboutP3",
    "about-p4": "aboutP4",
    "about-p5": "aboutP5",

    "skills-heading": "skillsHeading",
    "skills-subtext": "skillsSubtext",

    "skill-1": "skill1",
    "skill-2": "skill2",
    "skill-3": "skill3",
    "skill-4": "skill4",
    "skill-5": "skill5",
    "skill-6": "skill6"
  };

  for (const id in map) {
    const el = document.getElementById(id);
    if (el) el.innerText = translations[currentLang][map[id]];
  }
}

// Apply immediately
applyTranslations();
