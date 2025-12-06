import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../../constants/content";

export function DogtagBadge() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { duration: 0.8, delay: 2, ease: "easeOut" },
        scale: { duration: 0.8, delay: 2, ease: "easeOut" },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }
      }}
    >
      {/* Chain/Ring effect */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-linear-to-b from-slate-500 to-slate-600 origin-top"
        initial={{ height: 0 }}
        animate={{ 
          height: 32,
          rotate: [-2, 2, -2],
        }}
        transition={{ 
          height: { duration: 0.4, delay: 2.2 },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }
        }}
      />

      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-slate-500"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [0, 360],
        }}
        transition={{ 
          scale: { duration: 0.3, delay: 2.2 },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }
        }}
      />

      {/* Dogtag */}
      <motion.div
        className="relative bg-linear-to-br from-slate-700 via-slate-600 to-slate-700 rounded-lg px-10 py-8 shadow-2xl border border-slate-500/50"
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(0, 255, 255, 0.15)",
            "0 25px 50px -12px rgba(168, 85, 247, 0.15)",
            "0 25px 50px -12px rgba(0, 255, 255, 0.15)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        {/* Corner notch effect */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-400" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-400" />

        {/* Embossed text */}
        <div className="space-y-3 text-slate-200 font-mono">
          <motion.div
            className="flex items-center justify-between gap-8 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.4 }}
          >
            <span className="text-slate-400 uppercase tracking-wider">
              Age:
            </span>
            <span className="font-bold text-cyan-300 text-lg">
              {PERSONAL_INFO.age}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-between gap-8 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.6 }}
          >
            <span className="text-slate-400 uppercase tracking-wider">
              Gender:
            </span>
            <span className="font-bold text-purple-300 text-lg">
              {PERSONAL_INFO.gender}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-between gap-8 text-sm pt-2 border-t border-slate-500/50"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.8 }}
          >
            <span className="text-slate-400 uppercase tracking-wider">
              Education:
            </span>
            <span className="font-bold text-cyan-300 text-base">
              {PERSONAL_INFO.education}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-between gap-8 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 3.0 }}
          >
            <span className="text-slate-400 uppercase tracking-wider">
              Year:
            </span>
            <span className="font-bold text-purple-300 text-base">
              {PERSONAL_INFO.year}
            </span>
          </motion.div>
        </div>

        {/* Metal shine effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 2,
            delay: 3.2,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
