import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Animated from "./Animated";

const Hero = () => {
  const [scope, animate] = useAnimate();

  return (
    <section ref={scope} className="relative h-full rounded-lg bg-white">
      <div
        className="mx-auto flex items-center h-full lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 
"
      >
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span
            id="dot"
            className="absolute -left-6 md:-left-40 top-24 lg:top-48 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span
            id="dot"
            className="absolute left-36 bottom-32 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"
          ></span>
        </div>
        <span
          id="dot"
          className=" w-5/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-60 skew-x-12 rotate-90"
        ></span>
        <div
          className="self-start flex flex-col justify-center items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1
            className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900 z-10"
          >
            Ramiro Gumma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              Full-Stack
            </span>{" "}
            Developer
          </h1>
          <p className="mt-8 text-gray-800 z-10">
            FullStack MERN Developer | +3 años de experiencia | Convierto ideas
            en codigo🚀
          </p>
        </div>
        <div className="">
          <Animated />
        </div>
      </div>
    </section>
  );
};

export default Hero;
