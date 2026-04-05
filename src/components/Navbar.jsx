import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#projects", label: t.nav.projects },
    { href: "#pilot", label: t.nav.pilot },
    { href: "#awards", label: t.nav.awards },
    { href: "#partners", label: t.nav.partners },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 dark:bg-royal-900/85 shadow-lg shadow-royal-900/5 dark:shadow-royal-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo: white when at top, color logo on scroll */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src={scrolled ? "/STEM-Resources-Hub-Logo.png" : "/stem-rf-logo-whight.png"}
              alt="STEM Resources Hub"
              className="h-9 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-royal-600 hover:text-marmalade-500 dark:text-royal-200 dark:hover:text-marmalade-400"
                    : "text-white/90 hover:text-marmalade-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "bg-royal-100 dark:bg-royal-700/40 text-royal-600 dark:text-royal-200 hover:bg-royal-200 dark:hover:bg-royal-700/60"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
              aria-label="Toggle language"
            >
              <Languages size={14} />
              {lang === "en" ? "FR" : "EN"}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "text-royal-600 dark:text-royal-200 hover:bg-royal-100 dark:hover:bg-royal-700/50"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "text-royal-600 dark:text-royal-200 hover:bg-royal-100 dark:hover:bg-royal-700/50"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/97 dark:bg-royal-900/97 backdrop-blur-xl border-b border-royal-100 dark:border-royal-700/50"
          >
            <div className="px-4 py-2 space-y-0.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-3.5 rounded-lg text-sm font-medium text-royal-600 dark:text-royal-200 hover:bg-royal-50 dark:hover:bg-royal-800/70 hover:text-marmalade-500 dark:hover:text-marmalade-400 transition-colors active:bg-royal-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
