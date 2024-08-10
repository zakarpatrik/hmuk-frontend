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
    <div className="flex py-8 md:py-16 bg-primary gap-24 w-screen min-h-96">
      <div className="flex flex-col md:flex-row gap-8 w-full container lg:gap-24">
        <div className="flex flex-col-reverse relative gap-4 justify-center w-full h-68 items-center md:w-5/12 lg:w-1/2">
          <img
            src="src/assets/divider_section_img.webp"
            alt=""
            className={`h-max opacity-80 rounded-md w-full lg:absolute lg:top-0 lg:left-0 md:w-full lg:w-11/12`}
          />
          <h3 className="font-title text-3xl z-10 text-white font-semibold text-center md:text-right md:text-4xl lg:w-10/12 lg:absolute lg:bottom-0 lg:right-0 lg:text-5xl">
            Tekintse meg további oldalainkat
          </h3>
        </div>
        <div className="flex w-full items-center md:w-7/12 lg:w-1/2">
          <div className="flex flex-col w-full gap-4">
            {links.map((link, idx) => {
              return (
                  <React.Fragment key={idx}>
                    <Link to={link.link} hrefLang={'hu'} className='text-xl md:text-2xl font-title'>
                      <div className='text-white fill-white stroke-white w-full flex justify-between items-center'>
                        <span>{link.label}</span>
                        <MoveUpRightIcon className='w-5 h-5' />
                      </div>
                    </Link>
                    {links.length !== idx + 1 && <div className='bg-white w-full h-[1px]'/>}
                  </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDividerSection;
