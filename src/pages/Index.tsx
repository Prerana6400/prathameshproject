import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import LanguagesSection from "@/components/LanguagesSection";
import LetterOfIntentSection from "@/components/LetterOfIntentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleEffect from "@/components/ParticleEffect";
import InteractiveCursor from "@/components/InteractiveCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Floating3DElements from "@/components/Floating3DElements";
import RotatingCube from "@/components/RotatingCube";
import ThemeAwareBackground from "@/components/ThemeAwareBackground";
import ThemeTransitionNotification from "@/components/ThemeTransitionNotification";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <ThemeAwareBackground variant="animated">
      {/* Background Effects */}
      <ParticleEffect particleCount={30} className="opacity-30" />
      
      {/* 3D Floating Elements */}
      <Floating3DElements count={12} className="opacity-20" />
      
      {/* Interactive Cursor */}
      <InteractiveCursor />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Theme Transition Notification */}
      <ThemeTransitionNotification />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Content Sections with Scroll Animations */}
      <motion.div 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div 
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ExperienceSection />
      </motion.div>
      
      <motion.div 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <EducationSection />
      </motion.div>
      
      <motion.div 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SkillsSection />
      </motion.div>
      
      <motion.div 
        id="accomplishments"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AccomplishmentsSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <LanguagesSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <LetterOfIntentSection />
      </motion.div>
      
      <motion.div 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Footer />
      </motion.div>
    </ThemeAwareBackground>
  );
};

export default Index;
