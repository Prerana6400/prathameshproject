import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Cpu, Code, Users } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Stethoscope,
      title: "Medical & Healthcare",
      skills: ["Equipment Maintenance", "Medical Device Handling", "ICU Systems", "OT Equipment"],
      color: "text-red-600 bg-red-50",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Electronics & Engineering",
      skills: ["Circuit Design", "Embedded Systems", "Industrial Electronics", "Quality Testing"],
      color: "text-blue-600 bg-blue-50",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Programming & Technical",
      skills: ["C++", "Medical Electronics", "System Testing", "Technical Documentation"],
      color: "text-green-600 bg-green-50",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: ["Team Collaboration", "Communication Skills", "Sales Involvement", "Project Leadership"],
      color: "text-purple-600 bg-purple-50",
      gradient: "from-purple-500 to-violet-500"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
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
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm glass h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <category.icon className="h-6 w-6" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-foreground"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.title}
                      </motion.h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={badgeVariants}
                          whileHover="hover"
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm py-1 px-3 cursor-default hover-glow"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* 3D Hover Effect Line */}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-primary to-accent mt-6"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;