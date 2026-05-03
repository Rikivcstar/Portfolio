import { cn } from "../../lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border/50 bg-surface/50 p-4 transition duration-200 hover:shadow-xl hover:border-primary/50",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-white">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
