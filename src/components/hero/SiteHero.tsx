import {LongText} from "@/api/types.ts";
import ContentRenderer from "@/components/ContentRenderer.tsx";

interface SiteHeroProps {
    title: string | undefined;
    desc: LongText;
}

const SiteHero = ({ title, desc }: SiteHeroProps) => {
    return (
        <div className='from-primary to-slate-700 bg-gradient-to-br w-full'>
            <div className='container flex flex-row items-center'>
                <div className='flex flex-col text-white w-full h-full items-start justify-center aspect-square gap-4 md:gap-10 md:flex-row md:justify-start md:items-center md:aspect-video lg:aspect-[32/9]'>
                    <h2 className='text-4xl font-bold font-title md:text-5xl lg:text-6xl max-w-[50%]'>{title}</h2>
                    <div className='w-full h-[1px] md:w-[1px] md:h-32 bg-white' />
                    <ContentRenderer node={desc} className='text-white' />
                </div>
                <img src='src/assets/eger-cimer.webp' alt='Eger címere' className='w-16 h-full pb-2' />
            </div>
        </div>
    )
}

export default SiteHero;