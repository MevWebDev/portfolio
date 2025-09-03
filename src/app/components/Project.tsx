"use client";

import Image from "next/image";
import { useRef } from "react";
import { StaticImageData } from "next/image";
import { motion, useTransform, useSpring, useScroll } from "motion/react";
import { playfair_display } from "../fonts";

interface ProjectProps {
  image: string | StaticImageData;
  title: string;
  stack: string;
  desc: string;
  link: string;
  git: string;
}

export default function Project({
  image,
  title,
  stack,
  desc,
  link,
  git,
}: ProjectProps) {
  // Track scroll progress relative to this component
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], // Animate as it enters from the bottom
  });
  // Map scroll progress to a vertical movement (from 100px below to its final position)
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  // Apply a spring for a smoother effect
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      ref={containerRef}
      style={{ y: smoothY }}
      className="flex  flex-col gap-2 mb-12"
    >
      <a href={link} target="_blank">
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="relative w-full ">
            {" "}
            <Image
              src={image}
              style={{ width: "100%", height: "auto" }}
              alt={title}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </a>
      <h3 className="text-2xl mt-2">{title}</h3>
      <p className={`italic text-sm`}>{stack}</p>
      <p className="text-gray-500 text-base max-w-[90%]">{desc}</p>
      <a
        href={git}
        className="animated-border-link w-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className=" w-fit">View project</p>
      </a>
    </motion.div>
  );
}
