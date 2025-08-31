"use client";

import Project from "./Project";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import crypto from "../../../public/images/crypto.png";
import affirm from "../../../public/images/affirm.png";
import delphy from "../../../public/images/delphy.png";

export default function Projects() {
  const containerRef = useRef(null);

  // Track scroll progress relative to this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], // Animate as it enters from the bottom
  });

  // Map scroll progress to a vertical movement (from 100px below to its final position)
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  // Apply a spring for a smoother effect
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} id="projects" className="w-full h-auto text-xl">
      <h3 className="text-2xl">Projects</h3>
      {/* Wrap the project list in a motion.div and apply the transform */}
      <motion.div
        style={{ y: smoothY }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Project
          image={crypto}
          title="Title"
          stack="React
                 Firebase
                 Vite
                 SCSS
                 CSS modules"
          desc="A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.

"
          link="https://crypto-data-swart.vercel.app/"
          git="https://github.com/MevWebDev/CryptoData"
        />
        <Project
          image={affirm}
          title="Title"
          stack="React
                 Firebase
                 Vite
                 SCSS
                 CSS modules"
          desc="A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.

"
          link="https://affirm-qzwc.vercel.app/"
          git="https://github.com/MevWebDev/affirm"
        />
        <div className=" flex justify-center">
          <Project
            image={delphy}
            title="Title"
            stack="React
                   Firebase
                   Vite
                   SCSS
                   CSS modules"
            desc="A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.

"
            link="https://form.delphy.pl/"
            git="https://github.com/verzotokumpel/delphy-form"
          />
        </div>
      </motion.div>
    </div>
  );
}
