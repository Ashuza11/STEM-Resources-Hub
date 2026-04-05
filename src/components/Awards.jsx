import { motion } from "motion/react";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Awards() {
  const { t } = useLang();
  const { indaba } = t.awards;

  return (
    <section
      id="awards"
      className="scroll-mt-20 py-20 sm:py-28 bg-royal-800 dark:bg-royal-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 afro-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-royal-800 via-royal-800 to-royal-900/80 dark:from-royal-900 dark:via-royal-900 dark:to-royal-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-marmalade-400 mb-10"
        >
          {t.awards.sectionTitle}
        </motion.p>

        {/* Main editorial row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — typographic anchor */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Pull-quote style headline */}
            <div className="border-l-4 border-marmalade-500 pl-6 mb-8">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                {indaba.title}
              </h2>
            </div>

            {/* Meta — event details */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-silver-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-marmalade-500" />
                Kigali, Rwanda
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-marmalade-500" />
                2025
              </span>
            </div>

            {/* Body */}
            <p className="text-silver-300 text-lg leading-relaxed max-w-md">
              {indaba.description}
            </p>
          </motion.div>

          {/* Right — achievement card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:pt-4"
          >
            {/* Achievement badge — big, proud */}
            <div className="rounded-2xl bg-white/5 border border-white/10 border-l-2 border-l-marmalade-500 p-8 mb-6">
              <p className="text-xs uppercase tracking-widest text-silver-500 mb-4">
                {t.awards.sectionSubtitle}
              </p>
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-marmalade-400 leading-tight">
                {indaba.achievement}
              </p>
            </div>

            <a
              href="https://www.youtube.com/watch?v=vFAXeM1ps5o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-royal-900 bg-marmalade-400 hover:bg-marmalade-300 shadow-lg shadow-marmalade-900/30 transition-all hover:-translate-y-0.5"
            >
              {indaba.cta}
              <ExternalLink size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
