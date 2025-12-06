import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 w-1 bg-slate-700/30 z-50 origin-top"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="w-full bg-linear-to-b from-cyan-400 via-purple-400 to-cyan-400 origin-top"
        style={{ scaleY }}
      />
    </motion.div>
  );
}
