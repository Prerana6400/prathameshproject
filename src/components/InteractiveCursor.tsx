import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/use-scroll-animation';

const InteractiveCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Smooth cursor following
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;

    const animateCursor = () => {
      currentX += (mousePosition.x - currentX) * 0.1;
      currentY += (mousePosition.y - currentY) * 0.1;

      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      cursorDot.style.transform = `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`;

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Add hover effects for interactive elements
    const handleMouseEnter = () => {
      cursor.classList.add('active');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('active');
    };

    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [tabindex]'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 bg-primary/30 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default InteractiveCursor; 