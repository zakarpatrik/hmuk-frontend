import {HomeApiResponse, Payload} from '@/api/types.ts';

export interface HomeDataProps {
    homeData: Payload<HomeApiResponse> | undefined;
}

const HomeHero = (props: HomeDataProps) => {
    return (
        <div className="w-full bg-fixed bg-cover" style={{backgroundImage: 'url(src/assets/bazilika3.webp)'}}>
            <div className='bg-gradient-to-b from-slate-900/60 to-slate-500/40'>
                <div className="container flex relative w-full items-center justify-center h-screen">
                    <h1 className="text-[4.5rem] font-semibold text-white text-center font-title w-2/3 z-10 pb-40 px-0">
                        {props.homeData?.data.attributes.Cim}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
