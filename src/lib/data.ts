export const skills: Record<string, string[]> = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "Go",
    "C",
    "SQL",
    "Bash",
  ],
  architecture: [
    "System Design",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Serverless",
    "Microservices",
    "Asynchronous Workflows",
    "Multi-Cloud (AWS · GCP)",
    "Provider Abstraction",
    "API Design (REST)",
    "Engineering Documentation",
  ],
  ai: [
    "LLM Agents",
    "LangGraph",
    "Agent Evaluation",
    "RAG",
    "LLM Observability",
    "Voice Agents",
    "Multi-Agent Systems",
    "Human-in-the-Loop Design",
  ],
  cloud: [
    "AWS Bedrock",
    "AWS Transcribe",
    "AWS Lambda",
    "EC2",
    "S3",
    "RDS",
    "SQS",
    "SNS",
    "EventBridge",
    "ElastiCache",
    "IAM",
    "CloudWatch",
    "GCP Cloud Run",
    "GCP Cloud Functions",
    "GCP Vertex AI",
    "GCP Speech-to-Text (Chirp)",
    "DigitalOcean",
  ],
  databases: [
    "PostgreSQL",
    "Prisma",
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "Redis",
    "RabbitMQ",
  ],
  backend: [
    "Node.js",
    "Fastify",
    "Express.js",
    "FastAPI",
    "Flask",
    "Spring Boot",
    "Stripe API",
  ],
  security: [
    "OpenID Connect (OIDC)",
    "OAuth 2.0",
    "Single Sign-On",
    "Better Auth",
    "Passkeys (WebAuthn)",
    "Two-Factor Auth",
    "Session Management",
    "CASL",
    "Content Security Policy",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "NGINX",
    "PM2",
    "Git",
    "GitHub",
    "GitLab",
    "Linux",
    "TCP/IP",
    "VPC Networking",
    "Load Balancing",
  ],
  frontend: ["React", "Next.js", "Vite", "esbuild"],
  aiTools: [
    "Claude Code",
    "Codex",
    "OpenCode",
    "Cursor",
    "Kiro",
    "GitHub Copilot",
    "n8n",
    "Hermes",
  ],
};

// Languages I am learning; shown apart from the production stack.
export const exploringLanguages = ["Rust"];

export const certifications: { org: string; courses: string[] }[] = [
  {
    org: "AWS Skill Builder",
    courses: [
      "AWS Agentic AI Demonstrated",
      "AWS Serverless Demonstrated",
      "Architecting on AWS",
    ],
  },
  {
    org: "Google Cloud Skills Boost",
    courses: ["Designing Distributed Systems"],
  },
  {
    org: "DeepLearning.AI",
    courses: ["Neural Networks and Deep Learning"],
  },
];

// Personal projects. The text for each key is in the locale files.
export const projects: {
  key: string;
  name: string;
  url: string;
  // The project website. Omit it when the project has none.
  site?: string;
  stack: string[];
}[] = [
  {
    key: "archsim",
    name: "ArchSim",
    url: "https://github.com/aesbetancourt/archsim",
    site: "https://aesbetancourt.dev/archsim/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Excalidraw", "Tiptap"],
  },
  {
    key: "blueprints",
    name: "Blueprints",
    url: "https://github.com/aesbetancourt/blueprints",
    site: "https://aesbetancourt.dev/blueprints/",
    stack: ["Tauri v2", "Rust", "React 19", "TypeScript", "TipTap", "Zustand"],
  },
];

export const socialLinks = {
  github: "https://github.com/aesbetancourt",
  linkedin: "https://www.linkedin.com/in/aesbetancourt/",
};

export const githubHandle = "@aesbetancourt";
