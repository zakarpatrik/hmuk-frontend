import {HomeApiResponse, Payload} from '@/api/types.ts';

export interface HomeDataProps {
    homeData: Payload<HomeApiResponse> | undefined;
}

const HomeHero = (props: HomeDataProps) => {
    return (
        <div className="w-full bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(src/assets/bazilika3.webp)'}}>
            <div className='bg-gradient-to-b from-slate-900/60 to-slate-500/40'>
                <div className="container flex relative w-full items-center justify-center max-h-[800px] aspect-[10/14] sm:aspect-square lg:aspect-[17/10]">
                    <h1 className="text-4xl !leading-[1.3em] font-semibold text-white text-center font-title w-full z-10 px-4 md:text-5xl md:w-2/3 md:px-0 lg:text-6xl xl:text-7xl">
                        {props.homeData?.data.attributes.Cim}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
