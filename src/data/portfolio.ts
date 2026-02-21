import { Github, Linkedin, Mail, Code2, Server, Zap, Globe } from "lucide-react";

export const personalInfo = {
    firstName: "Anurag",

    fullName: "Anurag",
    role: "DevOps Engineer + Full-Stack Developer",
    tagline: "DevOps-focused engineer building reliable, secure, and scalable deployment workflows while supporting full-stack web development.",

    bio: [
        "I help teams and clients build, deploy, and maintain reliable applications using modern DevOps practices and cloud infrastructure.",
        "My work revolves around CI/CD pipelines, containerized deployments, infrastructure automation, and cloud platforms like AWS, GCP, and Azure.",
        "Alongside DevOps, I support full-stack web development using Node.js, Python, Next.js, and related technologies to deliver end-to-end solutions."
    ],
    location: "Punjab, India • Remote-friendly",
    contactHeading: "Let's build something great",
    contactText: "I'm currently open to freelance work and full-time positions. If you have a project you'd like to get started or need help with deployment, infrastructure, or development — feel free to reach out.",
    footerTech: "React · Framer Motion · TypeScript"
};

export const socialLinks = [
    { icon: Github, href: "https://github.com/Anurag-dev999", label: "GitHub", handle: "@Anurag-dev999" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anurag-welcomtoprofile/", label: "LinkedIn", handle: "Anurag" },
    { icon: Mail, href: "mailto:dev.anurag999@gmail.com", label: "Email", handle: "dev.anurag999@gmail.com" },
];

export const competenciesData = [
    {
        icon: Server,
        title: "DevOps & Cloud",
        desc: "Setting up CI/CD pipelines, containerized deployments, and cloud infrastructure for reliable application delivery.",
    },
    {
        icon: Code2,
        title: "Web Development",
        desc: "Building web applications with modern frameworks, focusing on clean code and practical functionality.",
    },
    {
        icon: Zap,
        title: "Automation",
        desc: "Automating build, test, and deployment workflows to reduce manual effort and improve consistency.",
    },
    {
        icon: Globe,
        title: "Full-Stack Support",
        desc: "End-to-end development support from backend services and databases to frontend interfaces.",
    },
];

export const skillsData = [
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "GitHub Actions" },
    { name: "Jenkins" },
    { name: "AWS" },
    { name: "GCP" },
    { name: "Azure" },
    { name: "Python" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "HTML / CSS" },
    { name: "Tailwind CSS" },
    { name: "Oracle SQL" },
];

export const careerTimeline = [
    {
        year: "2025",
        role: "Cloud Computing Intern",
        company: "Excellence Technology, Mohali",
        desc: "Worked on cloud computing concepts and deployment practices. Gained exposure to infrastructure setup and DevOps workflows during a ~45 day internship.",
    },
];


export const portfolioProjects = [
    {
        title: "NexusAI Dashboard",
        category: "SaaS",
        desc: "Built a high-throughput analytics dashboard handling 10k+ events/sec. Implemented WebSocket streaming and virtualized lists for smooth real-time visualization.",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        demo: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Ethereal Commerce",
        category: "E-commerce",
        desc: "Migrated a monolithic storefront to a headless Next.js architecture. Integrated Stripe and improved Web Vitals (LCP) by 2.4 seconds.",
        tech: ["Next.js", "Stripe", "Tailwind", "Zod"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        demo: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Stormcraft Game Engine",
        category: "Web App",
        desc: "Developed a custom 2D WebGL rendering engine for a browser strategy game. Optimized draw calls to maintain 60FPS on mobile clients.",
        tech: ["TypeScript", "WebGL", "Canvas API", "Express"],
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        demo: "#",
        github: "#",
        featured: false,
    },
    {
        title: "Bloom UI Library",
        category: "Design System",
        desc: "Created and maintained an accessible, internal React component library used across 12 unique enterprise applications.",
        tech: ["React", "Storybook", "TypeScript", "Radix UI", "Jest"],
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
        demo: "#",
        github: "#",
        featured: false,
    },
    {
        title: "CloudSync API Service",
        category: "Backend",
        desc: "Designed a distributed GraphQL caching layer using Redis, reducing average query latency by 300ms for heavy analytical workloads.",
        tech: ["Node.js", "GraphQL", "Redis", "Docker", "AWS ECS"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        demo: "#",
        github: "#",
        featured: false,
    },
    {
        title: "Lumina Studio",
        category: "Design",
        desc: "Crafted a highly interactive agency portfolio focusing on smooth scroll-jacking alternatives and complex timeline animations.",
        tech: ["React", "Three.js", "Framer Motion", "GSAP"],
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        demo: "#",
        github: "#",
        featured: false,
    },
];

export const projectCategories = ["All", "SaaS", "E-commerce", "Web App", "Design System", "Backend", "Design"];

export const primaryLanguageStack = [
    { name: "Docker", icon: "🐳", color: "hsl(205 100% 55%)" },
    { name: "Kubernetes", icon: "☸", color: "hsl(210 80% 55%)" },
    { name: "GitHub Actions", icon: "⚙", color: "hsl(210 10% 70%)" },
    { name: "Jenkins", icon: "🔧", color: "hsl(0 70% 50%)" },
    { name: "AWS", icon: "☁", color: "hsl(35 90% 60%)" },
    { name: "GCP", icon: "☁", color: "hsl(210 80% 55%)" },
    { name: "Azure", icon: "☁", color: "hsl(205 100% 50%)" },
    { name: "Python", icon: "🐍", color: "hsl(210 60% 55%)" },
    { name: "Node.js", icon: "⬡", color: "hsl(120 60% 50%)" },
    { name: "Next.js", icon: "▲", color: "hsl(0 0% 90%)" },
    { name: "Tailwind CSS", icon: "〜", color: "hsl(188 80% 50%)" },
    { name: "Oracle SQL", icon: "🗄", color: "hsl(0 80% 50%)" },
];

export const domainExpertise = [
    {
        title: "DevOps & Cloud",
        items: [
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "CI/CD Pipelines" },
            { name: "GitHub Actions" },
            { name: "Jenkins" },
            { name: "AWS / GCP / Azure" },
            { name: "Containerization" },
        ],
    },
    {
        title: "Development",
        items: [
            { name: "Python" },
            { name: "Node.js" },
            { name: "HTML / CSS" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "Oracle SQL" },
        ],
    },
];
