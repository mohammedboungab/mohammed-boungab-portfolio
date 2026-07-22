import type { SocialLink } from "@/types";

export const profile = {
  name: "Mohammed Boungab",
  role: "Data, Intelligence Artificielle et Objets Connectés",
  tagline:
    "Je transforme les données en solutions concrètes grâce au machine learning, à l’analyse de données et au développement Python.",
  search:
    "Recherche une alternance d’un an à partir de septembre 2026 — rythme 2 semaines école / 2 semaines entreprise.",
  email: "its.boungab.mohammed@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-boungab",
  githubUrl: "https://github.com/mohammedboungab",
  profileImage: "/images/profile/mohammed-boungab-full.webp",
  profileImageAlt: "Portrait professionnel de Mohammed Boungab",
  profileImageAvailable: true,
  cvUrl: "/cv/Mohammed_Boungab_CV.pdf",
  cvDownloadUrl: "/cv/download",
  cvDownloadName: "Mohammed_Boungab_CV_Alternance_2026.pdf",
  cvAvailable: true,
  location: "Poitiers, France",
  mobility: "France entière",
  availability: "Alternance d’un an à partir de septembre 2026",
  rhythm: "2 semaines à l’école / 2 semaines en entreprise",
  languages: "Français, arabe et anglais niveau B2",
  university: "Université de Poitiers",
  currentEducation:
    "Master Traitement du Signal et des Images, parcours Objets Connectés — Université de Poitiers",
  about:
    "Issu d’un parcours initial en physique, je me suis progressivement spécialisé en intelligence artificielle et en ingénierie des données. Je poursuis actuellement un Master en Traitement du Signal et des Images, parcours Objets Connectés, à l’Université de Poitiers. Mon profil combine analyse de données, machine learning, développement Python, visualisation, automatisation et compréhension des systèmes intelligents.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: profile.linkedinUrl,
    ariaLabel: "Voir le profil LinkedIn de Mohammed Boungab",
  },
  {
    label: "GitHub",
    url: profile.githubUrl,
    ariaLabel: "Voir le profil GitHub de Mohammed Boungab",
  },
];
