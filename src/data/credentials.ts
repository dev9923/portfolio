import type { Certification, Education } from "./types";

export const education: Education = {
  degree: "BTech, Computer Science",
  institution: "SRM Institute of Science and Technology",
  location: "Kattankulathur, Chennai",
  period: "2022 – 2026",
  grade: "CGPA 8.6 / 10",
  status: "completed",
};

export const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    summary:
      "Core AWS services, cloud architecture concepts, security and billing fundamentals.",
    skills: [
      "AWS Core Services",
      "Cloud Concepts",
      "Cloud Security",
      "Pricing & Billing",
    ],
    icon: "cloud",
    accent: "amber",
  },
  {
    title: "IBM SkillsBuild AI NextGen Certification 2026",
    issuer: "IBM",
    summary:
      "AI fundamentals, prompt engineering and applied AI development.",
    skills: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "AI Applications",
      "Machine Learning",
    ],
    icon: "barChart",
    accent: "emerald",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Duke University",
    summary:
      "Generative models, machine learning fundamentals and practical applications.",
    skills: [
      "Machine Learning",
      "AI Models",
      "Neural Networks",
      "Deep Learning",
    ],
    icon: "bookOpen",
    accent: "cyan",
  },
  {
    title: "Graph Theory Programming",
    issuer: "Algo University",
    summary:
      "Algorithms and data structures focused on graph theory and optimisation.",
    skills: [
      "Graph Algorithms",
      "Dynamic Programming",
      "Optimization",
      "Problem Solving",
    ],
    icon: "brain",
    accent: "violet",
  },
];
