import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

const item = [
  {
    img: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    alt: "Fruta",
  },
  {
    img: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    alt: "Fruta",
  },
  {
    img: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    alt: "Fruta",
  },
  {
    img: "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    alt: "Fruta",
  },
  {
    img: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    alt: "Fruta",
  },
];

const Animated: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("#image", { y: 100, opacity: "0" });
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 1) % item.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div ref={scope}>
      <div className="w-20 h-10">
        <img id="image" src={item[number].img} alt={item[number].alt} />
      </div>
    </div>
  );
};

export default Animated;
