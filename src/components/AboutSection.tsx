import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wrench, Microscope } from "lucide-react";
import { motion } from "framer-motion";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {

  
  const highlights = [
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Wrench,
      title: "Problem Solver",
      description: "Innovative approach to complex technical challenges",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Microscope,
      title: "Biomedical Focused",
      description: "Specialized in medical electronics and healthcare technology",
      color: "from-green-400 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                As an adaptable Biomedical Engineer and Electronics Enthusiast, I bring a unique blend of healthcare knowledge and technical expertise to the medical technology field. My journey spans from hands-on medical equipment handling in ICU and OT environments to quality testing of industrial electronics.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Currently pursuing B.Tech in Electronics & Telecommunication at PCCOE Pune, I'm passionate about creating innovative solutions that bridge the gap between complex medical needs and cutting-edge electronic systems. My experience includes founding the "TANTRiX" club and developing assistive technologies for the hearing-impaired community.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm glass hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`p-3 bg-gradient-to-br ${highlight.color} rounded-xl group-hover:scale-110 transition-all duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="font-semibold text-foreground text-lg mb-1"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {highlight.title}
                          </motion.h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover effect line */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Additional animated stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "3+", label: "Years Experience", icon: "🎯" },
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-glow"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;