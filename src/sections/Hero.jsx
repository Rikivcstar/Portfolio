import { Button } from "@/components/Button";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Download,
  Hand,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion } from "framer-motion";
import DecryptedText from "@/components/bits/DecryptedText";
import Squares from "@/components/bits/Squares";

const skills = [
  "Software Engineer",
  "Freelancer",
  "Web Developer",
  "Fullstack Developer",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0b0d]">
      {/* ReactBits Squares Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={45}
          borderColor="rgba(176, 251, 58, 0.15)"
          hoverFillColor="rgba(176, 251, 58, 0.1)"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, transparent 0%, #0b0b0d 85%)'
          }}
        />
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col w-full max-w-[1200px] mx-auto">
          {/* Subtitle */}
          <motion.div {...fadeUp(0.1)} className="mb-8 flex items-center gap-3 text-white/90">
            <Hand className="text-[#b0fb3a] w-6 h-6 stroke-[2.5]" />
            <span className="text-[17px] font-normal tracking-wide">Hey! It's me Riki,</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            className="text-[2.5rem] leading-[1] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] tracking-tighter text-white font-heading"
            {...fadeUp(0.25)}
          >
            Crafting <span className="text-[#b0fb3a]">purpose</span><br className="hidden md:block" />
            <span className="text-[#b0fb3a]">driven experiences</span><br />
            that inspire &<br />
            engage.
          </motion.h3>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-white/[0.08] mt-16 md:mt-32 mb-10"
            {...fadeUp(0.4)}
          />

          {/* Bottom Area: Socials and Paragraph */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-12 w-full">

            {/* Social Links */}
            <motion.div className="flex flex-wrap gap-6 md:gap-8 pt-2" {...fadeUp(0.65)}>
              {[
                { name: "LINKEDIN", href: "https://www.linkedin.com/in/rikirezariansyah" },
                { name: "GITHUB", href: "https://github.com/Rikivcstar" },
                { name: "INSTAGRAM", href: "https://www.instagram.com/_rikyreza/" },
                { name: "GMAIL", href: "mailto:rikirezariansyah@gmail.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="text-[13px] tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase font-medium"
                >
                  {social.name} <ArrowUpRight size={14} className="mb-0.5" />
                </a>
              ))}
            </motion.div>

            {/* Paragraph & Button */}
            <motion.div className="max-w-[480px] flex flex-col gap-10" {...fadeUp(0.5)}>
              <p className="text-[#a3a3a3] text-[17px] md:text-lg leading-relaxed font-sans">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
              </p>

              <div className="flex md:justify-end w-full">
                <a href="#about" className="px-7 py-3.5 w-fit rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-[15px] font-medium tracking-wide">
                  Know me better
                </a>
              </div>
            </motion.div>

          </div>
        </div>
        {/* Large Luxury Marquee */}
        <div className="mt-32 border-y border-white/5 bg-white/[0.02] overflow-hidden py-10 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            <div className="flex gap-16 px-6">
              {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-16">
                  <span
                    className="text-4xl md:text-6xl font-bold tracking-tight uppercase"
                    style={{
                      WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
                      color: "transparent",
                    }}
                  >
                    {skill}
                  </span>
                  <span className="text-primary text-4xl md:text-6xl">✦</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
