import React from "react";
import "./scroll.css";

const Skills = () => {
  const skillList = [
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      name: "GSAP",
      link: "https://greensock.com/",
    },
    {
      name: "Framer Motion",
      link: "https://www.framer.com/",
    },
    {
      name: "Three.js",
      link: "https://threejs.org/",
    },
    {
      name: "Scroll Trigger",
      link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
    },
    {
      name: "Toastify",
      link: "https://fkhadra.github.io/react-toastify/introduction",
    },
    {
      name: "Swiper.js",
      link: "https://swiperjs.com/",
    },
    {
      name: "Formspree",
      link: "https://formspree.io/",
    },
  ];

  return (
    <div
      id="skills"
      className="h-[15rem] flex items-center justify-center mt-20"
    >
      <div className="wrapper h-4/5  w-full">
        {[...Array(8)].map((_, index) => (
          <a
            href={skillList[index].link}
            target="_blank"
            className="skills image-container flex items-center justify-center"
            data-count={index + 1}
            key={index}
            style={{
              animationDelay: `${(30 / 8) * (8 - (index + 1)) * -1}s`,
            }}
          >
            {skillList[index].name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
