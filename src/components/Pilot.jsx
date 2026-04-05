import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const B = "/BongoLab-Pilot-image/watermarked/";

// ── Image pools ──────────────────────────────────────────────────────────────
// Hero (static — most dramatic shot)
const HERO = `${B}10.jpeg`;

// Rotating slots — thematically paired
// Side column: class energy
const SIDE1 = [`${B}7.jpeg`, `${B}9.jpeg`];   // excited arms raised × two angles
// Side column: student portraits
const SIDE2 = [`${B}11.jpeg`, `${B}5.jpeg`];  // close portrait × group listening

// Bottom strip
const STR1 = [`${B}1.jpeg`];                  // static — teacher presenting (unique)
const STR2 = [`${B}3.jpeg`, `${B}2.jpeg`];   // student presenting BongoLab × standing beside laptop
const STR3 = [`${B}8.jpeg`];                  // static — full classroom (unique wide shot)
const STR4 = [`${B}6.jpeg`, `${B}4.jpeg`];   // hands on mobile × student studying laptop

// ── RotatingPhoto ────────────────────────────────────────────────────────────
// Handles both static (single src) and cycling (multiple srcs).
// Crossfade with a subtle Ken-Burns scale — smooth, non-jarring.
function RotatingPhoto({
  srcs,
  alt,
  className,
  motionDelay = 0,
  startDelay = 0,
  interval = 7000,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (srcs.length < 2) return;
    let timer;
    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        setIndex((i) => (i + 1) % srcs.length);
      }, interval);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [srcs.length, interval, startDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: motionDelay }}
      className={`relative overflow-hidden rounded-xl bg-silver-100 dark:bg-royal-800 ${className}`}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={srcs[index]}
          src={srcs[index]}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "opacity, transform" }}
        />
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function Pilot() {
  const { t } = useLang();
  const p = t.pilot;

  return (
    <section
      id="pilot"
      className="scroll-mt-20 py-20 sm:py-28 bg-silver-50 dark:bg-royal-800/50 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 afro-pattern-strong" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-royal-400 dark:text-royal-300 mb-3 block">
              {p.sectionTitle}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white leading-tight transition-colors duration-500">
              {p.headline}
            </h2>
          </div>
          <p className="text-silver-600 dark:text-silver-300 leading-relaxed transition-colors duration-500">
            {p.description}
          </p>
        </motion.div>

        {/* ── Stats + school nameplate ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 mb-8"
        >
          <div className="flex flex-wrap gap-y-3 divide-x divide-silver-200 dark:divide-royal-700/50">
            {p.stats.map((s, i) => (
              <div key={i} className="px-4 sm:px-5 first:pl-0 min-w-0">
                <p className="font-display font-extrabold text-xl text-royal-700 dark:text-white leading-none mb-0.5 transition-colors duration-500">
                  {s.value}
                </p>
                <p className="text-xs text-silver-500 dark:text-silver-400 whitespace-nowrap transition-colors duration-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden sm:block w-px h-8 bg-silver-200 dark:bg-royal-700/50 mx-6" />
          <p className="inline-flex items-center gap-1.5 text-sm text-silver-500 dark:text-silver-400 transition-colors duration-500">
            <MapPin size={13} className="text-marmalade-500 shrink-0" />
            {p.schools}
          </p>
        </motion.div>

        {/* ── Photo gallery ── */}

        {/* Row 1: hero (2/3) + rotating side column (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">

          {/* Hero — static, full height on desktop */}
          <RotatingPhoto
            srcs={[HERO]}
            alt="Student raising hand during BongoLab pilot, Bukavu"
            className="lg:col-span-2 aspect-[4/3] lg:aspect-auto lg:h-[420px]"
            motionDelay={0}
          />

          {/* Side column — two rotating slots stacked */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <RotatingPhoto
              srcs={SIDE1}
              alt="Students enthusiastically raising hands in classroom"
              className="aspect-[4/3] lg:aspect-auto lg:h-[203px]"
              motionDelay={0.08}
              startDelay={1200}
              interval={7000}
            />
            <RotatingPhoto
              srcs={SIDE2}
              alt="Student listening attentively during pilot session"
              className="aspect-[4/3] lg:aspect-auto lg:h-[203px]"
              motionDelay={0.14}
              startDelay={3000}
              interval={7000}
            />
          </div>
        </div>

        {/* Row 2: 4-slot rotating strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <RotatingPhoto
            srcs={STR1}
            alt="Teacher presenting BongoLab to students"
            className="aspect-[4/3]"
            motionDelay={0.06}
          />
          <RotatingPhoto
            srcs={STR2}
            alt="Student demonstrating BongoLab on laptop"
            className="aspect-[4/3]"
            motionDelay={0.1}
            startDelay={4800}
            interval={7000}
          />
          <RotatingPhoto
            srcs={STR3}
            alt="Full classroom of students during pilot"
            className="aspect-[4/3]"
            motionDelay={0.14}
          />
          <RotatingPhoto
            srcs={STR4}
            alt="Students using BongoLab on mobile and laptop"
            className="aspect-[4/3]"
            motionDelay={0.18}
            startDelay={6400}
            interval={7000}
          />
        </div>

        {/* ── Next pilots teaser ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6 border-t border-silver-200 dark:border-royal-700/40 transition-colors duration-500"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-silver-400 dark:text-silver-500 shrink-0">
            {p.nextUp.label}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {p.nextUp.cities.map((city, i) => (
              <span key={city} className="inline-flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-royal-800 border border-silver-200 dark:border-royal-600/40 text-royal-600 dark:text-royal-200 transition-colors duration-500">
                  {city}
                </span>
                {i < p.nextUp.cities.length - 1 && (
                  <ArrowRight size={12} className="text-silver-300 dark:text-silver-600" />
                )}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
