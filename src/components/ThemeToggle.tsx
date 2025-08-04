import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };



  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--muted)))'
          : 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--background)))'
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)'
        }}
      />

      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {theme === 'light' && (
            <motion.div
              key="light"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>
          )}
          
          {theme === 'dark' && (
            <motion.div
              key="dark"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Moon className="w-5 h-5 text-blue-400" />
            </motion.div>
          )}
          
          {theme === 'system' && (
            <motion.div
              key="system"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Monitor className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' && 'Light Mode'}
        {theme === 'dark' && 'Dark Mode'}
        {theme === 'system' && 'System Theme'}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 