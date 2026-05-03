"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
  const paths = [
    "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
    "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
    "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
    "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
    "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
    "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
    "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
    "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
    "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
    "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
    "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
    "M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475",
    "M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467",
    "M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459",
    "M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451",
    "M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443",
    "M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435",
    "M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427",
    "M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center",
        className
      )}
    >

      <svg
        className="pointer-events-none absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_242_278)">
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke="url(#paint0_radial_242_278)"
              strokeOpacity="0.4"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          ))}
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(348 158) rotate(90) scale(158 348)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter
            id="filter0_f_242_278"
            x="-400"
            y="-700"
            width="1496"
            height="1716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_242_278"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
