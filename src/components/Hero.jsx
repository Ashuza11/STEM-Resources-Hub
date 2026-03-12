import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Play, Target, Lightbulb, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const videoRef = useRef(null);

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/STEM-RH-BG-VIDEO.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-900/80 via-royal-900/60 to-royal-900/90" />
          <div className="absolute inset-0 afro-pattern opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-marmalade-500/20 backdrop-blur-sm text-marmalade-300 text-xs font-semibold mb-8 border border-marmalade-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-marmalade-400 animate-pulse" />
              Deep Learning Indaba 2025 ideathon Finalist
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              {t.hero.headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className={
                    ["STEM", "Excellence", "l'excellence"].includes(word)
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-marmalade-400"
                      : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-silver-200 leading-relaxed mb-10"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-royal-500 to-royal-600 hover:from-royal-400 hover:to-royal-500 shadow-lg shadow-royal-500/25 transition-all hover:shadow-xl hover:shadow-royal-500/30 hover:-translate-y-0.5"
              >
                {t.hero.cta}
              </a>
              <a
                href="https://youtu.be/u4ikkqZG4q4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-semibold text-white border-2 border-white/20 hover:border-marmalade-400/60 backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                <Play size={18} className="text-marmalade-400" />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={24} className="text-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Narrative */}
      <section className="py-20 sm:py-28 bg-silver-50 dark:bg-royal-800/50 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 afro-pattern opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
              {t.mission.sectionTitle}
            </h2>
            <p className="text-silver-600 dark:text-silver-300 text-lg max-w-2xl mx-auto transition-colors duration-500">
              {t.mission.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Phase 1: Bongo-Lab */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, y: { type: "spring", stiffness: 300, damping: 22 } }}
              className="group/phase1 relative rounded-2xl bg-white dark:bg-royal-800/60 border border-royal-200 dark:border-royal-700/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-royal-500/10 hover:border-royal-300/70 dark:hover:border-royal-500/50 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-100 dark:bg-royal-700/40 flex items-center justify-center transition-all duration-300 group-hover/phase1:bg-royal-200 dark:group-hover/phase1:bg-royal-600/50 group-hover/phase1:scale-110">
                  <Target size={22} className="text-royal-500 dark:text-royal-300 transition-transform duration-300 group-hover/phase1:rotate-12" />
                </div>
                <span className="font-display font-semibold text-sm text-royal-500 dark:text-royal-300 uppercase tracking-wider">
                  {t.mission.phase1.label}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-royal-700 dark:text-white mb-3 transition-colors duration-500">
                {t.mission.phase1.title}
              </h3>
              <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-4 transition-colors duration-500">
                {t.mission.phase1.description}
              </p>
              <ul className="space-y-2">
                {t.mission.phase1.points.map((point, i) => (
                  <li
                    key={i}
                    className="group/item flex items-start gap-2 text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500"
                  >
                    <ChevronRight
                      size={16}
                      className="text-royal-500 dark:text-royal-400 mt-0.5 shrink-0 transition-transform duration-200 group-hover/item:translate-x-1"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Phase 2: Ntina */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, y: { type: "spring", stiffness: 300, damping: 22 } }}
              className="group/phase2 relative rounded-2xl bg-white dark:bg-royal-800/60 border border-marmalade-200 dark:border-marmalade-800/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-marmalade-500/10 hover:border-marmalade-300/70 dark:hover:border-marmalade-600/50 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-marmalade-100 dark:bg-marmalade-900/40 flex items-center justify-center transition-all duration-300 group-hover/phase2:bg-marmalade-200 dark:group-hover/phase2:bg-marmalade-800/60 group-hover/phase2:scale-110">
                  <Lightbulb size={22} className="text-marmalade-500 dark:text-marmalade-400 transition-transform duration-300 group-hover/phase2:rotate-12" />
                </div>
                <span className="font-display font-semibold text-sm text-marmalade-600 dark:text-marmalade-400 uppercase tracking-wider">
                  {t.mission.phase2.label}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-royal-700 dark:text-white mb-3 transition-colors duration-500">
                {t.mission.phase2.title}
              </h3>
              <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-4 transition-colors duration-500">
                {t.mission.phase2.description}
              </p>
              <ul className="space-y-2">
                {t.mission.phase2.points.map((point, i) => (
                  <li
                    key={i}
                    className="group/item flex items-start gap-2 text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500"
                  >
                    <ChevronRight
                      size={16}
                      className="text-marmalade-500 mt-0.5 shrink-0 transition-transform duration-200 group-hover/item:translate-x-1"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connecting line */}
          <div className="hidden md:flex justify-center my-6">
            <div className="w-px h-12 bg-gradient-to-b from-royal-400 to-marmalade-400" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-silver-500 dark:text-silver-400 text-sm italic max-w-lg mx-auto px-4 mt-8 md:mt-0 transition-colors duration-500"
          >
            {t.mission.connector}
          </motion.p>
        </div>
      </section>
    </>
  );
}
