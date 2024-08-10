import {HomeApiResponse, Payload} from '@/api/types.ts';

export interface HomeDataProps {
    homeData: Payload<HomeApiResponse> | undefined;
}

const HomeHero = (props: HomeDataProps) => {
    return (
        <div className="w-full bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(src/assets/bazilika3.webp)'}}>
            <div className='bg-gradient-to-b from-slate-900/60 to-slate-500/40'>
                <div className="container flex relative w-full items-center justify-center aspect-[10/16] md:aspect-square lg:aspect-[17/10]">
                    <h1 className="text-[2rem] font-semibold text-white text-center font-title w-full z-10 px-4 md:text-[3.2rem] md:w-2/3 md:px-0 lg:text-[3.8rem] xl:text-[4.5rem]">
                        {props.homeData?.data.attributes.Cim}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
