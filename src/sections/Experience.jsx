import { AnimateOnScroll } from "@/components/MotionWrappers";
import { Timeline } from "@/components/ui/timeline";
import SpotlightCard from "@/components/bits/SpotlightCard";
import { CheckCircle2, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Freelance Web Developer",
    company: "Self Employed",
    description:
      "Developing custom web applications for clients across various industries. Focused on delivering high-quality, responsive, and user-friendly solutions using modern tech stacks.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL", "Tailwind CSS", "Node.js"],
    current: true,
  },
  {
    period: "2022 — 2025",
    role: "Store Crew",
    company: "Pt. Indomarco Prismatama",
    description:
      "Managed daily store operations, provided excellent customer service, and ensured a clean and organized shopping environment. Developed strong communication and problem-solving skills.",
    technologies: ["Customer Service", "Inventory Management", "Team Collaboration"],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Junior Web Developer",
    company: "Freelance",
    description:
      "Built and maintained websites for small businesses and personal projects. Utilized PHP and WordPress to create functional and visually appealing designs for local clients.",
    technologies: ["WordPress", "PHP", "Codeigniter", "MySQL", "Bootstrap"],
    current: false,
  },
];

export const Experience = () => {
  const timelineData = experiences.map((exp, idx) => ({
    title: exp.period,
    content: (
      <SpotlightCard className="p-8 md:p-10 border-white/5 bg-[#0b0b0d]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight mb-1">
                {exp.role}
              </h3>
              <p className="text-[#b0fb3a] font-bold font-sans tracking-wide uppercase text-sm">
                {exp.company}
              </p>
            </div>
            {exp.current && (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#b0fb3a]/10 border border-[#b0fb3a]/20 rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b0fb3a] animate-pulse" />
                <span className="text-[11px] font-black text-[#b0fb3a] uppercase tracking-widest">Current</span>
              </div>
            )}
          </div>

          <p className="text-[#a3a3a3] text-lg leading-relaxed font-sans max-w-2xl">
            {exp.description}
          </p>

          <div className="h-px bg-white/5 w-full" />

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-[#d1d1d1] font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    ),
  }));

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#0b0b0d]">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-20">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
              <span className="text-xl">✦</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                Experience
              </span>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter text-white font-heading leading-[1.1]">
                Career Timeline
              </h2>
              <p className="text-[#a3a3a3] text-[17px] md:text-lg leading-relaxed font-sans max-w-sm pb-2">
                A journey through my professional development and the milestones that shaped my expertise.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Aceternity UI Timeline */}
        <div className="relative z-20">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

