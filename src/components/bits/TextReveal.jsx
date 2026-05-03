import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextReveal = ({ text, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "center center"]
  });

  const words = text.split(" ");

  return (
    <p ref={targetRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.30, 1]);
  return (
    <span className="relative mr-[0.3em] mt-1">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextReveal;
