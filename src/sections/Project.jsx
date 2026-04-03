import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";
import { motion } from "framer-motion";

const project = [
  {
    title: "System Manegement Ekstrakulikuler",
    description:
      "A system for managing the activities of the extracurricular department of a school.",
    image: "/projects/ekskul.png",
    tags: ["Php Native", "Tailwind CSS", "MySQL"],
    github: "https://github.com/Rikivcstar/ekstraulikuler-sistem",
    link: "https://siskul.mtsn1lebak.sch.id/",
  },
  {
    title: "Web Tour & Travel",
    description:
      "Web Tour & Travel with payment gateway and booking system.",
    image: "/projects/tour.png",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", 'Node.js'],
    github: "https://github.com/Rikivcstar/TourGO",
    link: "https://tour-go.vercel.app/",
  },
  {
    title: "Website Layanan TopUp Game, Pulsa, Voucher & Dll",
    description:
      "A system for topup game, pulsa, voucher & dll with payment gateway and booking system.",
    image: "/projects/game.png",
    tags: ["Laravel 12", "Livewire", "Filament", "Tailwind CSS", "MySQL", 'Midtrans'],
    github: "https://github.com/Rikivcstar/topup-game",
    link: "https://topup-game.vercel.app/",
  },
  {
    title: "E-Commerce Website Laravel",
    description:
      "A website for an e-commerce business that sells products online.",
    image: "/projects/ecomerce.png",
    tags: ["Laravel 12", "Livewire", "Filament", "Tailwind CSS", "MySQL", "Payment Gateway"],
    github: "https://github.com/Rikivcstar/E-Commerce-Store",
    link: "#",
  },
  {
    title: "Booking Hotel",
    description:
      "A website for a hotel booking system that allows users to book hotels online.",
    image: "/projects/hotel.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Payment Gateway"],
    github: "https://github.com/Rikivcstar/Cabin-hotel",
    link: "https://booking-hotel.vercel.app",
  },
  {
    title: "E-commerce platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
    image: "/projects/project2.png",
    tags: ["Laravel", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
  {
    title: "Ai writer assistant",
    description:
      "An AI-powered writing assistant that helps users generate high-quality content quickly.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "Node.js", "AI"],
    github: "#",
    link: "#",
  },

];

export const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <AnimateOnScroll>
            <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider">
              Featured Work
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make an impact.
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-muted-foreground">
              A selection of my recent projects showcasing my skills in web
              development, problem-solving, and delivering high-quality digital
              experiences.
            </p>
          </AnimateOnScroll>
        </div>
        {/* project cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {project.map((proj, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="group glass rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  {/* overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={proj.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={proj.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                {/* content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm ">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 ">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {/* CTA */}
        <AnimateOnScroll delay={0.2} className="text-center mt-12">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
