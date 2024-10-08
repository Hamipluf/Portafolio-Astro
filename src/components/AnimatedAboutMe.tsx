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
    <div ref={ref} className="w-full h-full m-10 flex flex-col justify-center lg:flex-row">
        {/* Profile image */}
        <motion.div
          animate={{
            x: [-300, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-9/12 lg:w-5/12 h-full mx-5"
        >
          <div className="profile-image w-full h-[30vh] mx-4 lg:mx-10 lg:w-11/12 lg:bg-center md:h-[50vh] lg:h-[80vh] lg:my-4"></div>
        </motion.div>
        {/* Text */}
        <article className="w-full h-full flex flex-col my-10 mx-2 justify-center align-center text-pretty lg:m-0">  
          <motion.h2
            animate={{
              x: [-200, 0],
              opacity: [0, 100],
            }}
            transition={{
              ease: "backIn",
              duration: 1,
            }}
          className="text-secondary font-nunito font-semibold mx-6 md:mx-8 md:text-md lg:text-4xl"
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
         <div className="text-wrap w-11/12"> 
          <motion.p
            animate={animate_p.animate}
            transition={animate_p.transition}
            className="text-left text-sm secondary-text mx-4 lg:text-lg text-wrap"
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
        </article>
    </div>
  );
};

export default AnimatedAboutMe;
