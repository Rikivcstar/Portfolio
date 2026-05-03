import { AnimateOnScroll } from "@/components/MotionWrappers";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Riki is an exceptional engineer. His ability to build robust Laravel backends while maintaining a pixel-perfect React frontend is rare. He delivered our project ahead of schedule with zero major bugs.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Riki was a transformative experience for our startup. He didn't just write code; he helped us architect a scalable system that currently handles thousands of users daily.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "His expertise in UI/UX and motion design is world-class. He turned our boring dashboard into a premium experience that our clients absolutely love. Highly recommended!",
    author: "Emily Watson",
    role: "Design Lead, Creative Labs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Riki's problem-solving skills are top-notch. He tackled our complex inventory management system with ease and provided creative solutions we hadn't even considered.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Professional, communicative, and technically brilliant. Riki is the kind of developer every team dreams of having. He truly understands the business side of development.",
    author: "Jessica Lee",
    role: "Operations Manager, Global Logistics",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    quote:
      "The web app Riki built for us is incredibly fast and responsive. His mastery of Next.js and performance optimization is clearly visible in the final product.",
    author: "Marcus Thorne",
    role: "Technical Founder, SaaS Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-[#0b0b0d]">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-20">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
              <span className="text-xl">✦</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                Social Proof
              </span>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter text-white font-heading leading-[1.1]">
                Client Testimonials
              </h2>
              <p className="text-[#a3a3a3] text-[17px] md:text-lg leading-relaxed font-sans max-w-sm pb-2">
                Hear from the people and companies I've helped transform through technology and design.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Infinite Moving Cards */}
      <div className="mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="mt-4">
          <InfiniteMovingCards
            items={testimonials.slice().reverse()}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
