import { mobileBreakpoint, useMediaQuery } from '../../../hooks/useMediaQuery';

export interface LinkAttributes {
  id: number;
  label: string;
  link: string;
}

const HomeDividerSection = () => {
  const mobileMode = useMediaQuery(mobileBreakpoint);
  return (
    <div className="flex py-16 bg-blue gap-24 w-screen">
      <div className="flex gap-24 w-full container">
        <div className="flex relative w-1/2 h-68 items-center">
          <img
            src="/divider_section_img.webp"
            alt=""
            className={`h-max opacity-80 ${mobileMode ? 'w-full' : 'absolute top-0 left-0 w-11/12'}`}
          />
          <h3 className="font-title text-[3.2rem] z-10 txt-white absolute bottom-0 right-0 w-10/12 text-right">
            Tekintse meg további oldalainkat
          </h3>
        </div>
        <div className="flex w-1/2 items-center">
          <div className="flex flex-col w-full gap-6">
            {/*<LinkComponent dark pages={morePages} />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDividerSection;
