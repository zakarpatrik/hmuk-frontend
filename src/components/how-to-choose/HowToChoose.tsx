import { useEffect, useState } from 'react';
import SiteHero from '@/components/hero/SiteHero';
import axios from 'axios';
import {HowToChooseApiResponse, LongText, Payload} from '@/api/types.ts';
import qs from 'qs';
import ContentRenderer from "@/components/ContentRenderer.tsx";

const HowToChoose = () => {
    const [howToChoose, setHowToChoose] =
        useState<Payload<HowToChooseApiResponse>>();

    useEffect(() => {
        const rightsQuery = qs.stringify(
            {
                populate: '*',
            },
            { encodeValuesOnly: true }
        );

        try {
            axios
                .get(
                    `${import.meta.env.VITE_API_URL}/api/hogyan-valasszunk-uegyvedet?${rightsQuery}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(res =>
                    setHowToChoose(res.data as Payload<HowToChooseApiResponse>)
                );
        } catch (err) {
            console.error('Error ferching data: ', err);
        }
    }, []);

    return (
        <div className='flex flex-col'>
            <SiteHero
                title={howToChoose?.data.attributes.Cim as string}
                desc={howToChoose?.data.attributes.Alcim as LongText}
            />
            <div className="flex justify-center">
                <div
                    className='container flex flex-col items-center justify-center py-12 gap-4 md:py-24 md:gap-6'
                >
                    <div className="flex flex-col gap-8 items-center">
                        <ContentRenderer
                            node={howToChoose?.data.attributes.Tartalom as LongText}
                            className='text-black w-full md:w-10/12'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToChoose;
