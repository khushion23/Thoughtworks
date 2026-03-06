import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Topics", href: "#topics" },
  { label: "Agenda", href: "#agenda" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center h-10">
          <img src="/observenow-logo.webp" alt="ObserveNow Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://zfrmz.in/0mE0dUrofSRwcJGE3JAT"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full"
          >
            Register Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card mx-4 mt-3 rounded-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-foreground py-2"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://zfrmz.in/0mE0dUrofSRwcJGE3JAT"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button text-primary-foreground text-center font-medium px-5 py-3 rounded-full mt-2"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
