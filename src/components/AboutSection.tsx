import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData as skills, careerTimeline, competenciesData as coreCompetencies, personalInfo } from "../data/portfolio";

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-3 mb-14"
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: "hsl(var(--cyan))" }}>
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-xl">{subtitle}</p>}
      <div className="section-line mt-1" />
    </motion.div>
  );
}

export { SectionHeader };

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--violet) / 0.05) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          label="Who I am"
          title="About Me"
          subtitle="DevOps-focused engineer who enjoys building reliable infrastructure and supporting full-stack development."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + Services */}
          <div className="flex flex-col gap-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 text-muted-foreground leading-relaxed"
            >
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Competency grid */}
            <div className="grid grid-cols-2 gap-4">
              {coreCompetencies.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="glass-card rounded-xl p-5 flex flex-col gap-3 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "hsl(var(--cyan) / 0.12)", border: "1px solid hsl(var(--cyan) / 0.2)" }}
                  >
                    <service.icon size={18} style={{ color: "hsl(var(--cyan))" }} />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Skills + Timeline */}
          <div className="flex flex-col gap-10">
            {/* Skills */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-foreground mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
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
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-foreground mb-4">Experience</h3>
              <div className="relative pl-6">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[1px]"
                  style={{ background: "linear-gradient(to bottom, hsl(var(--cyan)), hsl(var(--violet)), transparent)" }}
                />
                {careerTimeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                    className="relative mb-8 last:mb-0"
                  >
                    <div
                      className="absolute -left-[1.35rem] top-1 w-3 h-3 rounded-full border-2"
                      style={{
                        background: i === 0 ? "hsl(var(--cyan))" : "hsl(var(--background))",
                        borderColor: "hsl(var(--cyan))",
                        boxShadow: i === 0 ? "0 0 8px hsl(var(--cyan))" : "none",
                      }}
                    />
                    <span
                      className="text-xs font-mono tracking-wide"
                      style={{ color: "hsl(var(--cyan))" }}
                    >
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1">{item.role}</h4>
                    <p className="text-xs text-muted-foreground font-mono mb-1">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
