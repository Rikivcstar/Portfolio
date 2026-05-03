import { AnimateOnScroll } from "@/components/MotionWrappers";
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

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0b0b0d] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 max-w-[1200px]">
        <AnimateOnScroll>
          <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
            <span className="text-xl">✦</span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
              Tech Stack
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tighter text-white font-heading leading-none">
              Tools & Technologies
            </h2>
            <p className="text-[#a3a3a3] text-lg font-sans max-w-sm">
              The modern stack I use to build high-performance, scalable web applications.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="relative">
        <LogoLoop items={skills} speed="normal" direction="left" />
        <div className="mt-4">
            <LogoLoop items={skills.slice().reverse()} speed="normal" direction="right" />
        </div>
      </div>
    </section>
  );
};
