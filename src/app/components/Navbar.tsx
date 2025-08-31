"use client";

import { useState, useEffect } from "react";
import { scrollToTarget } from "../utils/scroll";
import { playfair_display } from "../fonts";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={` sticky top-0 left-0 right-0 z-50 px-8 py-6 w-full text-xl transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center backdrop-blur-[10px] md:backdrop-blur-none">
        <button
          className={`${playfair_display.className} text-3xl`}
          onClick={() => scrollToTarget({ target: "home" })}
        >
          Shai
        </button>
        <div className="flex gap-3">
          <button
            className="animated-border-link2 text-sm md:text-base"
            onClick={() => scrollToTarget({ target: "home" })}
          >
            Home
          </button>
          <button
            className="animated-border-link2 text-sm md:text-base"
            onClick={() => scrollToTarget({ target: "projects" })}
          >
            Projects
          </button>
          <button
            className="animated-border-link2 text-sm md:text-base"
            onClick={() => scrollToTarget({ target: "about" })}
          >
            About me & Contact
          </button>
        </div>
      </div>
    </div>
  );
}
