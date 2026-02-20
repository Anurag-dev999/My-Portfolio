import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative py-8 border-t"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="font-mono text-gradient font-bold">&lt;dev/&gt;</span>
          <span className="mx-2">·</span>
          <span>Built with</span>
          <Heart size={13} className="mx-1" style={{ color: "hsl(var(--cyan))", fill: "hsl(var(--cyan))" }} />
          <span>by {personalInfo.fullName} · {new Date().getFullYear()}</span>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          {personalInfo.footerTech}
        </p>

        <motion.button
          onClick={scrollTop}
          className="btn-outline-glow w-9 h-9 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={15} />
        </motion.button>
      </div>
    </footer>
  );
}
