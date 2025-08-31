"use client";

import Project from "./Project";
import { motion } from "motion/react";

import crypto from "../../../public/images/crypto.png";
import affirm from "../../../public/images/affirm.png";
import delphy from "../../../public/images/delphy.png";

export default function Projects() {
  return (
    <div id="projects" className="w-full h-auto text-xl">
      <h3 className="text-2xl mb-4">Projects</h3>
      {/* Wrap the project list in a motion.div and apply the transform */}
      <motion.div className="flex flex-wrap gap-4 justify-center">
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
