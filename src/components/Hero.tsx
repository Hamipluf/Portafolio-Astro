import { AnimatePresence, motion } from "framer-motion";
import WaterDropGrid from "./WaterDropGrid";
import Animated from "./Animated";
import { getI18N } from "@/i18n/index";
import type React from "react";
import HeaderBlock from "@/components/hero/HeaderBlock";
import SocialsBlock from "@/components/hero/SocialsBlock";
import AboutBlock from "@/components/hero/AboutBlock";
import LocationBlock from "@/components/hero/LocationBlock";
import EmailListBlock from "@/components/hero/EmailListBlock";
import Footer from "@/components/hero/Footer";
const Hero: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  return (
    <div className="max-h-screen bg-primary px-4 py-4 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className=" grid w-full grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock currentLocale={currentLocale} />
        <SocialsBlock currentLocale={currentLocale} />
        <AboutBlock currentLocale={currentLocale} />
        <LocationBlock  currentLocale={currentLocale}/>
        <EmailListBlock  />
      </motion.div>
    </div>
  );


};

export default Hero;
