import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeTransitionNotification = () => {
  const { theme, isDark } = useTheme();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme]);

  const getThemeInfo = () => {
    switch (theme) {
      case 'light':
        return { icon: Sun, text: 'Light Mode', color: 'text-yellow-500' };
      case 'dark':
        return { icon: Moon, text: 'Dark Mode', color: 'text-blue-400' };
      case 'system':
        return { icon: Monitor, text: 'System Theme', color: 'text-muted-foreground' };
      default:
        return { icon: Monitor, text: 'System Theme', color: 'text-muted-foreground' };
    }
  };

  const themeInfo = getThemeInfo();
  const IconComponent = themeInfo.icon;

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          className="fixed top-20 right-6 z-[9999]"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border ${
            isDark 
              ? 'bg-card/80 border-border/50 text-foreground' 
              : 'bg-card/90 border-border/30 text-foreground'
          }`}>
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <IconComponent className={`w-5 h-5 ${themeInfo.color}`} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm font-medium"
            >
              {themeInfo.text}
            </motion.span>
            
            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransitionNotification; 