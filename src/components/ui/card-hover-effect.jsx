import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardHeader image={item.image} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-surface border border-border rounded-full text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#141a1f] border border-white/[0.1] group-hover:border-primary/50 relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardHeader = ({ image }) => {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
        <img src={image} alt="project" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
    )
}

export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};
