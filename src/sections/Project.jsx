import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimateOnScroll } from "@/components/MotionWrappers";
import FlowingMenu from "@/components/bits/FlowingMenu";
import ProjectModal from "@/components/ui/ProjectModal";

const projects = [
  {
    title: "System Management Ekstrakulikuler",
    description: "A comprehensive and automated system designed for managing extracurricular activities in educational institutions. Features include real-time attendance tracking, student performance monitoring, and streamlined reporting for faculty and parents.",
    image: "/projects/ekskul.png",
    tags: ["Php Native", "Tailwind CSS", "MySQL"],
    github: "https://github.com/Rikivcstar/ekstraulikuler-sistem",
    link: "https://siskul.mtsn1lebak.sch.id/",
  },
  {
    title: "Web Tour & Travel",
    description: "A high-performance travel booking platform that offers an immersive user experience. It features integrated payment gateways, dynamic destination management, and a robust administrative panel for handling reservations efficiently.",
    image: "/projects/tour.png",
    tags: ["Next.js", "React", "PostgreSQL"],
    github: "https://github.com/Rikivcstar/TourGO",
    link: "https://tour-go.vercel.app/",
  },
  {
    title: "TopUp Game & Pulsa",
    description: "A secure and automated platform for instant digital top-ups. Built with scalability in mind, it integrates Midtrans for reliable payment processing and provides a seamless checkout flow for gamers and mobile users.",
    image: "/projects/game.png",
    tags: ["Laravel 12", "Livewire", "Midtrans"],
    github: "https://github.com/Rikivcstar/topup-game",
    link: "https://topup-game.vercel.app/",
  },
  {
    title: "E-Commerce Laravel Store",
    description: "A modern e-commerce ecosystem featuring a sophisticated administrative interface powered by Filament. Includes full cart functionality, order tracking, and inventory management tailored for growing businesses.",
    image: "/projects/ecomerce.png",
    tags: ["Laravel 12", "Livewire", "Filament"],
    github: "https://github.com/Rikivcstar/E-Commerce-Store",
    link: "#",
  },
  {
    title: "Booking Hotel System",
    description: "A sleek hotel reservation system that prioritizes speed and clarity. Features real-time room availability, complex date range calculations, and a responsive dashboard for both guests and property managers.",
    image: "/projects/hotel.png",
    tags: ["React", "Node.js", "Tailwind"],
    github: "https://github.com/Rikivcstar/Cabin-hotel",
    link: "https://booking-hotel.vercel.app",
  },
];

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-32 relative overflow-visible bg-[#0b0b0d]">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Header */}
        <div className="mb-24">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
              <span className="text-xl">✦</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                My Work
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="text-[3.5rem] md:text-[5.5rem] font-bold tracking-tighter text-white font-heading leading-[1.05]">
                Selected Projects
              </h2>
              <p className="text-[#a3a3a3] text-[17px] md:text-lg leading-relaxed font-sans max-w-sm pb-2">
                A curated selection of technical projects. Hover to reveal visual details, click to explore the full case study.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Flowing Menu Section */}
      <div className="relative z-20">
        <FlowingMenu items={projects} onItemClick={handleProjectClick} />
      </div>

      {/* Modal for Details */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Global CTA */}
      <div className="container mx-auto px-6 mt-32 flex justify-center">
        <AnimateOnScroll delay={0.2}>
          <a
            href="https://github.com/Rikivcstar"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-[15px] font-medium tracking-wide rounded-full"
          >
            Explore all on GitHub
            <ArrowUpRight className="w-5 h-5 ml-1" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

