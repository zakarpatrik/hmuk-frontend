import Notice from './content/Notice';
import Announcement from './content/Announcement';
import HomeDividerSection from './content/HomeDividerSection';
import LegalChamber from './content/LegalChamber';
import { HomeDataProps } from './HomeHero';

const HomeContent = ({ homeData }: HomeDataProps) => {
  return (
    <>
      <Notice homeData={homeData} />
      <Announcement homeData={homeData} />
      <HomeDividerSection />
      <LegalChamber homeData={homeData} />
    </>
  );
};

export default HomeContent;
