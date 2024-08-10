import { HomeDataProps } from '../HomeHero';
import ContentRenderer from '../../ContentRenderer';
import { LongText } from '@/api/types.ts';

const Announcement = ({ homeData }: HomeDataProps) => {
  return (
    <div className="flex flex-col container items-center py-20 gap-10 text-justify">
      <h3 className="font-title text-4xl font-bold xl:text-5xl">Egri Ügyvédi Kamara</h3>
      <ContentRenderer
        node={homeData?.data.attributes.UgyvediKamaraSzoveg as LongText}
        className="w-full md:w-10/12 flex flex-col items-center"
      />
    </div>
  );
};

export default Announcement;
