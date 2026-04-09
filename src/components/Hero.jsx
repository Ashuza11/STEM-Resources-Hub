import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowDown, Play, Target, Lightbulb, ChevronRight, Radio, Clock } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const videoRef = useRef(null);

  const { scrollY } = useScroll();
  const [showScrollHint, setShowScrollHint] = useState(true);
  useMotionValueEvent(scrollY, "change", (y) => {
    setShowScrollHint(y < 80);
  });

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
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-white leading-tight mb-6">
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
              className="max-w-3xl mx-auto text-lg sm:text-xl text-silver-200 leading-relaxed mb-10"
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

        </div>

        {/* Scroll indicator — fixed to viewport, fades out once user starts scrolling */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showScrollHint ? 1 : 0, y: showScrollHint ? 0 : 10 }}
          transition={{ delay: showScrollHint ? 1.8 : 0, duration: 0.5 }}
          style={{ pointerEvents: showScrollHint ? "auto" : "none" }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-6 cursor-pointer group"
          aria-label="Scroll down to explore"
        >
          {/* Outer slow ring */}
          <span className="absolute w-20 h-20 rounded-full border border-white/25 animate-ping [animation-duration:2.4s]" />
          {/* Inner faster ring */}
          <span className="absolute w-16 h-16 rounded-full border border-white/20 animate-ping [animation-duration:1.6s] [animation-delay:0.4s]" />

          {/* Bouncing circle button */}
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
            className="relative w-13 h-13 w-[52px] h-[52px] rounded-full border-2 border-white/60 group-hover:border-marmalade-400 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-colors duration-300"
          >
            <ArrowDown size={24} className="text-white group-hover:text-marmalade-400 transition-colors duration-300" />
          </motion.span>

          {/* Label */}
          <span className="text-white/60 text-[11px] font-semibold tracking-widest uppercase group-hover:text-white transition-colors duration-300">
            Explore
          </span>
        </motion.a>
      </section>

      {/* Mission Narrative */}
      <section className="py-20 sm:py-28 bg-silver-50 dark:bg-royal-800/50 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 afro-pattern-strong" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Visual hook — shown before the label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-10"
          >
            {(() => {
              const [line1, line2] = t.mission.hook.split("\u00A0");
              return (
                <>
                  <span className="text-royal-700 dark:text-white transition-colors duration-500">{line1}</span>
                  {"\u00A0"}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-500 to-marmalade-500">{line2}</span>
                </>
              );
            })()}
          </motion.p>

          {/* Left-aligned header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-royal-400 dark:text-royal-300 mb-3 block">
              {t.mission.sectionTitle}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-royal-600 dark:text-silver-200 leading-snug transition-colors duration-500">
              {t.mission.sectionSubtitle}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-royal-400 via-marmalade-400 to-transparent hidden sm:block" />

            {/* Phase 1 — LIVE */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
              className="relative sm:pl-16 mb-6"
            >
              {/* Spine dot */}
              <div className="absolute left-[10px] top-7 w-5 h-5 rounded-full bg-white dark:bg-royal-800 border-2 border-royal-500 hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-royal-500" />
              </div>

              <div className="rounded-2xl bg-white dark:bg-royal-800/70 border-l-4 border-l-royal-500 border border-royal-100 dark:border-royal-700/40 p-7 sm:p-9 shadow-sm">
                {/* Status + label row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                    <Radio size={11} className="animate-pulse" />
                    Live
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-royal-400 dark:text-royal-300">
                    {t.mission.phase1.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-royal-700 dark:text-white mb-3 transition-colors duration-500">
                  {t.mission.phase1.title}
                </h3>
                <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-6 max-w-xl transition-colors duration-500">
                  {t.mission.phase1.description}
                </p>

                {/* Points */}
                <ul className="space-y-2.5">
                  {t.mission.phase1.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500">
                      <ChevronRight size={15} className="text-royal-500 dark:text-royal-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Connector quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative sm:pl-16 my-4"
            >
              <p className="text-sm italic text-silver-400 dark:text-silver-500 pl-1 transition-colors duration-500">
                {t.mission.connector}
              </p>
            </motion.div>

            {/* Phase 2 — Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative sm:pl-16 sm:ml-8"
            >
              {/* Spine dot — hollow for future */}
              <div className="absolute left-[10px] top-7 w-5 h-5 rounded-full bg-silver-50 dark:bg-royal-800/50 border-2 border-dashed border-marmalade-400 hidden sm:block" />

              <div className="rounded-2xl bg-white/60 dark:bg-royal-800/30 border-l-4 border-l-marmalade-300 dark:border-l-marmalade-700 border border-dashed border-marmalade-200 dark:border-marmalade-800/50 p-7 sm:p-9">
                {/* Status + label row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marmalade-100 dark:bg-marmalade-900/30 text-marmalade-700 dark:text-marmalade-400 text-xs font-bold uppercase tracking-wider">
                    <Clock size={11} />
                    In Development
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-marmalade-500 dark:text-marmalade-400">
                    {t.mission.phase2.label}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-royal-700 dark:text-white mb-3 transition-colors duration-500">
                  {t.mission.phase2.title}
                </h3>
                <p className="text-silver-500 dark:text-silver-400 leading-relaxed mb-5 max-w-xl text-sm transition-colors duration-500">
                  {t.mission.phase2.description}
                </p>

                <ul className="space-y-2">
                  {t.mission.phase2.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-silver-500 dark:text-silver-400 transition-colors duration-500">
                      <ChevronRight size={15} className="text-marmalade-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
