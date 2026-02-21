import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ThreeScene from "./ThreeScene";
import { personalInfo, socialLinks } from "../data/portfolio";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, hsl(var(--cyan) / 0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 60%, hsl(var(--violet) / 0.07) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Left content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex items-center gap-2 w-fit"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: "hsl(var(--cyan))", boxShadow: "0 0 10px hsl(var(--cyan))" }}
            />
            <span
              className="text-xs font-mono tracking-[0.2em] uppercase"
              style={{ color: "hsl(var(--cyan))" }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <span className="block text-foreground">{personalInfo.firstName}</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <div
              className="h-[2px] w-8 rounded-full"
              style={{ background: "hsl(var(--cyan))" }}
            />
            <p
              className="text-lg md:text-xl font-medium tracking-wide"
              style={{ color: "hsl(var(--cyan))" }}
            >
              {personalInfo.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Initial load action stagger */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.button
              onClick={() => scrollTo("projects")}
              className="btn-glow px-7 py-3 rounded-xl font-semibold text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              className="btn-outline-glow px-7 py-3 rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex items-center gap-5 pt-2"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors"
                whileHover={{ scale: 1.1, color: "hsl(var(--cyan))" }}
                style={{ "--hover-color": "hsl(var(--cyan))" } as React.CSSProperties}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex relative h-[520px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--cyan) / 0.08) 0%, transparent 70%)" }} />
          <ThreeScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ color: "hsl(var(--cyan))" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
