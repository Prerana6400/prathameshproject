import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Accomplishments", href: "#accomplishments" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="font-bold text-xl text-foreground hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Malhar
            </motion.span>{" "}
            <motion.span 
              className="text-primary animate-gradient-shift bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent bg-[length:200%_200%]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Patil
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagneticButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => console.log("Resume clicked")}
              >
                Resume
              </MagneticButton>
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                className="flex flex-col space-y-4 py-4"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium text-left px-4 py-2 hover:bg-muted/50 rounded-lg"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div 
                  className="px-4"
                  variants={itemVariants}
                >
                  <MagneticButton
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2"
                    onClick={() => console.log("Resume clicked")}
                  >
                    Resume
                  </MagneticButton>
                </motion.div>
                
                {/* Mobile Theme Toggle */}
                <motion.div 
                  className="px-4 flex justify-center"
                  variants={itemVariants}
                >
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;