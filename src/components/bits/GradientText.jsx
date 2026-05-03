import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GradientText({
  children,
  className = "",
  colors = "#20b2a6, #4fd1c5, #20b2a6", // Default gradient colors
  animationSpeed = 5,
}) {
  return (
    <motion.span
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
      className={cn(
        "text-transparent bg-clip-text inline-block",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  );
}
