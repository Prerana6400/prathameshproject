import { motion } from "framer-motion";

interface Floating3DElementProps {
  className?: string;
  count?: number;
}

const Floating3DElements = ({ className = "", count = 6 }: Floating3DElementProps) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + i * 2,
    size: 20 + i * 10,
    depth: 50 + i * 20,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            width: element.size,
            height: element.size,
            left: `${20 + (element.id * 15)}%`,
            top: `${10 + (element.id * 12)}%`,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            scale: [1, 1.2, 1],
            z: [0, element.depth, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {/* 3D Element with depth */}
          <motion.div
            className="w-full h-full relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-primary/60 to-accent/60 border border-white/20 flex items-center justify-center text-white text-xs font-bold`}
              style={{
                transform: `translateZ(${element.size / 2}px)`,
              }}
            >
              {element.id + 1}
            </motion.div>

            {/* Back face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-accent/60 to-primary/60 border border-white/20 flex items-center justify-center text-white text-xs font-bold`}
              style={{
                transform: `translateZ(-${element.size / 2}px) rotateY(180deg)`,
              }}
            >
              {element.id + 1}
            </motion.div>

            {/* Right face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-secondary/60 to-primary/60 border border-white/20`}
              style={{
                transform: `translateX(${element.size / 2}px) rotateY(90deg)`,
              }}
            />

            {/* Left face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-primary/60 to-secondary/60 border border-white/20`}
              style={{
                transform: `translateX(-${element.size / 2}px) rotateY(-90deg)`,
              }}
            />

            {/* Top face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-accent/60 to-secondary/60 border border-white/20`}
              style={{
                transform: `translateY(-${element.size / 2}px) rotateX(90deg)`,
              }}
            />

            {/* Bottom face */}
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br from-secondary/60 to-accent/60 border border-white/20`}
              style={{
                transform: `translateY(${element.size / 2}px) rotateX(-90deg)`,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Floating3DElements; 