import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out",
          isScrolled ? "pt-6" : "pt-8 px-8"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.nav
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-in-out",
            isScrolled
              ? "bg-[#0f1418]/80 backdrop-blur-xl shadow-2xl rounded-full px-8 py-4 w-[95%] md:w-[750px]"
              : "bg-transparent w-full max-w-7xl px-0 py-2"
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors"
            >
              3R
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveSection(link.label)}
                className={cn(
                  "relative text-base font-medium transition-colors hover:text-white",
                  activeSection === link.label
                    ? "text-white"
                    : "text-zinc-400"
                )}
              >
                {activeSection === link.label && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Moon size={22} />
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0f1418]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.label);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-3xl font-bold tracking-wider",
                  activeSection === link.label ? "text-primary" : "text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
