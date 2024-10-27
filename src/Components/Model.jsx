import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Typewriter } from "react-simple-typewriter";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const notifyRef = useRef(null);

  useEffect(() => {
    gsap.from(".title", {
      duration: 1,
      autoAlpha: 0,
      y: -200,
      ease: "power2.inOut",
    });
    gsap.from(".intro-box", {
      duration: 0.8,
      autoAlpha: 0,
      delay: 0.3,
      y: 200,
      ease: "power2.inOut",
    });
    gsap.from(".credits-btn", {
      duration: 1,
      autoAlpha: 0,
      x: 200,
      delay: 0.8,
      ease: "power2.inOut",
    });
  }, []);

  const handleButtonClick = () => {
    if (notifyRef.current) {
      notifyRef.current.classList.toggle("invisible");
    }
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(14, 0.8, -3);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(ambientLight);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    const container = document.getElementById("Container");
    if (container) {
      container.appendChild(renderer.domElement);
    }

    const loader = new GLTFLoader();
    loader.load(
      "model//minecraft_saturn.glb",
      (gltf) => {
        const dragon = gltf.scene;
        const actualModel =
          dragon.children.length > 0 ? dragon.children[0] : dragon;

        actualModel.position.set(-3, -1, -1);
        actualModel.scale.set(3, 3, 3);

        const rotationAngle1 = THREE.MathUtils.degToRad(210);
        const rotationAngle2 = THREE.MathUtils.degToRad(120);
        dragon.rotation.x = rotationAngle1;
        dragon.rotation.z = -rotationAngle2;

        scene.add(dragon);

        const mixer = new THREE.AnimationMixer(dragon);

        const animate = (time) => {
          requestAnimationFrame(animate);
          mixer.update(0.016);
          dragon.rotation.y += 0.0003;
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr) => {
        console.log("Model " + (xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened:", error);
      }
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        id="Container"
        className="min-h-screen relative w-full pl-[15rem] z-0"
      ></div>
      <div className="title absolute top-10 right-1/2 translate-x-1/2 flex flex-col items-center">
        <h2 className="text-2xl">
          <code>Welcome to my Universe.</code>
        </h2>
        <Typewriter
          words={["Eat", "Sleep", "Code", "Repeat!"]}
          loop={true}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <button
        className="credits-btn bg-white p-2 absolute top-1/2 -right-9 -rotate-90 text-black rounded text-sm z-20"
        onClick={handleButtonClick}
      >
        <code>About Model</code>
      </button>
      <div
        className="invisible h-[4rem] w-[32rem] z-20 bg-gray-800 absolute top-1/2 right-[3rem] -translate-y-1/2 flex items-end justify-center p-3 gap-4"
        ref={notifyRef}
      >
        <div className="credits">
          This work is based on
          <a
            href="https://sketchfab.com/3d-models/minecraft-saturn-c837b62bb51248ff849703389fd44369"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300"
          >
            &nbsp;Minecraft Saturn&nbsp;
          </a>
          by
          <a
            href="https://sketchfab.com/durvesh123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300"
          >
            &nbsp;Durvesh S&nbsp;
          </a>
          , licensed under
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300"
          >
            &nbsp;CC-BY-4.0.
          </a>
        </div>

        <button className="h-10" onClick={handleButtonClick}>
          <img src="/icons/cancel.png" alt="" />
        </button>
      </div>
      <div className="blur-bg absolute left-[35rem] top-1/2"></div>
      <div className="blur-bg-blue absolute left-0 bottom-[15rem] -z-10"></div>
      <div className="intro-box h-[37rem] w-[25rem] left-[10rem] rounded-3xl bg-blue-800 absolute top-[8rem] pl-[1rem]">
        <h1
          className="text-[3rem] text-red-400"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
          }}
        >
          Gurupreeth
        </h1>
        <h2
          className="text-[1.5rem] text-red-400 pl-8"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
          }}
        >
          <span class="emphasize">.</span> Frontend Developer
        </h2>
        <h2
          className="text-[1.5rem] text-red-400 pl-8"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
          }}
        >
          <span class="emphasize">.</span> From Bangalore
        </h2>
        <p className="text-right mt-4 pr-4">
          <code>
            "I’m a frontend developer with a passion for creating dynamic and
            engaging web applications. My focus is on delivering high-quality
            experiences through smooth animations and responsive designs. I have
            a keen eye for detail and am dedicated to optimizing performance,
            always looking for ways to enhance my projects and push the
            boundaries of modern web development."
          </code>
        </p>
        <div className="wrapper flex items-center justify-center m-8 gap-2 ">
          <a className="default-link" href="#projects">
            <code>Projects</code>
          </a>
          <a className="default-link " href="#skills">
            <code>Skills</code>
          </a>
        </div>
        <div className="links flex items-center justify-center gap-8 ">
          <a
            className="default h-8 bg-white rounded-3xl"
            href="https://github.com/PurpleDrip"
            target="_blank"
          >
            <img src="/icons/github-sign.png" alt="GitHub" />
          </a>
          <a
            className="default h-8 bg-white rounded"
            href="https://www.linkedin.com/in/gurupreethnagesha"
            target="_blank"
          >
            <img src="/icons/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a className="default h-12 " href="#mail">
            <img src="/icons/email.png" alt="Mail" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Model;
