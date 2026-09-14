export const site = {
  name: "Devansh Bansal",
  role: "Software Engineer",
  company: "Paytm Payment Services Limited",
  companyShort: "Paytm Payment Services",
  location: "Noida, India",
  url: "https://devanshbansal.vercel.app",
  email: "devanshbansal500@gmail.com",
  resumeUrl: "/Devansh-Bansal.pdf",
  eyebrow: "Payments infrastructure · Noida, India",
  tagline:
    "I build and ship the Java and Spring Boot services behind payment infrastructure — and the CI/CD and observability that keep them running.",
  description:
    "Devansh Bansal — Software Engineer at Paytm Payment Services. Java 21, Spring Boot and Node.js backends; CI/CD with Jenkins and Argo CD.",
  socials: {
    github: "https://github.com/dev9923",
    linkedin: "https://www.linkedin.com/in/devansh-bansal-329ab7b1/",
  },
} as const;

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
] as const;

export const statusLine = [
  "Software Engineer @ Paytm Payment Services",
  "BTech CSE (Core), SRMIST — CGPA 8.6/10",
  "Java 21 · Spring Boot · React · Node.js",
] as const;

export const proofStrip = [
  { label: "Now", value: "Software Engineer, Paytm Payment Services" },
  { label: "Before", value: "SDE Intern, UIDAI — Aadhaar" },
  { label: "Education", value: "BTech CSE (Core), SRMIST · 8.6/10" },
  { label: "Core stack", value: "Java 21 · Spring Boot · React · Node.js" },
] as const;

export const howIWork = [
  "Service boundaries before frameworks.",
  "If it isn't on a dashboard, it isn't in production.",
  "Optimise the measured path, not the suspected one.",
] as const;

export const aboutParagraphs = [
  "I'm a Software Engineer at Paytm Payment Services Limited in Noida, working on the backend that moves money. Day to day that means Java 21 and Spring Boot microservices, the REST APIs on top of them, and the Jenkins and Argo CD pipelines that get them to production.",
  "I joined Paytm as an SDE Intern in March 2026 and moved into the full-time Software Engineer role in September 2026. Before that I spent five months at UIDAI in New Delhi on the Aadhaar Verification Portal — React front-ends, Node.js and MongoDB APIs, and authentication flows that had to hold up under a government security audit.",
  "I hold a BTech in Computer Science and Engineering (Core) from SRM Institute of Science and Technology, Kattankulathur, completed in 2026 with a CGPA of 8.6/10.",
] as const;
