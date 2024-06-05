import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  id: number;
  imgCup: string;
  imgDark: string;
  alt: string;
}

const items: Image[] = [
  {
    id: 1,
    imgCup: "/assets/ExpressCupacke.svg",
    imgDark: "/assets/ExpressDark.svg",
    alt: "Express Brand",
  },
  {
    id: 2,
    imgCup: "/assets/NodeCupacke.svg",
    imgDark: "/assets/NodeDark.svg",
    alt: "NodeJS Brand",
  },
  {
    id: 3,
    imgCup: "/assets/ReactCupcake.svg",
    imgDark: "/assets/ReactDark.svg",
    alt: "ReactJS Brand",
  },
  {
    id: 4,

    imgCup: "/assets/MongoCupcake.svg",
    imgDark: "/assets/MongoDark.svg",
    alt: "MongoDB Brand",
  },
];

const Animated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState<string>();
  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      const newTheme = html.getAttribute("data-theme");
      if (newTheme) {
        setTheme(newTheme);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  const currentImage =
    theme === "cupcake"
      ? items[currentIndex].imgCup
      : items[currentIndex].imgDark;

  return (
    <div className="w-60 h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={items[currentIndex].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="w-42 h-32 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Animated;
