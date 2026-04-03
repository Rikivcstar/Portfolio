import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion } from "framer-motion";

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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0">
        <motion.img
          src="/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
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
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Laravel & React
              </span>
            </motion.div>
            {/* headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-xl"
                {...fadeUp(0.25)}
              >
                Crafting{" "}
                <span className="text-primary glow-text ">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-lg"
                {...fadeUp(0.4)}
              >
                hi there! I'm Riki Reza Ryansyah, a passionate software engineer
                specializing in Laravel and React. I love building efficient and
                scalable web applications that deliver exceptional user
                experiences.
              </motion.p>
            </div>
            {/* CTA buttons */}
            <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.55)}>
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5 " />
                Download CV
              </AnimatedBorderButton>
            </motion.div>

            {/* social links */}
            <motion.div
              className="flex items-center gap-4"
              {...fadeUp(0.65)}
            >
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
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          {/* right colom -image content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
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
                <motion.div
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </motion.div>
                {/* state badge */}
                <motion.div
                  className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-primary ">5+</div>
                    <div className="text-xs text-muted-foreground">
                      Years Exp.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* skill */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
