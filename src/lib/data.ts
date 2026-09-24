export const skills: Record<string, string[]> = {
  languages: ["TypeScript", "JavaScript", "Python"],
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
  ],
  cloud: [
    "AWS Bedrock",
    "AWS Transcribe",
    "AWS Lambda",
    "EC2",
    "S3",
    "RDS",
    "SQS",
    "EventBridge",
    "ElastiCache",
    "IAM",
    "CloudWatch",
    "GCP Cloud Run",
    "GCP Cloud Functions",
    "GCP Speech-to-Text (Chirp)",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ"],
  backend: ["Node.js", "Fastify", "Express.js", "FastAPI", "Flask"],
  devops: [
    "Docker",
    "CI/CD",
    "NGINX",
    "PM2",
    "Git",
    "GitHub",
    "GitLab",
    "Linux",
  ],
  frontend: ["React", "Next.js", "Vite", "esbuild"],
  aiTools: [
    "Claude Code",
    "Codex",
    "OpenCode",
    "Cursor",
    "GitHub Copilot",
    "n8n",
    "Hermes",
  ],
};

export const certifications: { org: string; courses: string[] }[] = [
  {
    org: "AWS Skill Builder",
    courses: ["Architecting on AWS"],
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

export const socialLinks = {
  github: "https://github.com/aesbetancourt",
  linkedin: "https://www.linkedin.com/in/aesbetancourt/",
};

export const githubHandle = "@aesbetancourt";
