import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import RotatingCube from "./RotatingCube";
import Floating3DElements from "./Floating3DElements";
import { useTheme } from "@/contexts/ThemeContext";
const profileImage = "/lovable-uploads/6c9ffdad-5de9-419d-926f-eaa8a0c8a8af.png";

const HeroSection = () => {
  const { isDark } = useTheme();
  const backgroundPattern = isDark 
    ? "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    : "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E6F3FF' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-primary/10 via-background to-muted/20' 
        : 'bg-gradient-to-br from-primary/5 via-background to-secondary/30'
    }`}>
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 animate-pulse" 
        style={{ backgroundImage: `url(${backgroundPattern})` }}
      ></div>
      
      {/* 3D Floating Elements */}
      <Floating3DElements count={8} className="opacity-40" />
      
      {/* Rotating 3D Cube */}
      <div className="absolute top-32 right-32 opacity-60">
        <RotatingCube size={80} speed={25} />
      </div>
      
      {/* Morphing Shapes */}
      <motion.div
        className="morph-shape absolute top-20 left-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="morph-shape absolute bottom-20 right-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Malhar
                </motion.span>{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent gradient-text inline-block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Patil
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Adaptable Biomedical Engineer &{" "}
                <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%]">
                  Electronics Enthusiast
                </span>
              </motion.p>
            </div>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Passionate about medical technology innovation, bridging the gap between healthcare and cutting-edge electronics.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-glow group ripple"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-xl transition-all duration-300 hover-glow group ripple"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-30 scale-105"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1.05, 1.1, 1.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Image Container */}
              <motion.div 
                className="relative bg-white p-2 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 card-3d"
                whileHover={{ rotateY: 5, rotateX: 5 }}
              >
                <motion.img
                  src={profileImage}
                  alt="Malhar Patil - Profile"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg cursor-default"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                ⚡ Fast Learner
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-primary/20 cursor-default"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                🔬 Biomedical Focused
              </motion.div>
              
              {/* Additional floating element */}
              <motion.div 
                className="absolute top-1/2 -right-8 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg cursor-default"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                whileHover={{ scale: 1.15 }}
              >
                💡 Innovator
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;