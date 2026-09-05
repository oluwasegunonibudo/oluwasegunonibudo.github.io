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
    homeProjectText: "Images from my professional engagements, including GIS analysis, fieldwork, training sessions, workshops, conference presentations, and project contributions across OYOGIS, KADGIS, NASRDA, Onidex Geo‑Spatial Solutions Akure, and the China University of Mining and Technology (CUMT). This showcase highlights my practical involvement in geospatial science—from capacity‑building programs and geospatial intelligence seminars to applied projects in environmental management, groundwater exploration, digital land administration, and land‑use/land‑cover analysis.",

    footerHeading: "Let's Connect for Research or Professional Opportunities",
    footerSubtext: "Open to collaborations, geospatial data analysis projects, or full-time roles in GIS and Remote Sensing."
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
    homeP1: "Ich bin ein Geodatenanalyst und angewandter Geologe mit über sieben Jahren Erfahrung in der Integration von GIS, Fernerkundung und Geowissenschaften zur Unterstützung des Umweltmanagements, der Grundwassererkundung, der Landverwaltung und der nachhaltigen Entwicklung.",
    homeP2: "Ich habe zu wichtigen GIS- und Landverwaltungsprojekten bei OYOGIS, KADGIS und NASRDA beigetragen, preisgekrönte Forschung zur Grundwasserprognose und Lineamentkartierung durchgeführt und mehrere begutachtete Studien zu geospatialem Modellieren, DEM-basierten Lineamenten und Umweltanalysen veröffentlicht.",
    homeP3: "Ich schule Fachkräfte, Studierende und Behördenmitarbeiter in GIS und Fernerkundung und leite geospatial-intelligence Seminare und Capacity-Building-Programme in Nigeria und China. Dieses Portfolio zeigt meine Forschung, Projekte, Karten, Lehrtätigkeiten und beruflichen Beiträge.",

    homeProjectTitle: "Berufliche Aktivitäten & Projektübersicht",
    homeProjectText: "Bilder aus meinen beruflichen Tätigkeiten, einschließlich GIS-Analyse, Feldarbeit, Schulungen, Workshops, Konferenzpräsentationen und Projektbeiträgen bei OYOGIS, KADGIS, NASRDA, Onidex Geo‑Spatial Solutions Akure und der China University of Mining and Technology (CUMT). Diese Übersicht zeigt mein praktisches Engagement in der Geodatenwissenschaft – von Capacity-Building-Programmen und geospatial-intelligence Seminaren bis hin zu angewandten Projekten im Umweltmanagement, der Grundwassererkundung, der digitalen Landverwaltung und der Analyse von Landnutzungsänderungen.",

    footerHeading: "Kontakt für Forschungs- oder berufliche Möglichkeiten",
    footerSubtext: "Offen für Zusammenarbeit, GIS-Datenanalyseprojekte oder Vollzeitstellen im Bereich GIS und Fernerkundung."
  }
};

let currentLang = "en";

document.getElementById("lang-switch").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  applyTranslations();
});

function applyTranslations() {
  document.getElementById("nav-home").innerText = translations[currentLang].navHome;
  document.getElementById("nav-about").innerText = translations[currentLang].navAbout;
  document.getElementById("nav-work").innerText = translations[currentLang].navWork;
  document.getElementById("nav-research").innerText = translations[currentLang].navResearch;
  document.getElementById("nav-workshops").innerText = translations[currentLang].navWorkshops;
  document.getElementById("nav-internship").innerText = translations[currentLang].navInternship;
  document.getElementById("nav-projects").innerText = translations[currentLang].navProjects;
  document.getElementById("nav-social").innerText = translations[currentLang].navSocial;

  document.getElementById("home-title").innerText = translations[currentLang].homeTitle;
  document.getElementById("home-p1").innerText = translations[currentLang].homeP1;
  document.getElementById("home-p2").innerText = translations[currentLang].homeP2;
  document.getElementById("home-p3").innerText = translations[currentLang].homeP3;

  document.getElementById("home-project-title").innerText = translations[currentLang].homeProjectTitle;
  document.getElementById("home-project-text").innerText = translations[currentLang].homeProjectText;

  document.getElementById("footer-heading").innerText = translations[currentLang].footerHeading;
  document.getElementById("footer-subtext").innerText = translations[currentLang].footerSubtext;
}
