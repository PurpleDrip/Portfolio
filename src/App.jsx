import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Model from "./Components/Model";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

const App = () => {
  const wholePage = useRef(null);
  const trackerPosition = useMousePosition();

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = gsap.utils.toArray(".animate");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
    });
  }, []);

  const trackerStyle = {
    position: "absolute",
    top: trackerPosition.y + window.scrollY,
    left: trackerPosition.x,
    transform: "translate(-50%, -50%)",
    width: "20px",
    height: "20px",
    backgroundColor: "#ffffff13",
    borderRadius: "50%",
    pointerEvents: "none",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  };

  return (
    <div ref={wholePage}>
      <Model />
      <Skills />
      <Projects />
      <Footer />
      <h1 className="mb-8 text-center">
        <code>&copy; 2024 All Rights Reserved</code>
      </h1>
      <div className="tracker" style={trackerStyle}></div>
      <ToastContainer />
    </div>
  );
};

export default App;
