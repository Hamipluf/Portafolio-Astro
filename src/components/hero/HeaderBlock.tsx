import Block from "./Block";
import { getI18N } from '@/i18n/index'
import WaterDropGrid from "@/components/WaterDropGrid";

const HeaderBlock: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  return (

    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="flex gap-x-4 items-start justify-center w-full">
        <div className=" avatar">
          <div className="w-16 mask mask-squircle">
            <div className="avatar-image w-full h-full"></div>
          </div>
        </div>
        <div className="hidden lg:block w-11/12">
          <WaterDropGrid />
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-3xl font-medium leading-tight text-neutral">
          {i18n.HERO.GREET} {" "}
          <span className="base-text">
            {i18n.HERO.NAME}{" "}
          </span>
          <span className="name_title text-2xl ">
            {i18n.HERO.TITLE_2} <span className="">{i18n.HERO.TITLE}</span>
          </span>
        </h1>
        <div className="flex items-center gap-x-4 w-full">
          <a
            href="https://www.linkedin.com/in/ramirogumma-fullstackdev/"
            target="_blank"
            rel="noopener"
            className="badge badge-secondary underline underline-offset-2 glass badge-outline max-w-fit md:hover:scale-105"
          >
            {i18n.HERO.DISPONIBILITY}

          </a>
          <a
            href="/assets/cv-turing.pdf"
            download="cv-RamiroGummaFullstack.pdf"
            rel="noopener"
            className="badge badge-secondary glass badge-outline h-7 px-1 max-w-fit md:hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
          </a>
        </div>
      </div>


    </Block>
  )
}

export default HeaderBlock