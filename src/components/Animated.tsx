import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  id: number;
  img: string;
  alt: string;
}

const items: Image[] = [
  {
    id: 1,
    img: "/assets/express.png",
    alt: "Express Brand",
  },
  {
    id: 2,
    img: "assets/node.png",
    alt: "NodeJS Brand",
  },
  {
    id: 3,
    img: "/assets/react.png",
    alt: "ReactJS Brand",
  },
  {
    id: 4,

    img: "/assets/MongoDb.png",
    alt: "MongoDB Brand",
  },
  {
    id: 5,
    img: "/assets/next.png",
    alt: "NextJS Brand",
  },
];

const Animated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

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
          style={{ backgroundImage: `url(${items[currentIndex].img})` }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Animated;
