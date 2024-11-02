import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="projects">
      <h1 className="text-center text-[8rem] mt-8">
        <code className="tracking-[20px]">Projects</code>
      </h1>
      <div className="first-project h-screen p-16 pl-48">
        <div className="container h-full rounded-3xl p-16 relative bg-[--primary] ">
          <h1 className="text-3xl text-yellow-200 ">
            <code className="tracking-[15px]">1CARD</code>
          </h1>
          <div className="img-cont h-[30rem] max-w-[50rem] absolute right-10">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/1Card/1.png" alt="Image of 1Card project" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/1Card/2.png" alt="Image of 1Card project" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/1Card/3.png" alt="Image of 1Card project" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/1Card/4.png" alt="Image of 1Card project" />
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
          <p className="w-[20rem] mt-20">
            This project was made with the intention of introducing a universal
            verification id. <br />
            <br />1 CARD combines all the government issued identity cards and
            creates a unique ID, further thing ID can be used across all
            platform universally for authentication or kyc.
            <br />
            <br />
            <hide>
              Different sites use different identity cards to authenticate their
              users. By using 1 CARD it becomes promising and very reliable for
              mankind. <br />
            </hide>
          </p>
          <div className="link absolute bottom-20 h-8">
            <a href="https://github.com/PurpleDrip/1Card" target="_blank">
              <img src="/icons/github.png" alt="1 CARD github link" />
            </a>
          </div>
        </div>
      </div>

      <div className="first-project h-screen p-16 pr-48">
        <div className="container h-full rounded-3xl p-16 relative bg-[--primary]">
          <h1 className="text-3xl text-yellow-200">
            <code className="tracking-[15px]">VOTING HUB</code>
          </h1>
          <div className="img-cont h-[30rem] w-[50rem] absolute  right-10">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/VotingHub/2.png" alt="Image of Voting Hub project" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/VotingHub/1.png" alt="Image of Voting Hub project" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/VotingHub/3.png" alt="Image of Voting Hub project" />
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="w-[20rem] mt-4">
            Our innovative voting website is designed to simplify the voting
            process for users of all backgrounds and technical abilities. With a
            focus on user-friendly design, the platform ensures that everyone
            can participate in the voting process effortlessly.
            <br />
            <br />
            <hide>
              The intuitive interface guides users through each step, making it
              easy to navigate and cast their votes without confusion.
              <br />
              <br />
              The platform is built with accessibility in mind, featuring
              responsive design elements that adapt to various devices, whether
              on a desktop, tablet, or smartphone. This flexibility allows users
              to vote anytime and anywhere, accommodating their busy lifestyles.
              <br />
            </hide>
          </p>
          <div className="link absolute bottom-16 h-8">
            <a href="https://github.com/PurpleDrip/Voting-Hub" target="_blank">
              <img src="/icons/github.png" alt="1 CARD github link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
