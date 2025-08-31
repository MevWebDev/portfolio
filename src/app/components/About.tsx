"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react"; // Import useRef

export default function About() {
  // 1. Create a ref for the component's container
  const containerRef = useRef(null);

  // 2. Pass the ref to useScroll to track this component's visibility
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Animate from when it enters to when it leaves the screen
  });

  // 3. Adjust the transform to animate as the component scrolls into view
  const x = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  const smoothX = useSpring(x, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    // 4. Attach the ref to the container element
    <div ref={containerRef} id="about" className="w-full flex flex-col mb-16">
      <div className=" py-6 md:w-[50%] text-xl flex flex-col gap-2 self-end">
        <motion.p style={{ x: smoothX }}>Read More</motion.p>
        <p className=" text-4xl md:text-6xl">About me</p>
        <div className="flex flex-col  gap-8 md:gap-16 my-2">
          <p className=" text-[1.2rem] md:text-xl">
            My name is Szymon and I'm a passionate Full Stack Engineer with a
            deep love for JavaScript technologies. My world revolves around the
            ever-evolving realm of Web Development where I continuously expand
            my knowledge and skills to craft exceptional digital experiences.
            Beyond mastering the core technologies, I thrive on exploring
            cutting-edge innovations, always on the lookout for new tools and
            techniques to tackle real-world challenges creatively and
            efficiently. My commitment to staying at the forefront of technology
            is the driving force behind my journey as a developer.
          </p>
          <p className=" text-[1.2rem] md:text-xl">
            I love learning new things and technologies and I’m always gathering
            inspiration and exploring different ideas and techniques. I’m
            curious and passionate, especially when it comes to art, music and
            gaming.
          </p>
        </div>
      </div>
      <div className="px-8 py-6 md:w-[50%] text-xl flex flex-col gap-6 md:gap-12 self-start text-start">
        <div className="flex flex-col gap-1">
          <p className="text-4xl md:text-6xl">Contact me</p>
          <motion.p style={{ x: smoothX }}>Let's get in touch</motion.p>
        </div>
        <div className="flex flex-col">
          <a
            href="mailto:grysiewiczszymon47@gmail.com"
            className="animated-border-link w-fit self-start text-xl md:text-3xl"
          >
            grysiewiczszymon47@gmail.com
          </a>
          <div className="flex gap-2 self-start">
            <a
              className="animated-border-link2"
              href="https://www.linkedin.com/in/szymon-grysiewicz-850049289"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="animated-border-link2"
              href="https://github.com/MevWebDev"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
