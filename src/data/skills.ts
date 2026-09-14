import type { LearningTrack, SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    accent: "emerald",
    span: 4,
    skills: [
      "Java 21",
      "Spring Boot",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "Maven",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    accent: "cyan",
    span: 2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    accent: "violet",
    span: 3,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Monitoring",
    icon: "gitBranch",
    accent: "amber",
    span: 3,
    skills: ["Jenkins", "Grafana", "Kibana", "Argo CD"],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "cpu",
    accent: "rose",
    span: 6,
    skills: ["Java", "Python", "C", "C++"],
  },
];

export const learningTracks: LearningTrack[] = [
  {
    topic: "System design",
    rationale:
      "Service decomposition, consistency and failure modes for payment flows.",
  },
  {
    topic: "Spring Boot & microservice patterns",
    rationale: "Transactions, resilience, service-to-service contracts.",
  },
  {
    topic: "DevOps & CI/CD",
    rationale:
      "Deployment strategies on top of the Jenkins and Argo CD setup I work in.",
  },
];

export const allSkills = [...new Set(skillGroups.flatMap((g) => g.skills))];
