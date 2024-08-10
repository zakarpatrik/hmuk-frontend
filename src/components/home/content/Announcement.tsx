import { HomeDataProps } from '@/components/home/HomeHero';
import ContentRenderer from '@/components/ContentRenderer';
import { LongText } from '@/api/types.ts';

const Announcement = ({ homeData }: HomeDataProps) => {
  return (
    <div className="flex container flex-col items-center pb-20 gap-4 md:gap-10 text-justify">
      <h3 className="font-title text-4xl font-bold xl:text-5xl">Hirdetmény</h3>
      <ContentRenderer
        className="w-full md:w-10/12"
        node={homeData?.data.attributes.Hirdetmeny as LongText}
      />
    </div>
  );
};

export default Announcement;
