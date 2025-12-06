import { motion } from "framer-motion";
import { SKILLS_CONTENT } from "../../constants/content";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative snap-start snap-always bg-linear-to-b from-slate-950 to-slate-900 pt-16 pb-6 px-4 md:px-8"
      style={{ minHeight: 'calc(100vh - 3rem)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2 font-orbitron tracking-wide">
            {SKILLS_CONTENT.title}
          </h2>
          <p className="text-slate-400 text-sm font-space">
            {SKILLS_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid - Minimal Design */}
        <div className="grid md:grid-cols-2 gap-6 flex-1">
          {SKILLS_CONTENT.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-700/30">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-200 font-space">
                  {category.name}
                </h3>
              </div>

              {/* Skills List - Simple Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-700/40 rounded-md border border-slate-600/30 hover:bg-slate-700/60 hover:border-slate-500/50 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-slate-300 text-sm font-space">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-slate-500 text-xs font-space">
            Constantly learning and growing 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
