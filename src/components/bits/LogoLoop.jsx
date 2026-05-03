import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/utils/cn";

const LogoLoop = ({ items, direction = "left", speed = "fast", className }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#b0fb3a]/30 hover:bg-[#b0fb3a]/5 transition-all duration-300 group cursor-default"
          >
            {item.icon && (
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-5 h-5 object-contain transition-all duration-300 group-hover:scale-110"
              />
            )}
            <span className="text-sm font-bold text-[#d1d1d1] group-hover:text-white tracking-wide whitespace-nowrap">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoLoop;
