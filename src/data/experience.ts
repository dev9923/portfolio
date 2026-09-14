import type { CompanyExperience } from "./types";

export const experience: CompanyExperience[] = [
  {
    id: "paytm",
    company: "Paytm Payment Services Limited",
    location: "Noida, India",
    tenureLabel: "Mar 2026 – Present",
    summary:
      "Backend and platform work on the payment stack — services, APIs, and the pipelines that deploy them.",
    stack: ["Java 21", "Spring Boot", "Maven", "Jenkins", "Argo CD", "Grafana"],
    accent: "cyan",
    roles: [
      {
        title: "Software Engineer",
        periodLabel: "Sep 2026 – Present",
        start: "2026-09",
        end: null,
        current: true,
        promotedFrom: "SDE Intern",
        highlights: [
          "Build and maintain backend microservices in Java 21, Spring Boot and Maven for high-traffic payment infrastructure.",
          "Design and integrate RESTful APIs for secure, scalable payment-platform features.",
          "Extend CI/CD with Jenkins and Argo CD to automate build, test and deployment across services.",
          "Maintain Grafana dashboards and alerting for production service health.",
        ],
      },
      {
        title: "SDE Intern",
        periodLabel: "Mar 2026 – Aug 2026",
        start: "2026-03",
        end: "2026-08",
        highlights: [
          "Shipped features into production microservices on the payment platform alongside the core backend team.",
          "Wrote and integrated REST endpoints against existing Spring Boot services.",
          "Automated build and deployment steps within the Jenkins and Argo CD pipelines.",
        ],
      },
    ],
    projects: [
      {
        name: "Payment Platform Microservices",
        description:
          "Core backend services on Paytm's payment platform, built for high availability and low latency.",
        technologies: [
          "Java 21",
          "Spring Boot",
          "Maven",
          "REST APIs",
          "Microservices",
        ],
      },
      {
        name: "CI/CD Pipeline Automation",
        description:
          "Automated build, test and deployment workflows enabling rapid, reliable releases across payment services.",
        technologies: ["Jenkins", "Argo CD", "Docker", "Grafana"],
      },
    ],
  },
  {
    id: "uidai",
    company: "Unique Identification Authority of India (UIDAI)",
    location: "New Delhi, India",
    tenureLabel: "Jun 2025 – Oct 2025",
    summary:
      "Front-end and API work on the Aadhaar Verification Portal, under government security and audit requirements.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    accent: "amber",
    roles: [
      {
        title: "SDE Intern",
        periodLabel: "Jun 2025 – Oct 2025",
        start: "2025-06",
        end: "2025-10",
        highlights: [
          "Built responsive React UI components and production-grade Node.js/MongoDB REST APIs for the Aadhaar Verification Portal.",
          "Hardened authentication flows and centralised input validation to align with government security and audit requirements.",
          "Introduced caching and connection pooling to cut API latency under peak load.",
        ],
      },
    ],
    projects: [
      {
        name: "Aadhaar Document Checker",
        description:
          "An official web application guiding residents through Aadhaar enrolment and update processes, with a document checker wizard, interactive checklists and a 40+ document type advisory system.",
        technologies: ["React", "Vite", "Tailwind CSS", "Redux", "Radix UI"],
      },
      {
        name: "ASK Feedback System",
        description:
          "A feedback collection system for Aadhaar Seva Kendras, monitoring service quality across verified operational centres.",
        technologies: ["Node.js", "Express", "MongoDB", "React"],
      },
      {
        name: "Aadhaar Verification Portal",
        description:
          "Core backend services for the Aadhaar ecosystem, optimising data processing and availability for identity services.",
        technologies: ["Node.js", "MongoDB", "REST APIs", "Authentication"],
      },
    ],
  },
];
