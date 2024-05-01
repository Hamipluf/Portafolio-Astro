import { AnimatePresence, motion } from "framer-motion";
import Animated from "./Animated";

const Hero = () => {
  return (
    <section id="Hero" className="min-h-screen rounded-lg m-4 ">
      <div className="flex  items-center h-full w-full px-5 ">
        <div className="absolute w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <motion.span
            id="dot"
            className="absolute -left-6 md:-left-30 top-24 lg:top-48 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"
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
            className="absolute right-80 bottom-32 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"
          ></motion.span>
        </div>
        <motion.span
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeatType: "loop",
            repeat: Infinity,
            duration: 2,
          }}
          id="dot"
          className=" lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute top-5 lg:left-60 rounded-full skew-y-12 blur-2xl opacity-60 skew-x-12 rotate-90"
        ></motion.span>

        <div className="flex w-full h-full">
          <div
            className="flex flex-col justify-center items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0  "
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
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold z-10"
            >
              Ramiro Gumma{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                Full-Stack
              </span>{" "}
              Developer
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
              className="text-xl mt-8 z-10"
            >
              FullStack MERN Developer | +3 años de experiencia | Convierto
              ideas en codigo🚀
            </motion.p>
            <motion.p
              animate={{
                y: [30, 0],
                opacity: [0, 50, 100],
              }}
              transition={{
                duration: .3,
                ease: "easeIn",
                delay: 1,
              }}
              className="flex gap-x-2 my-10"
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
              - Capital Federal, Argentina{" "}
              <img
                className="w-6 h-6"
                src="/assets/argentina.png"
                alt="Bandera argentina"
              />
            </motion.p>
          </div>

          <div className="flex flex-col justify-around items-center w-3/12 h-full">
            <AnimatePresence mode="sync">
              <div className="flex tems-center gap-5 w-full mt-5 z-10">
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
                  className="btn btn-md btn-outline btn-ghost btn-circle"
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
                  className="btn btn-md btn-outline btn-ghost  btn-circle "
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
                  className="btn btn-md btn-outline btn-ghost  btn-circle "
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
                  className="btn btn-md btn-outline btn-ghost  btn-circle "
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
              </div>
            </AnimatePresence>

            <div className="absolute bottom-60">
              <Animated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
