import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";

const partners = [
  {
    name: "ARCHIV",
    logo: "/partners/full-logo-archv.png",
    darkInvert: false,
    role: {
      en: "Research & archival infrastructure supporting our knowledge base.",
      fr: "Infrastructure de recherche et d'archivage soutenant notre base de connaissances.",
    },
  },
  {
    name: "DDC RDC",
    logo: "/partners/DDC RDC-06.png",
    darkInvert: false,
    role: {
      en: "On-the-ground distribution network across DRC schools and communities.",
      fr: "Réseau de distribution terrain dans les écoles et communautés de RDC.",
    },
  },
  {
    name: "Deep Learning Indaba",
    logo: "/partners/Deep-learning-Indaba.png",
    darkInvert: true,
    role: {
      en: "Africa's premier ML community — the stage where our vision was first recognized.",
      fr: "La première communauté ML d'Afrique — la scène où notre vision a été reconnue.",
    },
  },
];

export default function Partners() {
  const { t, lang } = useLang();

  return (
    <section
      id="partners"
      className="scroll-mt-20 py-20 sm:py-28 bg-silver-50 dark:bg-royal-800/40 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 afro-pattern-strong" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-royal-400 dark:text-royal-300 mb-3 block">
            {t.partners.sectionTitle}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white leading-tight transition-colors duration-500">
            {t.partners.headline}
          </h2>
        </motion.div>

        {/* Partner cards */}
        <div className="grid sm:grid-cols-3 gap-px bg-silver-200 dark:bg-royal-700/30 rounded-2xl overflow-hidden border border-silver-200 dark:border-royal-700/30">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-royal-900 p-8 flex flex-col gap-6 hover:bg-silver-50 dark:hover:bg-royal-800/80 transition-colors duration-300"
            >
              {/* Number label */}
              <span className="font-display font-bold text-4xl text-silver-100 dark:text-royal-700/60 select-none leading-none transition-colors duration-300 group-hover:text-marmalade-100 dark:group-hover:text-marmalade-900/50">
                0{i + 1}
              </span>

              {/* Logo */}
              <div className="h-14 flex items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ${
                    partner.darkInvert ? "dark:brightness-0 dark:invert" : ""
                  }`}
                />
              </div>

              {/* Thin rule */}
              <div className="w-6 h-px bg-marmalade-300 dark:bg-marmalade-700 transition-colors duration-300" />

              {/* Name + role */}
              <div>
                <p className="font-display font-semibold text-royal-700 dark:text-white text-sm mb-1.5 transition-colors duration-500">
                  {partner.name}
                </p>
                <p className="text-silver-500 dark:text-silver-400 text-sm leading-relaxed transition-colors duration-500">
                  {partner.role[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
