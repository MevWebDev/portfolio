"use client";

import Project from "./Project";
import { useRef } from "react";

import { motion, useScroll, useTransform, useSpring } from "motion/react";

import crypto from "../../../public/images/crypto.png";
import affirm from "../../../public/images/affirm.png";
import delphy from "../../../public/images/delphy.png";
import { playfair_display } from "../fonts";

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Animate from when it enters to when it leaves the screen
  });
  const x = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  const smoothX = useSpring(x, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="projects" className="w-full h-auto text-xl">
      <h3 className={`${playfair_display.className} text-2xl md:text-4xl mb-4`}>
        Projects
      </h3>
      {/* Wrap the project list in a motion.div and apply the transform */}
      <motion.div className="md:grid md:grid-cols-2 gap-16 justify-center">
        <Project
          image={crypto}
          title="CryptoData"
          stack="React Typescript Tailwind Vite
                 "
          desc="A sleek, user-friendly app that lets users check real-time cryptocurrency prices, track market trends, and stay updated on their favorite coins."
          link="https://crypto-data-swart.vercel.app/"
          git="https://github.com/MevWebDev/CryptoData"
        />
        <Project
          image={affirm}
          title="Affirm"
          stack="Next.js
                 Typescript
                 MaterialUI
                 "
          desc="Landing page for crypto company related to fashion.

"
          link="https://affirm-qzwc.vercel.app/"
          git="https://github.com/MevWebDev/affirm"
        />

        <Project
          image={delphy}
          title="Delphy form"
          stack="Next.js
                   Typescript
                   MaterialUI
"
          desc="Designed and implemented a functional form-
focused webpage tailored to meet the business
needs of a music studio.

"
          link="https://form.delphy.pl/"
          git="https://github.com/verzotokumpel/delphy-form"
        />
        <div ref={containerRef} className="flex flex-col gap-4 md:gap-8">
          <motion.p
            style={{ x: smoothX }}
            className={`${playfair_display.className} text-4xl md:mb-4`}
          >
            Want see more?
          </motion.p>
          <p className="text-sm md:text-xl">
            If you'd like to see more fullstack projects, you can check out my{" "}
            <a
              href="https://github.com/MevWebDev/Warely"
              target="_blank"
              className="animated-border-link"
            >
              Warehouse Managment System API
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/MevWebDev/GymApp"
              target="_blank"
              className="animated-border-link"
            >
              Gymify - Gym Social Media
            </a>
          </p>

          <p className="text-sm md:text-xl">
            If you want to play some games you can visit{" "}
            <a
              href="https://mevwebdev.github.io/battleships/"
              target="blank"
              className="animated-border-link"
            >
              Battleships
            </a>{" "}
            or{" "}
            <a
              href="https://mevwebdev.github.io/tic-tac-toe/"
              target="blank"
              className="animated-border-link"
            >
              Tic-Tac-Toe
            </a>
          </p>
          <p className="text-sm md:text-xl">
            Warning! These are really old. Written in plain Javascript without
            responsive design.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
