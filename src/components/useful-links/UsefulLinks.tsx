import SiteHero from '@/components/hero/SiteHero';
import { useEffect, useState } from 'react';
import { LongText, Payload, UsefulLinksApiResponse } from '@/api/types.ts';
import qs from 'qs';
import axios from 'axios';
import {FaArrowRight} from "react-icons/fa6";

const UsefulLinks = () => {
    const [usefulLinks, setUsefulLinks] =
        useState<Payload<UsefulLinksApiResponse>>();

    useEffect(() => {
        const usefulLinksQuery = qs.stringify(
            {
                populate: '*',
            },
            { encodeValuesOnly: true }
        );

        try {
            axios
                .get(
                    `${import.meta.env.VITE_API_URL}/api/hasznos-linkek?${usefulLinksQuery}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(res =>
                    setUsefulLinks(res.data as Payload<UsefulLinksApiResponse>)
                );
        } catch (err) {
            console.error('Error ferching data: ', err);
        }
    }, []);

    return (
        <div className='flex flex-col'>
            <SiteHero
                title={usefulLinks?.data.attributes.Cim as string}
                desc={usefulLinks?.data.attributes.Alcim as LongText}
            />
            <div
                className='flex flex-col gap-24 w-screen justify-center py-12 md:py-24'
            >
                <div className="container flex justify-center">
                    <div className='flex items-center w-full md:w-4/5'>
                        <div className="flex flex-col w-full gap-6">
                            {usefulLinks?.data.attributes.HasznosLinkek.map((link, idx) => (
                                <div className='flex flex-col w-full gap-6' key={idx}>
                                    <a href={link.Link} target='_blank'>
                                        <div
                                            className="flex w-full justify-between items-center"
                                        >
                                            <h4
                                                className='font-title font-semibold text-2xl text-primary'
                                            >
                                                {link.KiirandoSzoveg}
                                            </h4>
                                            <FaArrowRight
                                                className='p-0 h-4 w-4 text-primary'
                                            />
                                        </div>
                                    </a>
                                    {idx !== usefulLinks?.data.attributes.HasznosLinkek.length - 1 && (
                                        <div
                                            className='w-full h-[2px] m-0 bg-primary'
                                        />
                                    )}
                                </div>
                            ))}
                            {/*<LinkComponent openOnNew={true} pages={importantPages} />*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsefulLinks;
