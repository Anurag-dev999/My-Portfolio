import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import { primaryLanguageStack, domainExpertise } from "../data/portfolio";

function RadialSkill({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dash = (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="5"
          />
          <motion.circle
            cx="35"
            cy="35"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference - dash } : {}}
            transition={{ duration: 1.4, delay: index * 0.1 + 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--cyan))" />
              <stop offset="100%" stopColor="hsl(var(--violet))" />
            </linearGradient>
          </defs>
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-xs font-bold font-mono"
          style={{ color: "hsl(var(--cyan))" }}
        >
          {level}
        </span>
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight">{name}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan) / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          label="What I know"
          title="Skills & Tech"
          subtitle="A deep toolkit built over years of crafting digital products."
        />

        {/* Tech Stack Orbit */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6">
            Primary Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {primaryLanguageStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="glass-card flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
              >
                <span style={{ fontSize: "1.1rem" }}>{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {domainExpertise.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIndex * 0.15, ease: "easeOut" }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-6"
            >
              <h3 className="font-bold text-lg text-foreground">{cat.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {cat.items.slice(0, 3).map((skill, i) => (
                  <RadialSkill key={skill.name} {...skill} index={i + catIndex * 5} />
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {cat.items.map((skill, i) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="font-mono" style={{ color: "hsl(var(--cyan))" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: catIndex * 0.2 + i * 0.1 + 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
