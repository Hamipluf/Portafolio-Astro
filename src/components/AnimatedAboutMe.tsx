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
    <div
      ref={ref}
      className="container h-screen w-full m-auto px-6 text-gray-600 md:px-12 xl:px-6"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Profile image */}
        <motion.div
          animate={{
            x: [-300, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full h-full flex flex-col justify-start items-start "
        >
          <div className="profile-image m-10 w-10/12 h-[30vh] lg:bg-center md:h-[50vh] lg:h-[70vh] lg:w-[95%] lg:my-4 lg:mx-2"></div>
        </motion.div>
        {/* Text */}
        <div className="md:7/12 lg:w-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:h-full">
          <motion.h2
            animate={{
              x: [-200, 0],
              opacity: [0, 100],
            }}
            transition={{
              ease: "backIn",
              duration: 1,
            }}
            className="text-2xl text-secondary font-nunito font-semibold md:text-4xl  m-4"
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
          <div className="lg:w-full lg:h-32 lg:p-1">
            <motion.p
              animate={animate_p.animate}
              transition={animate_p.transition}
              className="stext-sm secondary-text"
            >
              {i18n.ABOUT_ME.DESCRIPTION}
            </motion.p>
            <motion.p
              animate={animate_p.animate}
              transition={animate_p.transition}
              className="stext-sm secondary-text"
            >
              {i18n.ABOUT_ME.DESCRIPTION_2}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:mt-2">
        <motion.p
          animate={animate_p.animate}
          transition={{ ...animate_p.transition, delay: 0.2 }}
          className="mt-4 secondary-text"
        >
          {i18n.ABOUT_ME.DESCRIPTION_3}
        </motion.p>
      </div>
    </div>
  );
};

export default AnimatedAboutMe;
