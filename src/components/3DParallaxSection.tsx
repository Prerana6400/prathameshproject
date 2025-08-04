import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface Parallax3DSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const Parallax3DSection = ({ children, className = "", speed = 0.5 }: Parallax3DSectionProps) => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -300 * speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
        }}
      />

      {/* Middle Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 10]),
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
      </motion.div>

      {/* Foreground Layer */}
      <motion.div
        className="relative z-10"
        style={{
          y,
          scale,
          rotateX,
          opacity,
        }}
      >
        {children}
      </motion.div>

      {/* Floating 3D Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -400]),
          rotateY: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/30 rounded-lg transform rotate-45" />
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-accent/30 rounded-lg transform -rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-secondary/30 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default Parallax3DSection; 