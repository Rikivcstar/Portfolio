import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Reusable scroll-triggered animation wrapper
export const AnimateOnScroll = ({
  children,
  className = "",
  delay = 0,
  direction = "up", // up, down, left, right
  duration = 0.6,
  once = true,
  amount = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
        filter: "blur(8px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, ...directionOffset[direction], filter: "blur(8px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animation container
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Child item for stagger container
export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
  duration = 0.5,
}) => {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction],
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation
export const ScaleIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.85, filter: "blur(6px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
