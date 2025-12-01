import { Project, Skill } from "./types";

export const DEV_NAME = "Ibrahim Barry";
export const DEV_ROLE = "Développeur Web Full Stack junior";
export const DEV_LOCATION = "Guinée";
export const DEV_EMAIL = "ib362392@gmail.com";
export const DEV_PHONE = "+224 623 93 63 13";

export const SOCIAL_LINKS = {
  github: "https://github.com/kushtati",
  email: "mailto:ib362392@gmail.com"
};

export const SKILLS: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Vue.js", level: 75, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Node.js", level: 5, category: "Backend" },
  { name: "Python", level: 10, category: "Backend" },
  { name: "PHP", level: 5, category: "Backend" },
  { name: "MongoDB", level: 5, category: "Backend" },
  { name: "Git/GitHub", level: 90, category: "Outils" },
  { name: "Docker", level: 70, category: "Outils" },
  { name: "VS Code", level: 95, category: "Outils" },
  { name: "Figma", level: 75, category: "Outils" }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Kushtati Immo",
    description: "Plateforme complète de gestion immobilière pour la Guinée avec dashboard propriétaires/locataires, génération de rapports PDF, chatbot IA et 6 méthodes de paiement.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google AI"],
    repoUrl: "https://github.com/kushtati/kushtati-immo",
    demoUrl: "https://kushtati-immo-lnvrrcgei-ibrahims-projects-5762209f.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "2",
    title: "Portfolio Personnel",
    description: "Portfolio moderne et responsive avec animations fluides, scroll reveal bidirectionnel et design sunset gradient optimisé pour les performances.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/kushtati/porfolio",
    demoUrl: "https://portfolio-tau-liart-20.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "3",
    title: "Sentinelle RH",
    description: "Application AI Studio pour la gestion des ressources humaines avec intelligence artificielle, tableaux de bord interactifs et analytics avancés.",
    techStack: ["React", "Google AI", "Recharts", "Lucide React"],
    repoUrl: "https://github.com/kushtati",
    demoUrl: "https://sentinelle-lsuqzu2dy-ibrahims-projects-5762209f.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80"
  }
];
