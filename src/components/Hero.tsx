import { AnimatePresence, motion } from "framer-motion";
import Animated from "./Animated";
import { getI18N } from "@/i18n/index";
import type React from "react";

const Hero: React.FC<{ currentLocale: string | undefined }> = ({
  currentLocale,
}) => {
  const i18n = getI18N({ currentLocale });

  return (
    <section id="Hero" className="h-screen w-full rounded-lg m-4">
      <div className="flex flex-col lg:flex-row items-center h-screen  w-full px-5 ">
        <div className="absolute w-1/2  flex flex-col items-center justify-center inset-y-0 lg:right-0 ">
          <motion.span
            id="dot"
            className=" absolute bg-accent -left-6 md:-left-30 top-24 lg:top-72 w-24 h-24 rotate-90 skew-x-12 rounded-3xl ball-1 blur-xl opacity-60 lg:opacity-95 "
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeatType: "loop",
              repeat: Infinity,
              duration: 2,
            }}
          ></motion.span>
          <motion.span
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeatType: "loop",
              repeat: Infinity,
              duration: 2,
            }}
            id="dot"
            className="absolute right-80 bottom-32 w-24 h-24 rounded-3xl bg-secondary blur-xl opacity-80"
          ></motion.span>
        </div>
        <motion.span
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeatType: "loop",
            repeat: Infinity,
            duration: 2,
          }}
          id="dot"
          className=" absolute lg:w-2/12 w-5 aspect-square bg-base-100  top-5 lg:left-60 rounded-full skew-y-12 blur-2xl opacity-60 skew-x-12 rotate-90"
        ></motion.span>

        <div className="flex flex-col lg:flex-row w-full h-full">
          <div
            className="flex flex-col justify-start  items-start  text-center lg:text-left lg:py-7 xl:py-8
         max-w-3xl mx-auto lg:mx-0  "
          >
            <motion.h1
              animate={{
                x: [-800, -400, 0],
                opacity: [0, 50, 100],
              }}
              transition={{
                duration: 0.6,
                ease: "easeIn",
                type: "spring",
                delay: 1,
              }}
              className="font-nunito font-semibold base-text text-xl md:text-3xl lg:text-4xl leading-tight text-left
              z-10"
            >
              <span className="name_title lg:text-4xl xl:text-5xl">
                {i18n.HERO.NAME}
              </span>{" "}
              <span className="text-transparent bg-clip-text hero-text font-light text-2xl lg:text-4xl  ">
                {i18n.HERO.TITLE}{" "}
              </span>
              <span className="name_title lg:text-4xl xl:text-5xl">
                {i18n.HERO.TITLE_2}
              </span>
            </motion.h1>
            <motion.p
              animate={{
                opacity: [0, 50, 100],
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
                delay: 1,
              }}
              className="font-nunito text-sm md:text-md lg:text-lg mt-8 z-10 text-left"
            >
              {i18n.HERO.DESCRIPTION}
            </motion.p>
            <motion.div
              animate={{
                y: [30, 0],
                opacity: [0, 50, 100],
              }}
              transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: 1,
              }}
              className="font-nunito font-light text-xs flex items-center gap-x-2 my-3 lg:my-10 md:my-5 lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <p> {i18n.HERO.LOCATION} </p>
              <img
                className="w-7 h-7"
                src="/assets/argentina.png"
                alt="Bandera argentina"
              />
              <a
                download="cv-ramiroGumma-Fullstack.pdf"
                href="assets/cv-turing.pdf"
                className="btn btn-outline btn-sm btn-ghost hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                  <path d="M13 11l1.5 6l1.5 -6" />
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="flex flex-row-reverse justify-around  items-center lg:flex-col lg:justify-center lg:items-center w-full lg:w-4/12 xl:w-4/12 lg:h-3/6 ">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-end  items-end gap-5 w-full h-full mt-5 z-10">
              <AnimatePresence mode="sync">
                <motion.a
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    duration: 2,
                  }}
                  href="ramirogumma@hotmail.com"
                  className="btn btn-outline btn-ghost px-3 py-2 hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail hover:scale-125 hover:-translate-y-3 transition-all duration-150 ease-out"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </motion.a>
                <motion.a
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.1,
                  }}
                  href="https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/"
                  target="_blank"
                  className="btn btn-outline btn-ghost px-3 py-2 hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin hover:scale-125 hover:-translate-y-3 transition-all duration-150 ease-out"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>{" "}
                </motion.a>
                <motion.a
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.2,
                  }}
                  href="https://github.com/Hamipluf"
                  target="_blank"
                  className="btn btn-outline btn-ghost px-3 py-2 hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github hover:scale-125 hover:-translate-y-3 transition-all duration-150 ease-out"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </motion.a>
                <motion.a
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.3,
                  }}
                  href=" https://w.app/RamaDev"
                  target="_blank"
                  className="btn btn-outline btn-ghost px-3 py-2 hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp hover:scale-125 hover:-translate-y-3 transition-all duration-150 ease-out"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </motion.a>
              </AnimatePresence>
            </div>

            <div className="">
              <Animated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
