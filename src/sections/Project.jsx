import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const project = [
  {
    title: "Fintech dashboard",
    description:
      "A sleek and modern dashboard for managing financial data and transactions.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
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
  {
    title: "Project Management Tool",
    description:
      "A collaborative project management tool to streamline team workflows and communication.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
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
          <span className="text-secondary-foreground text-sm font-medium uppercase animate-fade-in tracking-wider">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent projects showcasing my skills in web
            development, problem-solving, and delivering high-quality digital
            experiences.
          </p>
        </div>
        {/* project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {project.map((proj, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 animation-delay-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 trasition-opacity duration-300">
                  <a
                    href={proj.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={proj.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
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
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
