import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Test Engineer",
      company: "Minilec India Pvt. Ltd",
      location: "Pune",
      duration: "Jun 2024 – Aug 2024",
      description: "Testing & quality assurance of industrial electronics systems",
      skills: ["Industrial Electronics", "Quality Testing", "Equipment Testing"],
      isRecent: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Biomedical Engineer",
      company: "Second Inning Arogyam",
      location: "Bhuldhana",
      duration: "Jan 2024 – Apr 2024",
      description: "Medical equipment handling in ICU and OT environments with sales involvement",
      skills: ["Medical Equipment", "ICU Systems", "OT Equipment", "Sales"],
      isRecent: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-32 h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
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
            Professional Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 3D Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                transformOrigin: "top",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              }}
            />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={itemVariants}
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* 3D Timeline Dot */}
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    style={{
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                    }}
                  />
                  
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Card className="md:ml-20 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm glass">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <motion.h3 
                              className="text-2xl font-bold text-foreground mb-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {exp.title}
                            </motion.h3>
                            <motion.p 
                              className="text-xl text-primary font-semibold mb-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {exp.company}
                            </motion.p>
                          </div>
                          {exp.isRecent && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Badge className="bg-primary/10 text-primary border-primary/20 self-start lg:self-center">
                                Recent
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.duration}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </motion.div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.2 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-glow"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* 3D Hover Effect Line */}
                        <motion.div
                          className={`h-0.5 bg-gradient-to-r ${exp.color} mt-6`}
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;