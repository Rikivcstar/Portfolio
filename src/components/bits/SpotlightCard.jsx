import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(176, 251, 58, 0.1)" }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d] p-1 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full h-full rounded-[1.9rem] bg-[#0b0b0d]/80 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
