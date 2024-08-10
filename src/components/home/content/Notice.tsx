import { HomeDataProps } from '../HomeHero';
import ContentRenderer from '../../ContentRenderer';
import { LongText } from '@/api/types.ts';

const Notice = ({ homeData }: HomeDataProps) => {
  return (
    <div className="container flex flex-col-reverse md:flex-row no-wrap justify-between items-center py-20 gap-8">
      <div className="flex basis-2/5 md:py-12 items-center w-full">
        <img src="src/assets/iustitia.webp" alt="" className="h-max w-max rounded-md" />
      </div>
      <div className="h-[1px] w-full bg-primary md:w-[1px] md:h-[35rem] hidden sm:block" />
      <div className="flex flex-col basis-2/5 justify-center items-center h-fit gap-4 text-justify">
        <h4 className="font-title text-xl font-medium xl:text-2xl">Egri Ügyvédi Kamara</h4>
        <h3 className="font-title text-4xl font-bold xl:text-5xl">Tájékoztató</h3>
        <ContentRenderer
          node={homeData?.data.attributes.Tajekoztato as LongText}
        />
      </div>
    </div>
  );
};

export default Notice;
