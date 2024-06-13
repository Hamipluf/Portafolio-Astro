import { motion } from "framer-motion";
import type React from "react";
import HeaderBlock from "@/components/hero/HeaderBlock";
import SocialsBlock from "@/components/hero/SocialsBlock";
import AboutBlock from "@/components/hero/AboutBlock";
import LocationBlock from "@/components/hero/LocationBlock";
import EmailListBlock from "@/components/hero/EmailListBlock";
const Hero: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  return (
    <div className="min-h-screen lg:max-h-screen bg-primary px-4 py-4 text-zinc-50 w-11/12 lg:w-full">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="grid mx-auto lg:mx-5 lg:h-[90vh] grid-flow-dense grid-cols-12 gap-4 gap-y-6 w-10/12 lg:w-11/12"
      >
        <HeaderBlock currentLocale={currentLocale} />
        <SocialsBlock />
        <AboutBlock currentLocale={currentLocale} />
        <LocationBlock  currentLocale={currentLocale}/>
        <EmailListBlock currentLocale={currentLocale} />
      </motion.div>
    </div>
  );


};

export default Hero;
