import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const FlowingMenu = ({ items, onItemClick }) => {
  return (
    <div className="w-full flex flex-col border-t border-white/10">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the floating image
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className="relative group border-b border-white/10 py-10 md:py-16 cursor-pointer overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        <h3 className="text-[2.5rem] md:text-[4.5rem] font-bold text-white font-heading tracking-tighter group-hover:translate-x-4 transition-transform duration-500 group-hover:text-[#b0fb3a]">
          {item.title}
        </h3>
        <p className="text-[#a3a3a3] font-sans text-lg hidden md:block group-hover:text-white transition-colors">
          {item.tags[0]} / 2026
        </p>
      </div>

      {/* Floating Image Reveal */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
          pointerEvents: "none"
        }}
        className="absolute top-0 left-0 w-[300px] md:w-[450px] aspect-video z-20 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-opacity duration-300"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default FlowingMenu;
