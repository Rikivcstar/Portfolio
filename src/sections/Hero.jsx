import { Button } from "@/components/button";
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "Laravel",
  "Node.js",
  "JavaScript",
  "Php",
  "Livewire",
  "TailwindCSS",
  "MySQL",
  "MongoDB",
  "Docker",
  "Git",
  "Github",
  "TypeScript",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* green dot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 animate-pulse"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Colom -text content */}
          <div className="space-y-8 ">
            <div className="animate-fade-in ">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Laravel & React
              </span>
            </div>
            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-xl animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text ">digital</span>
                <br />
                expriences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                hi there! I'm Riki Reza Ryansyah, a passionate software engineer
                specializing in Laravel and React. I love building efficient and
                scalable web applications that deliver exceptional user
                experiences.
              </p>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                className="animate-fade-in animation-delay-1200"
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5 " />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <span className="text-muted-foreground text-sm ">Follow :</span>
              {[
                { icon: Github, href: "https://github.com/Rikivcstar" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rikirezariansyah",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/_rikyreza/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          {/* right colom -image content */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile img */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse " />
              <div className="relative glass rounded-3xl p-2 glow-border ">
                <img
                  src="/profile.jpeg"
                  alt="my profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating elements */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* state badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-primary ">5+</div>
                    <div className="text-xs text-muted-foreground">
                      Years Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skill */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-6">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
