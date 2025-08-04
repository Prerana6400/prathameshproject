import { motion } from "framer-motion";

interface RotatingCubeProps {
  size?: number;
  className?: string;
  speed?: number;
}

const RotatingCube = ({ size = 100, className = "", speed = 20 }: RotatingCubeProps) => {
  const cubeSize = size;
  const halfSize = cubeSize / 2;

  const faces = [
    { color: "bg-primary/80", text: "🎯" },
    { color: "bg-accent/80", text: "💡" },
    { color: "bg-secondary/80", text: "🚀" },
    { color: "bg-muted/80", text: "⭐" },
    { color: "bg-primary/60", text: "🎨" },
    { color: "bg-accent/60", text: "⚡" },
  ];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: cubeSize,
        height: cubeSize,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Front Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[0].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateZ(${halfSize}px)`,
          }}
        >
          {faces[0].text}
        </motion.div>

        {/* Back Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[1].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateZ(-${halfSize}px) rotateY(180deg)`,
          }}
        >
          {faces[1].text}
        </motion.div>

        {/* Right Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[2].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateX(${halfSize}px) rotateY(90deg)`,
          }}
        >
          {faces[2].text}
        </motion.div>

        {/* Left Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[3].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateX(-${halfSize}px) rotateY(-90deg)`,
          }}
        >
          {faces[3].text}
        </motion.div>

        {/* Top Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[4].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateY(-${halfSize}px) rotateX(90deg)`,
          }}
        >
          {faces[4].text}
        </motion.div>

        {/* Bottom Face */}
        <motion.div
          className={`absolute flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20 ${faces[5].color}`}
          style={{
            width: cubeSize,
            height: cubeSize,
            transform: `translateY(${halfSize}px) rotateX(-90deg)`,
          }}
        >
          {faces[5].text}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RotatingCube; 