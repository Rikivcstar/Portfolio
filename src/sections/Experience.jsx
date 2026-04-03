import { AnimateOnScroll } from "@/components/MotionWrappers";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Freelance Web Developer",
    company: "Self Employed",
    description:
      "Developing custom web applications for clients across various industries. Focused on delivering high-quality, responsive, and user-friendly solutions.",
    technologies: [
      "React",
      "Javascript",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Node.js",
      "WordPress",
    ],
    current: true,
  },
  {
    period: "2022 — 2025",
    role: "Store Crew",
    company: "Pt. Indomarco Prismatama",
    description:
      "Managed daily store operations, provided excellent customer service, and ensured a clean and organized shopping environment. Collaborated with team members to achieve sales targets and enhance customer satisfaction.",
    technologies: [
      "Customer Service",
      "Inventory Management",
      "Team Collaboration",
    ],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Part time Web Developer",
    company: "Freelance",
    description:
      "Built and maintained websites for small businesses and personal projects. Utilized modern web technologies to create responsive and visually appealing designs.",
    technologies: ["WordPress", "Php", "Codeigniter", "Mysql", "Bootstrap"],
    current: false,
  },
];

const TimelineItem = ({ exp, idx }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = idx % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative grid md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: idx * 0.15 + 0.2, type: "spring" }}
      >
        {exp.current && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className={`pl-8 md:pl-0 ${
          isEven
            ? "md:pr-16 md:text-right"
            : "md:col-start-2 md:pl-16"
        }`}
        initial={{
          opacity: 0,
          x: isEven ? -60 : 60,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : {}
        }
        transition={{ duration: 0.6, delay: idx * 0.15 + 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.div
          className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <span className="text-sm text-primary font-medium">
            {exp.period}
          </span>
          <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
          <p className="text-muted-foreground">{exp.company}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {exp.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            {exp.technologies.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimateOnScroll>
            <span
              className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase"
            >
              Career Journey
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 text-secondary-foreground"
            >
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                speaks volumes.
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-muted-foreground">
              A timeline of my professional growth, from curious beginner to
              senior engineer leading teams and building products at scale.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
