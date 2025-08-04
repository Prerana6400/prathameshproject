import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MagneticButton = ({ 
  children, 
  className = "", 
  onClick, 
  disabled = false 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    setPosition({
      x: deltaX * 0.1,
      y: deltaY * 0.1
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      animate={{
        x: position.x,
        y: position.y,
        scale: disabled ? 0.95 : 1
      }}
      whileHover={{
        scale: disabled ? 0.95 : 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: disabled ? 0.95 : 0.98,
        transition: { duration: 0.1 }
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton; 