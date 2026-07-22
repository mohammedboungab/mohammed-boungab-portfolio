import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & analyse",
    description: "Explorer, préparer et rendre les données lisibles.",
    skills: ["Python", "pandas", "NumPy", "SQL", "Analyse exploratoire", "Préparation des données", "Visualisation", "Statistiques"],
  },
  {
    title: "Machine Learning",
    description: "Construire et évaluer des modèles adaptés au problème.",
    skills: ["scikit-learn", "Classification", "Régression", "Évaluation de modèles", "Feature engineering", "Données déséquilibrées", "SMOTE", "Sélection de métriques"],
  },
  {
    title: "Visualisation & applications",
    description: "Transformer les résultats en outils de décision.",
    skills: ["Streamlit", "Matplotlib", "Seaborn", "Plotly", "Dashboards", "Reporting"],
  },
  {
    title: "Outils",
    description: "Développer, versionner et exécuter des projets data.",
    skills: ["Git", "GitHub", "Docker", "Linux", "Jupyter Notebook", "VS Code", "Bases de données", "API"],
  },
  {
    title: "Systèmes & objets connectés",
    description: "Un profil hybride, de la donnée jusqu’au système embarqué.",
    skills: ["C", "C++", "STM32", "Zephyr RTOS", "BLE", "Systèmes embarqués", "Objets connectés"],
    secondary: true,
  },
];
