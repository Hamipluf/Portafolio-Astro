import { useEffect, useState } from 'react'
import Block from "./Block";
import { getI18N } from '@/i18n/index'
const LocationBlock: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });




  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-secondary"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
      <div className="flex items-start">
        <img className="w-5 h-5 mt-1" src="assets/argentina.png" alt="Bandera Argentina" />{" "}
        <p className="text-center text-lg text-zinc-400">  {i18n.HERO.LOCATION}</p>

      </div>
    </Block>
  );
}
export default LocationBlock;
