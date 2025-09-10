import { motion } from "framer-motion";

export const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay,
        },
      }}
      viewport={{ once: true, margin: "0px -5% 0px 0px " }}
      className={`motion-section ${className} shrink-0 w-full h-full`}
      style={{
        // CSS-based mobile optimizations
        transform: "translateZ(0)", // Force GPU acceleration
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.span>
  );
};
