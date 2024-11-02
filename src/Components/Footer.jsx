import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [state, handleSubmit] = useForm("mjkvgrdp");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [toastDisplayed, setToastDisplayed] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".content",
          start: "top 60%",
        },
      });

      const container = gsap.from(".content", {
        autoAlpha: 0,
        x: 200,
        duration: 0.5,
      });
      const header = gsap.from(".footer-heading", {
        autoAlpha: 0,
        x: -200,
        duration: 0.3,
      });
      const form = gsap.from(".client-form", {
        autoAlpha: 0,
        x: 200,
        duration: 0.3,
      });
      tl.add(container, 0).add(header, 0.5).add(form, 0.5);
    }
  }, []);

  useEffect(() => {
    if (state.succeeded && !toastDisplayed) {
      toast.success("Form submitted successfully!", {
        position: "top-center",
      });
      setToastDisplayed(true);
      setEmail("");
      setText("");
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Please fill all the fields correctly!", {
        position: "bottom-right",
      });
      setToastDisplayed(false);
    }

    if (state.submitting) {
      setToastDisplayed(false);
    }
  }, [state]);

  return (
    <div
      id="mail"
      className="relative h-[40rem] w-4/5 my-8 m-auto border-2 border-[--primary] rounded-xl flex items-center justify-center flex-col"
    >
      <h1 className="text-[3rem]">
        <code>Have a Project in Mind? Let's Chat!</code>
      </h1>
      <div className="mail-container h-2/3 w-4/5 flex mt-4 flex-row-reverse relative">
        <div className="content w-1/2 flex items-center justify-center bg-blue-600 flex-col gap-4 rounded-3xl">
          <h1 className="footer-heading text-2xl">
            <code>Contact Me Directly</code>
          </h1>
          <form
            className="client-form flex items-start justify-center flex-col gap-4"
            id="my-form"
            onSubmit={handleSubmit}
          >
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              required
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg pl-4 h-12 w-[16rem] outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              value={text}
              rows="5"
              cols="30"
              required
              placeholder="Type your message here..."
              onChange={(e) => setText(e.target.value)}
              className="rounded-lg pl-4 pt-4 min-h-8 outline-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="m-auto mt-4 h-10 w-[10rem] bg-black border-2 border-black rounded-3xl hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
        <video
          src="/videos/robot-dance.mp4"
          className="absolute top-0 -left-[10rem] -z-10 p-8 hide"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <a href="#" className="absolute w-16 -bottom-10 -right-[7rem] hide">
        <img src="/icons/up-arrow.png" alt="" />
      </a>
    </div>
  );
};

export default Footer;
