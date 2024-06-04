import { motion } from "framer-motion";
import { useState } from "react";
import { languages } from "@/i18n/ui";

const StaggeredDropDown: React.FC<{ url: URL }> = ({ url }) => {
  const [open, setOpen] = useState(false);
  const wrapperVariants = {
    open: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleX: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: -90 },
    closed: { rotate: 0 },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 10,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      x: 15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };
const path = url.pathname.split('/')[2]

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative flex">
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ translateY: "50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-secondary shadow-xl absolute top-[-20%] left-[150%] w-32 overflow-hidden"
      >
        {Object.entries(languages).map(([lang, label], index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex justify-center items-center gap-2 w-11/12 text-xs font-medium  rounded-lg cursor-pointer text-base-100 hover:text-secondary hover:bg-accent hover:duration-300 hover:ease-linear focus:bg-neutral"
          >
            <motion.span variants={actionIconVariants}>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-language"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5h7" />
                <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                <path d="M12 20l4 -9l4 9" />
                <path d="M19.1 18h-6.2" />
              </svg>
            </motion.span>
            <a href={`/${lang}${url.pathname}`}>{label}</a>
          </motion.li>
        ))}
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className="flex justify-center items-center gap-2 w-11/12 text-xs font-medium  rounded-lg cursor-pointer text-base-100 hover:text-secondary hover:bg-accent hover:duration-300 hover:ease-linear focus:bg-neutral"
        >
          <motion.span variants={actionIconVariants}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-language"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg>
          </motion.span>
          <a href={`/${path ?? ''}`}>Español</a>
        </motion.li>
      </motion.ul>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="tooltip tooltip-right h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer text-base-100 hover:text-secondary hover:bg-accent hover:duration-300 hover:ease-linear focus:bg-neutral"
        data-tip={"Lenguaje"}
      >
        <motion.span variants={iconVariants}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10l6 6l6 -6h-12" />
          </svg>
        </motion.span>
      </button>
    </motion.div>
  );
};

export default StaggeredDropDown;
