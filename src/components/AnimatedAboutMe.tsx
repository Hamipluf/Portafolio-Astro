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
      className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"
    >
      <div className="space-y-3 md:space-y-0 flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          animate={{
            x: [-300, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full"
        >
          <div className="profile-image bg-cover m-10 w-10/12 h-[30vh] md:bg-[length:80%]  lg:bg-center md:h-[50vh] lg:h-[80vh]"></div>
        </motion.div>
        <div className="md:7/12 lg:w-6/12 m-4">
          <motion.h2
            animate={{
              x: [-200, 0],
              opacity: [0, 100],
            }}
            transition={{
              ease: "backIn",
              duration: 1,
            }}
            className="text-2xl text-secondary font-nunito font-semibold md:text-4xl"
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
            className="mt-6 secondary-text"
          >
            {i18n.ABOUT_ME.DESCRIPTION}

            <br />
            {i18n.ABOUT_ME.DESCRIPTION_2}
          </motion.p>
          <motion.p
            animate={animate_p.animate}
            transition={{ ...animate_p.transition, delay: 0.2 }}
            className="mt-4 secondary-text"
          >
            {i18n.ABOUT_ME.DESCRIPTION_3}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAboutMe;
