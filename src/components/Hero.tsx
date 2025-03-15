import { motion } from "framer-motion";
import type React from "react";

import type { ReactNode } from "react";
import { BounceCard } from "./bounced_card/BounceCard";
import { CardTitle } from "./bounced_card/CardTitle";
const Hero: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  return (
    <section id="Hero" className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
    <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
    <div className="flex flex-1 items-end gap-x-10">  
    <div className="avatar">
  <div className="mask mask-squircle w-24">
    <img src="\assets\perfil-color.jpeg" />
  </div>
</div>
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Ramiro Gumma
          <span className="text-slate-400"> all in one solution</span>
        </h2></div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Conozcame
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Do a thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Do another thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>And this too</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );


};

export default Hero;




