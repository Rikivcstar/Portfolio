"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * DecryptedText
 *
 * @param {string} text - The ultimate text to be revealed
 * @param {number} speed - Speed of the decryption (lower is faster)
 * @param {number} maxIterations - Number of random shuffles before reveal
 * @param {boolean} sequential - If true, reveals characters one by one
 * @param {string} revealDirection - 'start', 'end', or 'center'
 * @param {boolean} useOriginalCharsOnly - If true, only uses characters from the original text for shuffling
 * @param {string} characters - Custom character set for shuffling
 * @param {string} className - Tailwind classes for the wrapper
 * @param {string} encryptedClassName - Tailwind classes for the "glitchy" text
 * @param {boolean} animateOn - 'hover' or 'view' (default: 'hover')
 */
export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const intervalRef = useRef(null);

  const getNextChar = (char) => {
    if (useOriginalCharsOnly) {
      const uniqueChars = [...new Set(text.replace(/\s/g, ""))];
      return uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
    }
    return characters[Math.floor(Math.random() * characters.length)];
  };

  useEffect(() => {
    let iteration = 0;
    const startAnimation = () => {
      clearInterval(intervalRef.current);
      setIsRevealing(true);

      intervalRef.current = setInterval(() => {
        setDisplayText((prevText) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration / maxIterations) return text[index];
              return getNextChar();
            })
            .join("")
        );

        iteration++;
        if (iteration >= text.length * maxIterations) {
          clearInterval(intervalRef.current);
          setIsRevealing(false);
          setDisplayText(text);
        }
      }, speed);
    };

    if (animateOn === "view") {
      startAnimation();
    } else if (isHovering && !isRevealing) {
      startAnimation();
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovering, text, speed, maxIterations, animateOn]);

  return (
    <motion.div
      className={`inline-block whitespace-pre-wrap ${className}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
      {...props}
    >
      <span className={isRevealing ? encryptedClassName : ""}>
        {displayText}
      </span>
    </motion.div>
  );
}
