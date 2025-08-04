import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeAwareBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'gradient' | 'pattern' | 'animated';
}

const ThemeAwareBackground = ({ 
  children, 
  className = "", 
  variant = 'gradient' 
}: ThemeAwareBackgroundProps) => {
  const { isDark, isLight } = useTheme();

  const getBackgroundStyles = () => {
    switch (variant) {
      case 'pattern':
        return isDark
          ? "bg-[radial-gradient(circle_at_50%_50%,hsl(var(--muted)/0.1)_0%,transparent_50%)]"
          : "bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05)_0%,transparent_50%)]";
      case 'animated':
        return isDark
          ? "bg-gradient-to-br from-background via-muted/20 to-background"
          : "bg-gradient-to-br from-background via-primary/5 to-background";
      default:
        return isDark
          ? "bg-gradient-to-br from-background via-muted/10 to-background"
          : "bg-gradient-to-br from-background via-accent/5 to-background";
    }
  };

  const getAnimatedElements = () => {
    if (variant !== 'animated') return null;

    return (
      <>
        {/* Animated background elements */}
        <motion.div
          className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl ${
            isDark ? 'bg-primary/10' : 'bg-accent/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-20 w-24 h-24 rounded-full blur-2xl ${
            isDark ? 'bg-accent/10' : 'bg-primary/10'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-40 h-40 rounded-full blur-3xl ${
            isDark ? 'bg-secondary/5' : 'bg-muted/10'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </>
    );
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${getBackgroundStyles()} ${className}`}>
      {/* Theme-aware animated elements */}
      {getAnimatedElements()}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Theme-aware overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.03) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 80%, hsl(var(--accent) / 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.02) 0%, transparent 50%)"
        }}
      />
    </div>
  );
};

export default ThemeAwareBackground; 