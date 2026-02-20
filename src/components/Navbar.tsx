import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: string) => {
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(section);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500"
      style={{
        background: scrolled
          ? "hsl(var(--background) / 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid hsl(var(--border))"
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <motion.div
        className="font-mono text-xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-gradient">&lt;</span>
        <span className="text-foreground">dev</span>
        <span className="text-gradient">/&gt;</span>
      </motion.div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className="nav-link text-sm font-medium tracking-wide"
              style={{
                color: active === link ? "hsl(var(--cyan))" : undefined,
              }}
            >
              {link}
              {active === link && (
                <motion.span
                  layoutId="active-link"
                  className="absolute -bottom-1 left-0 right-0 h-[1px]"
                  style={{
                    background: "hsl(var(--cyan))",
                    boxShadow: "0 0 8px hsl(var(--cyan))",
                  }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:flex">
        <motion.button
          onClick={() => scrollTo("Contact")}
          className="btn-glow px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass-card border-t-0 rounded-b-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full text-left px-8 py-3 text-sm font-medium transition-colors hover:text-cyan-DEFAULT"
                    style={{ color: active === link ? "hsl(var(--cyan))" : undefined }}
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li className="px-8 py-3">
                <button
                  onClick={() => scrollTo("Contact")}
                  className="btn-glow w-full py-2 rounded-lg text-sm font-semibold text-primary-foreground"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
