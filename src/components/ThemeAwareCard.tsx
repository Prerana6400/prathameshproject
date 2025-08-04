import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeAwareCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glass';
}

const ThemeAwareCard = ({ 
  children, 
  className = "", 
  variant = 'default' 
}: ThemeAwareCardProps) => {
  const { isDark, isLight } = useTheme();

  const getCardStyles = () => {
    switch (variant) {
      case 'elevated':
        return isDark 
          ? "bg-card/80 backdrop-blur-md border border-border/50 shadow-2xl shadow-black/20"
          : "bg-card/90 backdrop-blur-sm border border-border/30 shadow-xl shadow-primary/10";
      case 'glass':
        return isDark
          ? "bg-card/20 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-card/40 backdrop-blur-lg border border-primary/20 shadow-md";
      default:
        return isDark
          ? "bg-card/60 backdrop-blur-md border border-border/40 shadow-lg"
          : "bg-card/80 backdrop-blur-sm border border-border/20 shadow-md";
    }
  };

  const getHoverStyles = () => {
    if (isDark) {
      return {
        scale: 1.02,
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        borderColor: "hsl(var(--primary) / 0.3)",
      };
    } else {
      return {
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)",
        borderColor: "hsl(var(--primary) / 0.4)",
      };
    }
  };

  return (
    <motion.div
      className={`rounded-xl p-6 transition-all duration-300 ${getCardStyles()} ${className}`}
      whileHover={getHoverStyles()}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      style={{
        background: isDark 
          ? `linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--muted) / 0.3))`
          : `linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--background) / 0.5))`
      }}
    >
      {/* Theme-aware glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle at center, hsl(var(--accent) / 0.1) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ThemeAwareCard; 