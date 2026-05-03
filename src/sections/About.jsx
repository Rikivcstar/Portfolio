import { useState } from "react";
import { Code2, Lightbulb, Rocket, Users, ChevronDown } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "@/components/bits/ProfileCard";
import TextReveal from "@/components/bits/TextReveal";
import GradientText from "@/components/bits/GradientText";
import LogoLoop from "@/components/bits/LogoLoop";

const skills = [
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Livewire", icon: "https://cdn.simpleicons.org/livewire/FB70A9" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A048" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
];

const specialityItems = [
  {
    title: "Web Development",
    desc: "Building scalable and performant web applications using modern technologies like React, Next.js, and Laravel. I focus on writing clean, maintainable code and implementing robust backend architectures."
  },
  {
    title: "Freelancer",
    desc: "Creating intuitive and accessible interfaces that provide exceptional user experiences. I bridge the gap between design and development with pixel-perfect implementations."
  },
  {
    title: "System Architecture",
    desc: "Designing robust database schemas and API structures for complex systems. I ensure high availability and performance for enterprise-level applications."
  }
];

export const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#0b0b0d]">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Massive Intro (Full Width) */}
        <div className="mb-10 md:mb-12">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 text-[#b0fb3a] mb-4">
              <span className="text-xl">✦</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                About Me
              </span>
            </div>
          </AnimateOnScroll>

          <div className="w-full">
            <TextReveal
              text="I'm Riki Reza Ryansyah, a dedicated software engineer with a passion for crafting efficient and scalable web applications. With expertise in Laravel and React, I thrive on transforming complex problems into elegant solutions."
              className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] leading-[1.3] text-white font-medium tracking-tight"
            />
          </div>
        </div>

        {/* 2-Column Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Speciality Accordion */}
          <div className="lg:col-span-7 space-y-12">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
                <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                  Speciality
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-heading leading-tight mb-10">
                Areas of Expertise
              </h3>
            </AnimateOnScroll>

            <div className="space-y-4">
              {specialityItems.map((item, idx) => (
                <AnimateOnScroll key={idx} delay={0.1 * idx}>
                  <div
                    className={`border-b border-white/10 pb-6 cursor-pointer transition-all duration-300 ${openIndex === idx ? "border-[#b0fb3a]/40" : "hover:border-white/20"}`}
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  >
                    <div className="flex justify-between items-center py-4">
                      <h4 className={`text-2xl md:text-3xl font-bold font-heading transition-colors duration-300 ${openIndex === idx ? "text-[#b0fb3a]" : "text-white"}`}>
                        {item.title}
                      </h4>
                      <motion.div
                        animate={{ rotate: openIndex === idx ? 180 : 0 }}
                        className={`transition-colors duration-300 ${openIndex === idx ? "text-[#b0fb3a]" : "text-white/30"}`}
                      >
                        <ChevronDown size={28} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#a3a3a3] font-sans leading-relaxed text-[17px] pb-4 max-w-2xl">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Interactive Profile Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start lg:pt-10">
            <AnimateOnScroll delay={0.3} className="w-full">
              <div className="relative group w-full max-w-[580px]">
                <div className="absolute -inset-12 bg-[#b0fb3a]/10 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <ProfileCard
                  image="/profile.jpeg"
                  name="Riki Reza"
                  role="Software Engineer"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Skills Logo Loop Row */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="relative">
            <LogoLoop items={skills} speed="normal" direction="left" />
            <div className="mt-4">
              <LogoLoop items={skills.slice().reverse()} speed="normal" direction="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
