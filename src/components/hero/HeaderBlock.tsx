import Block from "./Block";
import { getI18N } from '@/i18n/index'
import WaterDropGrid from "@/components/WaterDropGrid";
const HeaderBlock: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  return (

    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="flex items-start justify-center w-full">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <div className="avatar-image w-full h-full"></div>
          </div>
        </div>
        <div className="hidden lg:block w-10/12">
          <WaterDropGrid />
        </div>
      </div>
      <h1 className="text-3xl font-medium leading-tight text-neutral">
        {i18n.HERO.GREET} {" "}
        <span className="base-text">
          {i18n.HERO.NAME}{" "}
        </span>
        <span className="name_title text-2xl ">
          {i18n.HERO.TITLE_2} <span className="">{i18n.HERO.TITLE}</span>
        </span>
      </h1>


    </Block>
  )
}

export default HeaderBlock