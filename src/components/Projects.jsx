import { motion } from "motion/react";
import {
  Smartphone,
  WifiOff,
  Globe,
  CheckCircle2,
  ExternalLink,
  Headphones,
  Users,
  Search,
  BookOpen,
  BrainCircuit,
  Sparkles,
  MessageSquare,
  GraduationCap,
  Languages,
  Video,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";

function BongoLab({ t }) {
  const project = t.projects.bongoLab;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative rounded-2xl bg-white dark:bg-royal-800/70 border border-silver-200 dark:border-royal-600/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-royal-500/10 hover:border-royal-300/60 dark:hover:border-royal-400/40"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-royal-100 dark:bg-royal-700/40 text-royal-600 dark:text-royal-200 mb-4 transition-colors duration-500">
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-silver-600 dark:text-silver-300 text-lg leading-relaxed mb-6 transition-colors duration-500">
              {project.description}
            </p>

            <ul className="space-y-3 mb-8">
              {project.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500"
                >
                  <CheckCircle2
                    size={18}
                    className="text-marmalade-500 mt-0.5 shrink-0"
                  />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: WifiOff, label: "Offline-first" },
                { icon: Smartphone, label: "Low-end Android" },
                { icon: Globe, label: "PWA" },
                { icon: Languages, label: "5+ Languages" },
                { icon: Users, label: "Community" },
                { icon: Sparkles, label: "SimForge AI Engine" },
                { icon: Video, label: "Video Export" },
              ].map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-silver-100 dark:bg-royal-700/40 text-silver-700 dark:text-silver-300 transition-colors duration-300 cursor-default hover:bg-royal-100 dark:hover:bg-royal-600/40 hover:text-royal-700 dark:hover:text-royal-200"
                >
                  <Icon size={14} />
                  {label}
                </motion.span>
              ))}
            </div>

            <a
              href="https://bongolab.stemrh.org/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-royal-500 to-royal-600 hover:from-royal-400 hover:to-royal-500 shadow-lg shadow-royal-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {project.cta}
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Phone Mockup with Video */}
          <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12 bg-silver-100 dark:bg-royal-900/60 transition-colors duration-500 group-hover:bg-silver-200/50">
            <div className="phone-mockup w-full max-w-[280px]">
              <div className="phone-screen bg-black aspect-[9/16] relative overflow-hidden">
                <video
                  src="/bongolab-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transform: "scaleX(1.15)", transformOrigin: "center center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Innovation Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 rounded-2xl bg-gradient-to-br from-royal-50 to-marmalade-50 dark:from-royal-800/90 dark:to-marmalade-900/20 border border-royal-200/60 dark:border-marmalade-900/40 p-8 sm:p-10 transition-colors duration-500"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-royal-500 to-marmalade-500 flex items-center justify-center cursor-default"
          >
            <BrainCircuit size={24} className="text-white" />
          </motion.div>
          <h4 className="font-display font-bold text-xl sm:text-2xl text-royal-700 dark:text-white transition-colors duration-500">
            {project.ai.title}
          </h4>
        </div>

        <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-8 max-w-2xl transition-colors duration-500">
          {project.ai.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.ai.features.map((feat, i) => {
            const icons = [MessageSquare, Sparkles, GraduationCap, Globe];
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group/card flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-royal-800/60 border border-silver-200 dark:border-royal-700/30 transition-all duration-300 hover:border-marmalade-300/60 dark:hover:border-marmalade-600/40 hover:shadow-lg hover:shadow-marmalade-500/10 cursor-default"
              >
                <Icon
                  size={20}
                  className="text-marmalade-500 mt-0.5 shrink-0 transition-transform duration-300 group-hover/card:scale-125 group-hover/card:rotate-6"
                />
                <span className="text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500">
                  {feat}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Ntina({ t }) {
  const project = t.projects.ntina;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative rounded-2xl bg-white dark:bg-royal-800/70 border border-silver-200 dark:border-royal-600/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-marmalade-500/10 hover:border-marmalade-300/60 dark:hover:border-marmalade-500/50"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Phone Mockup */}
          <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12 bg-marmalade-50 dark:bg-royal-900/60 order-2 lg:order-1 transition-colors duration-500">
            <div className="phone-mockup w-full max-w-[280px]">
              <div className="phone-screen bg-royal-900 aspect-[9/16] flex flex-col p-5">
                <div className="text-marmalade-400 font-display font-bold text-lg mb-3">
                  Ntina
                </div>
                <div className="w-full h-px bg-marmalade-800/50 mb-4" />

                <div className="flex items-center gap-2 bg-royal-800 rounded-lg px-3 py-2 mb-4">
                  <Search size={14} className="text-marmalade-400" />
                  <span className="text-silver-500 text-xs">
                    Search STEM topics...
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  {[
                    { title: "Thermodynamics", lang: "Swahili", duration: "3:24" },
                    { title: "Photosynthesis", lang: "Lingala", duration: "4:15" },
                    { title: "Newton's Laws", lang: "Swahili", duration: "5:02" },
                  ].map((entry) => (
                    <div
                      key={entry.title}
                      className="bg-royal-800/80 rounded-lg p-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-marmalade-500/20 flex items-center justify-center shrink-0">
                        <Headphones size={14} className="text-marmalade-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium truncate">
                          {entry.title}
                        </div>
                        <div className="text-silver-500 text-[10px]">
                          {entry.lang} · {entry.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-1 mt-3">
                  <div className="w-8 h-1 rounded bg-marmalade-500" />
                  <div className="w-2 h-1 rounded bg-royal-700" />
                  <div className="w-2 h-1 rounded bg-royal-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-12 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-marmalade-100 dark:bg-marmalade-900/30 text-marmalade-700 dark:text-marmalade-300 mb-4 transition-colors duration-500">
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-silver-600 dark:text-silver-300 text-lg leading-relaxed mb-6 transition-colors duration-500">
              {project.description}
            </p>

            <div className="space-y-4 mb-8">
              {project.mechanism.map((step, i) => {
                const icons = [Headphones, Users, Search, BookOpen];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    className="group/step flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-marmalade-100 dark:bg-marmalade-900/30 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/step:bg-marmalade-200 dark:group-hover/step:bg-marmalade-800/50 group-hover/step:scale-110">
                      <Icon
                        size={20}
                        className="text-marmalade-600 dark:text-marmalade-400 transition-transform duration-300 group-hover/step:rotate-12"
                      />
                    </div>
                    <p className="text-sm text-silver-700 dark:text-silver-300 pt-2 transition-colors duration-500">
                      {step}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-marmalade-500 to-marmalade-600 hover:from-marmalade-400 hover:to-marmalade-500 shadow-lg shadow-marmalade-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {project.cta}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 sm:py-28 bg-white dark:bg-royal-900 afro-pattern transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-royal-700 dark:text-white mb-3 transition-colors duration-500">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-silver-500 dark:text-silver-400 text-lg transition-colors duration-500">
            {t.projects.sectionSubtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          <BongoLab t={t} />
          <Ntina t={t} />
        </div>
      </div>
    </section>
  );
}
