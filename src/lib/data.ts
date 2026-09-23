export const skills: Record<string, string[]> = {
  languages: ["TypeScript", "JavaScript", "Python"],
  architecture: [
    "Distributed Systems",
    "Microservices",
    "Asynchronous Workflows",
    "System Design",
    "API Design (REST)",
  ],
  cloud: [
    "AWS Bedrock",
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
