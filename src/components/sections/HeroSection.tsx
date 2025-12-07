import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../../constants/content";
import { DogtagBadge } from "../ui/DogtagBadge";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative md:snap-start md:snap-always bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center overflow-hidden pt-12"
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-4">
        {/* Animated text hero */}
        <div className="text-center space-y-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-400 font-orbitron tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -5, 0],
            }}
            transition={{ 
              opacity: { duration: 0.6, ease: "easeOut" },
              y: { 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          >
            {PERSONAL_INFO.greeting.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-slate-300 font-medium font-space tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [1, 0.8, 1], 
              y: 0 
            }}
            transition={{ 
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              },
              y: { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }}
          >
            {PERSONAL_INFO.fullName.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + wordIndex * 0.3 + charIndex * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < PERSONAL_INFO.fullName.split(" ").length - 1 &&
                  "\u00A0"}
              </span>
            ))}
          </motion.p>
        </div>

        {/* Military dogtag badge */}
        <DogtagBadge />
      </div>
    </section>
  );
}
