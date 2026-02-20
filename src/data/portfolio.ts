import { Github, Linkedin, Twitter, Mail, Code2, Palette, Zap, Globe } from "lucide-react";

export const personalInfo = {
    firstName: "Anurag",

    fullName: "Anurag",
    role: "DevOps Engineer",
    tagline: "Focused on automation, cloud infrastructure, CI/CD pipelines, and scalable application development and deployment.",

    bio: [
        "I'm a DevOps-focused developer working on automation, containerized deployments, and modern web infrastructure.",
        "I work with Docker, CI/CD pipelines, cloud services, and JavaScript-based application stacks.",
        "Currently exploring scalable deployment workflows, infrastructure-as-code practices, and performance optimization."
    ],
    location: "India • Remote-friendly",
    contactHeading: "Let's build something great",
    contactText: "I'm currently available for freelance work and full-time positions. If you have a project that you want to get started or think you need my help with something, then get in touch.",
    footerTech: "React · Three.js · Framer Motion · TypeScript"
};

export const socialLinks = [
    { icon: Github, href: "https://github.com/anurag", label: "GitHub", handle: "@anurag" },
    { icon: Linkedin, href: "https://linkedin.com/in/anurag", label: "LinkedIn", handle: "Anurag" },
    { icon: Twitter, href: "https://twitter.com/anurag", label: "Twitter", handle: "@anurag" },
    { icon: Mail, href: "mailto:anurag@example.com", label: "Email", handle: "anurag@example.com" },
];

export const competenciesData = [
    {
        icon: Code2,
        title: "Web Development",
        desc: "Crafting fast, scalable web applications with modern frameworks and best practices.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Designing intuitive, beautiful interfaces that delight users and drive engagement.",
    },
    {
        icon: Zap,
        title: "Performance",
        desc: "Optimizing for speed, accessibility, and a flawless experience across all devices.",
    },
    {
        icon: Globe,
        title: "Full-Stack",
        desc: "End-to-end product development from database architecture to pixel-perfect UI.",
    },
];

export const skillsData = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "Three.js / WebGL", level: 75 },
    { name: "PostgreSQL / Supabase", level: 82 },
];

export const careerTimeline = [
    {
        year: "2023–Present",
        role: "Senior Frontend Engineer",
        company: "FinTech Solutions",
        desc: "Architecting a high-performance React scalable dashboard. Improved initial load times by 40% through code splitting and tree shaking.",
    },
    {
        year: "2021–2023",
        role: "Full-Stack Developer",
        company: "E-Commerce StartX",
        desc: "Developed secure Node.js microservices and implemented a comprehensive component library using Storybook.",
    },
    {
        year: "2019–2021",
        role: "Frontend Developer",
        company: "Creative Digital",
        desc: "Migrated legacy jQuery applications to modern React ecosystems, establishing CI/CD pipelines.",
    },
    {
        year: "2018–2019",
        role: "Web Developer",
        company: "Freelance",
        desc: "Delivered responsive web applications for various SMBs focusing on accessibility and performance.",
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
    { name: "React", icon: "⚛️", color: "hsl(188 100% 52%)" },
    { name: "TypeScript", icon: "𝙏𝙎", color: "hsl(210 100% 56%)" },
    { name: "Node.js", icon: "⬡", color: "hsl(120 60% 50%)" },
    { name: "Next.js", icon: "▲", color: "hsl(0 0% 90%)" },
    { name: "Three.js", icon: "◈", color: "hsl(188 100% 52%)" },
    { name: "PostgreSQL", icon: "🐘", color: "hsl(210 60% 60%)" },
    { name: "Docker", icon: "🐳", color: "hsl(205 100% 55%)" },
    { name: "AWS", icon: "☁", color: "hsl(35 90% 60%)" },
    { name: "Figma", icon: "✦", color: "hsl(263 60% 65%)" },
    { name: "GraphQL", icon: "◈", color: "hsl(320 60% 60%)" },
    { name: "Redis", icon: "⬡", color: "hsl(0 80% 55%)" },
    { name: "Tailwind", icon: "〜", color: "hsl(188 80% 50%)" },
];

export const domainExpertise = [
    {
        title: "Frontend Architecture",
        items: [
            { name: "React Ecosystem", level: 95 },
            { name: "TypeScript", level: 92 },
            { name: "State Management", level: 90 },
            { name: "WebGL / Three.js", level: 78 },
            { name: "Performance Eval", level: 85 },
        ],
    },
    {
        title: "Backend & Systems",
        items: [
            { name: "Node.js (Express/Nest)", level: 88 },
            { name: "API Design (REST/GQL)", level: 85 },
            { name: "Relational DBs (PG)", level: 82 },
            { name: "Caching Layers", level: 75 },
            { name: "CI/CD Pipelines", level: 72 },
        ],
    },
    {
        title: "Product Design",
        items: [
            { name: "System Design", level: 88 },
            { name: "Figma", level: 90 },
            { name: "Wireframing", level: 87 },
            { name: "User Research", level: 84 },
            { name: "Motion Prototyping", level: 78 },
        ],
    },
];
