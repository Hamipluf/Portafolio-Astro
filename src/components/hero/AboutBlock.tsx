import Block from "./Block";
import { getI18N } from '@/i18n/index'
const AboutBlock: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  return (
    <Block className="col-span-12 text-xl leading-snug w-full ">
      <div className="flex w-full h-full justify-center items-center">
        <p className="bg-gradient-to-r from-neutral to-secondary bg-clip-text text-transparent">
          {i18n.HERO.DESCRIPTION}
        </p> {" "} <span className="mx-2">🚀</span>
        </div>
    </Block>

  );
}
export default AboutBlock