import React, { useRef } from "react";
import { motion } from "framer-motion";
import { getI18N } from "@/i18n/index";

const AnimatedAboutMe: React.FC<{ currentLocale: string | undefined }> = ({
  currentLocale,
}) => {
  const ref = useRef(null);
  const i18n = getI18N({ currentLocale });

  const animate_p = {
    animate: { y: [100, 0], opacity: [0, 100] },
    transition: { duration: 0.6, ease: "easeIn" },
  };

  return (
    <div ref={ref} className="m-10 w-full lg:mx-16">
      <div className="w-full h-full flex flex-col justify-around lg:flex-row lg:items-stretch ">
        {/* Profile image */}
        <motion.div
          animate={{
            x: [-300, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-9/12 lg:w-5/12 h-full mx-5"
        >
          <div className="profile-image w-full h-[30vh] lg:mx-5 lg:bg-center md:h-[50vh] lg:h-[80vh] lg:my-4"></div>
        </motion.div>
        {/* Text */}
        <div className="mx-3 my-10 w-11/12 h-full lg:h-5/6 lg:my-2">  
          <motion.h2
            animate={{
              x: [-200, 0],
              opacity: [0, 100],
            }}
            transition={{
              ease: "backIn",
              duration: 1,
            }}
            className="text-xl text-secondary font-nunito font-semibold mx-2 md:text-3xl lg:text-4xl"
          >
            {i18n.ABOUT_ME.GREET}{" "}
            <motion.span
              animate={{
                opacity: [0, 10],
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className=" text-base-100 font-sans"
            >
              {i18n.ABOUT_ME.IM}
            </motion.span>{" "}
            {i18n.ABOUT_ME.BASED}
          </motion.h2>
          <motion.p
            animate={animate_p.animate}
            transition={animate_p.transition}
            className="text-left text-sm secondary-text mx-4 lg:text-lg"
          >
            {i18n.ABOUT_ME.DESCRIPTION}
          </motion.p>
          <motion.p
            animate={animate_p.animate}
            transition={animate_p.transition}
            className="text-left text-sm secondary-text mx-4 lg:text-lg"
          >
            {i18n.ABOUT_ME.DESCRIPTION_2}
          </motion.p>
          <motion.p
            animate={animate_p.animate}
            transition={{ ...animate_p.transition, delay: 0.2 }}
            className="text-left mt-4 secondary-text text-sm mx-4 lg:text-lg"
          >
            {i18n.ABOUT_ME.DESCRIPTION_3}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAboutMe;
