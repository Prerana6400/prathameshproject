import { motion } from "framer-motion";
import RotatingCube from "./RotatingCube";

const Showcase3D = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            3D Animation Showcase
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the power of modern 3D animations and interactive effects
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 3D Rotating Cube */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="mb-4">
              <RotatingCube size={120} speed={15} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Rotating Cube</h3>
            <p className="text-muted-foreground text-center text-sm">
              Continuously rotating 3D cube with different colored faces
            </p>
          </motion.div>

          {/* 3D Floating Elements */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="mb-4 relative h-32 w-32">
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg absolute top-0 left-0" />
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg absolute top-8 right-0" />
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-lg absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Floating Elements</h3>
            <p className="text-muted-foreground text-center text-sm">
              Elements floating in 3D space with smooth animations
            </p>
          </motion.div>

          {/* 3D Parallax Effect */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="mb-4 relative h-32 w-32">
              <motion.div
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg"
                  animate={{
                    rotateX: [0, 15, 0],
                    rotateY: [0, 15, 0],
                    z: [0, 50, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-2 bg-accent/20 rounded-lg"
                  animate={{
                    rotateX: [0, -10, 0],
                    rotateY: [0, -10, 0],
                    z: [0, 30, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute inset-4 bg-secondary/20 rounded-lg"
                  animate={{
                    rotateX: [0, 5, 0],
                    rotateY: [0, 5, 0],
                    z: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Parallax Layers</h3>
            <p className="text-muted-foreground text-center text-sm">
              Multiple layers moving at different depths
            </p>
          </motion.div>

          {/* 3D Morphing Shape */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="mb-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl"
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "58% 42% 75% 25% / 76% 46% 54% 24%",
                  "50% 50% 33% 67% / 55% 27% 73% 45%",
                  "33% 67% 58% 42% / 63% 68% 32% 37%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h3 className="text-xl font-bold text-foreground mb-2">Morphing Shape</h3>
            <p className="text-muted-foreground text-center text-sm">
              Organic shape that continuously morphs and transforms
            </p>
          </motion.div>

          {/* 3D Interactive Card */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="mb-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg"
              whileHover={{
                rotateX: 15,
                rotateY: 15,
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                3D
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-2">Interactive Card</h3>
            <p className="text-muted-foreground text-center text-sm">
              Hover to see 3D perspective transformation
            </p>
          </motion.div>

          {/* 3D Particle System */}
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="mb-4 relative h-32 w-32">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    z: [0, 100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${20 + (i * 10)}%`,
                  }}
                />
              ))}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Particle System</h3>
            <p className="text-muted-foreground text-center text-sm">
              Animated particles moving in 3D space
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase3D; 