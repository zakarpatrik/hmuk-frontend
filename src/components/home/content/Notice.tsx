import { HomeDataProps } from '../HomeHero';
import ContentRenderer from '../../ContentRenderer';
import { LongText } from '@/api/types.ts';

const Notice = ({ homeData }: HomeDataProps) => {
  return (
    <div className="container flex no-wrap justify-between items-center py-20">
      <div className="flex basis-2/5 py-12 pr-12 items-center">
        <img src="src/assets/iustitia.webp" alt="" className="h-max w-max rounded-md" />
      </div>
      <div className="h-[35rem] w-[1px] bg-primary" />
      <div className="flex flex-col basis-2/5 justify-center items-center h-fit gap-4 text-justify">
        <h4 className="font-title text-2xl font-medium">Egri Ügyvédi Kamara</h4>
        <h3 className="font-title text-[3.2rem] font-bold">Tájékoztató</h3>
        <ContentRenderer
          node={homeData?.data.attributes.Tajekoztato as LongText}
        />
      </div>
    </div>
  );
};

export default Notice;
