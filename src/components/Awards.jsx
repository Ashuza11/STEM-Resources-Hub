import { motion } from "motion/react";
import { Award, ExternalLink, Trophy } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Awards() {
  const { t } = useLang();
  const { indaba } = t.awards;

  return (
    <section
      id="awards"
      className="py-20 sm:py-28 bg-silver-50 dark:bg-royal-800/30 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
            {t.awards.sectionTitle}
          </h2>
          <p className="text-silver-600 dark:text-silver-300 text-lg max-w-xl mx-auto transition-colors duration-500">
            {t.awards.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, y: { type: "spring", stiffness: 280, damping: 22 }, scale: { type: "spring", stiffness: 280, damping: 22 } }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-royal-500 via-royal-600 to-royal-700 p-px transition-all duration-300 hover:shadow-2xl hover:shadow-royal-500/30">
            <div className="rounded-2xl bg-gradient-to-br from-royal-600/95 to-royal-700/95 backdrop-blur-xl p-8 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-marmalade-500/20 mb-6"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                >
                  <Trophy size={40} className="text-marmalade-400" />
                </motion.div>
              </motion.div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                {indaba.title}
              </h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marmalade-500/20 text-marmalade-300 font-display font-semibold text-sm mb-6 cursor-default"
              >
                <Award size={16} />
                {indaba.achievement}
              </motion.div>

              <p className="text-silver-300 text-lg leading-relaxed max-w-lg mx-auto mb-8">
                {indaba.description}
              </p>

              <a
                href="https://www.youtube.com/watch?v=vFAXeM1ps5o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-royal-800 bg-marmalade-400 hover:bg-marmalade-300 shadow-lg shadow-marmalade-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                {indaba.cta}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
