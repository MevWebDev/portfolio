import Image from "next/image";
import { Fluid } from "./components/fluid";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Header />
      <div className="w-[80%] mx-auto flex flex-col gap-8 items-center">
        <Projects />
        <About />
      </div>

      <Fluid />
    </div>
  );
}
