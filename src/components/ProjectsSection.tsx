import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { SectionHeader } from "./AboutSection";
import { portfolioProjects, projectCategories as categories } from "../data/portfolio";

function ProjectCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="glass-card rounded-2xl overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, hsl(var(--card)) 0%, transparent 80%)",
            opacity: hovered ? 1 : 0.4,
          }}
        />

        {/* Overlay actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
              style={{ background: "hsl(var(--background) / 0.6)", backdropFilter: "blur(4px)" }}
            >
              <motion.a
                href={project.demo}
                className="flex items-center gap-2 btn-glow px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Eye size={15} /> Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                className="flex items-center gap-2 btn-outline-glow px-4 py-2 rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                <Github size={15} /> Code
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="tech-tag px-2 py-1 rounded-md">{project.category}</span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-mono px-2 py-1 rounded-md"
              style={{
                background: "hsl(var(--cyan) / 0.2)",
                border: "1px solid hsl(var(--cyan) / 0.4)",
                color: "hsl(var(--cyan))",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg text-foreground leading-tight">{project.title}</h3>
          <div className="flex gap-2 flex-shrink-0 pt-0.5">
            <a href={project.github} className="text-muted-foreground hover:text-cyan-DEFAULT transition-colors" target="_blank" rel="noreferrer">
              <Github size={17} />
            </a>
            <a href={project.demo} className="text-muted-foreground hover:text-cyan-DEFAULT transition-colors" target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag px-2 py-0.5 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "hsl(var(--card) / 0.3)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 20%, hsl(var(--cyan) / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          label="My work"
          title="Projects"
          subtitle="A selection of things I've built — from SaaS platforms to design systems."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeFilter === cat
                    ? "hsl(var(--cyan))"
                    : "hsl(var(--muted))",
                color:
                  activeFilter === cat
                    ? "hsl(var(--primary-foreground))"
                    : "hsl(var(--muted-foreground))",
                boxShadow: activeFilter === cat ? "var(--glow-cyan)" : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
