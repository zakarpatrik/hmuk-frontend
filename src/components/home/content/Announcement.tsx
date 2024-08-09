import { HomeDataProps } from '@/components/home/HomeHero';
import ContentRenderer from '@/components/ContentRenderer';
import { LongText } from '@/api/types.ts';

const Announcement = ({ homeData }: HomeDataProps) => {
  return (
    <div className="flex container flex-col items-center pb-20 gap-10">
      <h3 className="font-title text-[3.2rem]">Hirdetmény</h3>
      <ContentRenderer
        className="w-10/12"
        node={homeData?.data.attributes.Hirdetmeny as LongText}
      />
    </div>
  );
};

export default Announcement;
