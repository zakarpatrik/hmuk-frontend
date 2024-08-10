import {Link} from "react-router-dom";
import {MoveUpRightIcon} from "lucide-react";
import React from "react";

export interface LinkAttributes {
  label: string;
  link: string;
}

const links: LinkAttributes[] = [
  { label: 'Ügyvédkereső', link: '/ugyvedkereso' },
  { label: 'Jogtanácsoskereső', link: '/jogtanacsoskereso' },
  { label: 'Hogyan válasszunk ügyvédet?', link: '/hogyan-valasszunk-ugyvedet' },
  { label: 'Hasznos linkek', link: '/hasznos-linkek' },
]

const HomeDividerSection = () => {
  return (
    <div className="flex py-16 bg-primary gap-24 w-screen h-96">
      <div className="flex gap-24 w-full container">
        <div className="flex relative w-1/2 h-68 items-center">
          <img
            src="src/assets/divider_section_img.webp"
            alt=""
            className={`h-max opacity-80 rounded-md w-full sm:absolute sm:top-0 sm:left-0 sm:w-11/12`}
          />
          <h3 className="font-title text-[3.2rem] z-10 text-white font-semibold absolute bottom-0 right-0 w-10/12 text-right">
            Tekintse meg további oldalainkat
          </h3>
        </div>
        <div className="flex w-1/2 items-center">
          <div className="flex flex-col w-full gap-4">
            {links.map((link, idx) => {
              return (
                  <React.Fragment key={idx}>
                    <Link to={link.link} hrefLang={'hu'} className='text-2xl font-title'>
                      <div className='text-white fill-white stroke-white w-full flex justify-between items-center'>
                        <span>{link.label}</span>
                        <MoveUpRightIcon className='w-5 h-5' />
                      </div>
                    </Link>
                    {links.length !== idx + 1 && <div className='bg-white w-full h-[1px]'/>}
                  </React.Fragment>
              )
            })}
            {/*<LinkComponent dark pages={morePages} />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDividerSection;
