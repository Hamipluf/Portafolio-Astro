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
    img: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    alt: "Fruta",
  },
  {
    id: 2,

    img: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    alt: "Fruta",
  },
  {
    id: 3,

    img: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    alt: "Fruta",
  },
  {
    id: 4,

    img: "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    alt: "Fruta",
  },
  {
    id: 5,

    img: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    alt: "Fruta",
  },
];

const Animated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <AnimatePresence>
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
          className="w-80 h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${items[currentIndex].img})` }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Animated;
