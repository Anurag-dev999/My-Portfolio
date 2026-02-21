import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import { primaryLanguageStack, domainExpertise } from "../data/portfolio";

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

        {/* Tech Stack */}
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
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
            >
              <h3 className="font-bold text-lg text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.12 + i * 0.06 + 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-foreground cursor-default"
                    style={{
                      background: "hsl(var(--cyan) / 0.08)",
                      border: "1px solid hsl(var(--cyan) / 0.15)",
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
