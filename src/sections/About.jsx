import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean and maintainable code, following best practices and coding standards to ensure scalability and ease of collaboration.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I optimize applications for speed and efficiency, ensuring fast load times and smooth user experiences across all devices.",
  },
  {
    icon: Users,
    title: "Colaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Inovation",
    description:
      "I stay updated with the latest industry trends and technologies to bring innovative solutions to the table.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,{" "}
              <span className="font-serif italic font-normal text-white">
                one line of code at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Riki Reza Ryansyah, a dedicated software engineer with a
                passion for crafting efficient and scalable web applications.
                With expertise in Laravel and React, I thrive on transforming
                complex problems into
              </p>
              <p>
                elegant solutions that deliver exceptional user experiences. My
                commitment to clean code, performance optimization, and
                continuous learning drives me to stay at the forefront of
                industry trends and
              </p>
              <p>
                technologies. Let's build something amazing together and shape
                the future of web development with precision and innovation.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 ">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not only
                functional but also delightful, ensuring every line of code
                contributes to a seamless and engaging user journey."
              </p>
            </div>
          </div>
          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 flex flex-col items-start gap-4 animate-fade-in animation-delay-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
