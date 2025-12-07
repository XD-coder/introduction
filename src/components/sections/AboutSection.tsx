import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../../constants/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative md:snap-start md:snap-always bg-linear-to-b from-slate-900 to-slate-950 pt-16 pb-6 px-4 md:px-8"
      style={{ minHeight: 'calc(100vh - 3rem)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400 mb-2 font-orbitron text-glow-cyan">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-space">{ABOUT_CONTENT.subtitle}</p>
        </motion.div>

        {/* Bio Content */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Left: Bio Text */}
          <motion.div
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Introduction Card */}
            <motion.div 
              className="bg-linear-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 border-l-4 border-cyan-400 shadow-lg"
              whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.8)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">👨‍💻</span>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm font-space">
                  {ABOUT_CONTENT.bio.introduction}
                </p>
              </div>
            </motion.div>

            {/* Focus Card */}
            <motion.div 
              className="bg-linear-to-br from-cyan-900/40 to-slate-800/40 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 border-l-4 border-cyan-400 shadow-lg"
              whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.8)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">🚀</span>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm font-space">
                  {ABOUT_CONTENT.bio.focus}
                </p>
              </div>
            </motion.div>

            {/* Likes Card */}
            <motion.div 
              className="bg-linear-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 border-l-4 border-purple-400 shadow-lg"
              whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.8)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">🎯</span>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm font-space">
                  {ABOUT_CONTENT.bio.likes}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 gap-2 md:gap-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ABOUT_CONTENT.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-slate-700/50 hover:border-cyan-500/70 transition-all shadow-lg hover:shadow-cyan-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                animate={{
                  y: [0, -5, 0],
                }}
                whileHover={{ scale: 1.05 }}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <motion.div 
                  className="text-2xl md:text-3xl mb-1 md:mb-2"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-cyan-400 font-semibold mb-1 text-xs md:text-sm font-space tracking-wide">
                  {highlight.title}
                </h3>
                <p className="text-slate-400 text-[10px] md:text-xs font-space leading-snug">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          className="bg-linear-to-br from-slate-800/40 to-purple-900/30 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 border-2 border-purple-500/50 shadow-xl shadow-purple-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-3 text-center font-orbitron tracking-wider text-glow-purple">
            Fun Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {ABOUT_CONTENT.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-linear-to-r from-slate-900/70 to-slate-800/50 rounded-lg p-2.5 md:p-3 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <motion.span 
                  className="text-cyan-400 text-base md:text-lg flex-shrink-0"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  ✦
                </motion.span>
                <span className="text-slate-300 text-[11px] md:text-xs">{fact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
