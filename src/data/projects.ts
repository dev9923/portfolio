import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "multi-agent-router",
    title: "Multi-Agent AI System",
    tier: "featured",
    summary:
      "A document router that accepts Email, JSON or PDF inputs and dispatches each to the agent built to handle that format.",
    highlights: [
      "Accepts Email, JSON and PDF inputs and routes each to the agent that handles that format.",
      "Multiple agents coordinate to complete a task instead of one model doing everything.",
      "Distributed decision-making demonstrated on traffic-management and resource-allocation scenarios.",
    ],
    tech: [
      "Node.js",
      "AI Integration",
      "Multi-Agent Systems",
      "PDF Processing",
      "Distributed Computing",
    ],
    icon: "bot",
    accent: "violet",
    repoUrl: "https://github.com/dev9923/multi_agent_router.git",
  },
  {
    slug: "poll-rooms",
    title: "Real-Time Poll Rooms",
    tier: "featured",
    summary:
      "A polling application with live vote updates in dedicated rooms, built on WebSockets.",
    highlights: [
      "WebSocket-backed vote updates — every client in a room sees results as they land.",
      "Room model supports separate public and private polls.",
      "Next.js front end with Tailwind; Socket.io server for the live channel.",
    ],
    tech: ["Next.js", "Socket.io", "Node.js", "Real-time", "Tailwind CSS"],
    icon: "network",
    accent: "cyan",
    repoUrl: "https://github.com/dev9923/Real-Time-Poll-Rooms.git",
  },
  {
    slug: "stock-prediction",
    title: "Stock Closing Price Prediction",
    tier: "featured",
    summary:
      "Forecasting stock closing prices from historical market data using regression and LSTM models.",
    highlights: [
      "Forecasts closing prices from historical market data using linear regression and LSTM models.",
      "Preprocessing and feature preparation over raw time-series data.",
      "Trend analysis comparing model output against actual closes.",
    ],
    tech: [
      "Python",
      "Machine Learning",
      "LSTM",
      "Linear Regression",
      "Pandas",
      "Matplotlib",
    ],
    icon: "trendingUp",
    accent: "emerald",
    repoUrl: "https://github.com/dev9923/Stock-Closing-Price-Prediction.git",
  },
  {
    slug: "number-tracker",
    title: "Mobile Number Tracker",
    tier: "secondary",
    summary:
      "A Node.js web app that traces mobile numbers through integrated APIs.",
    highlights: [],
    tech: ["Node.js", "Express.js", "API Integration", "MongoDB"],
    icon: "phone",
    accent: "indigo",
    repoUrl: "https://github.com/dev9923/mobile_number_tracker.git",
  },
  {
    slug: "stopwatch",
    title: "Stopwatch Application",
    tier: "secondary",
    summary:
      "A precision timer with millisecond accuracy and persistent state.",
    highlights: [],
    tech: ["JavaScript", "CSS3", "DOM Manipulation", "Local Storage"],
    icon: "clock",
    accent: "amber",
    repoUrl: "https://github.com/dev9923/stopwatch.git",
  },
  {
    slug: "premium-music",
    title: "Premium Music Website",
    tier: "secondary",
    summary:
      "A responsive marketing site for a music subscription service.",
    highlights: [],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: "music",
    accent: "rose",
    repoUrl: "https://github.com/dev9923/premium_music.git",
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");
