import Block from "./Block";
import { motion } from 'framer-motion'

const SocialsBlock: React.FC = () => {
  return <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-opacity-80 glass bg-accent md:col-span-3"
    >
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
        href="mailto:ramirogumma@hotmail.com"
        className="flex items-center justify-center w-full h-full text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
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
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-secondary glass bg-opacity-60 md:col-span-3 "
    >
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
        className="flex items-center justify-center w-full h-full text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
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
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-neutral glass md:col-span-3"
    >
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
                    href="https://www.linkedin.com/in/ramirogumma-fullstackdev/"
                    target="_blank"
                    className="flex items-center justify-center w-full h-full text-primary"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
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
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-base-100 glass md:col-span-3"
    >
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
                    href="https://wa.me/+542901449363"
                    target="_blank"
                    className="flex items-center justify-center w-full h-full text-primary"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
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
    </Block>
  </>
};

export default SocialsBlock
