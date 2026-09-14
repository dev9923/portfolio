export type IconName =
  | "code"
  | "server"
  | "database"
  | "gitBranch"
  | "cpu"
  | "bot"
  | "messageSquare"
  | "cloud"
  | "trendingUp"
  | "music"
  | "phone"
  | "clock"
  | "network"
  | "award"
  | "bookOpen"
  | "brain"
  | "barChart"
  | "graduationCap";

export type AccentKey =
  | "indigo"
  | "cyan"
  | "violet"
  | "emerald"
  | "amber"
  | "rose";

export interface Role {
  title: string;
  periodLabel: string;
  start: string;
  end: string | null;
  current?: boolean;
  promotedFrom?: string;
  highlights: string[];
}

export interface SubProject {
  name: string;
  description: string;
  technologies: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  location: string;
  tenureLabel: string;
  summary: string;
  stack: string[];
  roles: Role[];
  projects: SubProject[];
  accent: AccentKey;
}

export interface Project {
  slug: string;
  title: string;
  tier: "featured" | "secondary";
  summary: string;
  highlights: string[];
  tech: string[];
  icon: IconName;
  accent: AccentKey;
  repoUrl: string;
  liveUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: IconName;
  accent: AccentKey;
  span: 2 | 3 | 4 | 6;
  skills: string[];
}

export interface LearningTrack {
  topic: string;
  rationale: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  status: "completed" | "in-progress";
}

export interface Certification {
  title: string;
  issuer: string;
  summary: string;
  skills: string[];
  icon: IconName;
  accent: AccentKey;
  credentialUrl?: string;
}
