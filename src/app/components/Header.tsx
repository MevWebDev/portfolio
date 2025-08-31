"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function Header() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const arrowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3], // Input range: Animate during the first 10% of scroll
    [1, 0] // Output range: Opacity goes from 1 to 0
  );

  const smoothX = useSpring(x, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });
  const smoothX2 = useSpring(x2, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      id="header"
      className="xs:w-[80%] w-full  flex flex-col items-center mt-30 mb-48 md:my-64 gap-16 md:gap-24 "
    >
      <div className=" w-fit flex justify-center items-center flex-col">
        <motion.p
          style={{ x: smoothX }}
          className="text-xl md:text-2xl self-start"
        >
          Hello, I'm
        </motion.p>
        <h1 className="text-4xl md:text-7xl">Szymon Grysiewicz</h1>
        <motion.p
          style={{ x: smoothX2 }}
          className="text-xl md:text-2xl self-end"
        >
          A Fullstack Developer
        </motion.p>
      </div>
      <div>
        <p className="text-center w-[80%] md:w-[50%] mx-auto">
          I’m a passionate full-stack developer and from Poland. You can check
          out my github or scroll down to see my projects.
        </p>
      </div>
      <motion.div
        style={{ opacity: arrowOpacity }}
        className="animate-bounce mt-8"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 5V19M5 12L12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
