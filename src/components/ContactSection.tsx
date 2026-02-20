import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, MessageSquare } from "lucide-react";
import { SectionHeader } from "./AboutSection";
import { socialLinks as socials, personalInfo } from "../data/portfolio";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "hsl(var(--card) / 0.2)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, hsl(var(--violet) / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          label="Get in touch"
          title="Contact Me"
          subtitle="Have a project in mind? Let's talk. I'm always open to new opportunities."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(var(--cyan) / 0.12)",
                  border: "1px solid hsl(var(--cyan) / 0.2)",
                }}
              >
                <MessageSquare size={22} style={{ color: "hsl(var(--cyan))" }} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">{personalInfo.contactHeading}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {personalInfo.contactText}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} style={{ color: "hsl(var(--cyan))" }} />
              <span>{personalInfo.location}</span>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, handle, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 group transition-all"
                  whileHover={{ x: 4, scale: 1.01 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.2)" }}
                  >
                    <Icon size={15} style={{ color: "hsl(var(--cyan))" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-cyan-DEFAULT transition-colors">
                      {handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Alex Johnson"
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@example.com"
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Collaboration"
                  className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="btn-glow flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending || sent}
              >
                {sending ? (
                  <>
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-t-transparent"
                      style={{ borderColor: "hsl(var(--primary-foreground) / 0.4)", borderTopColor: "hsl(var(--primary-foreground))" }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
