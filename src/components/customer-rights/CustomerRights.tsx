import { useEffect, useState } from 'react';
import SiteHero from '@/components/hero/SiteHero';
import axios from 'axios';
import { CustomerRightsApiResponse, LongText, Payload } from '@/api/types.ts';
import qs from 'qs';
import ContentRenderer from "@/components/ContentRenderer.tsx";

const CustomerRights = () => {
    const [customerRights, setCustomerRights] =
        useState<Payload<CustomerRightsApiResponse>>();

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
                    `${import.meta.env.VITE_API_URL}/api/uegyfel-jogok?${rightsQuery}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(res =>
                    setCustomerRights(res.data as Payload<CustomerRightsApiResponse>)
                );
        } catch (err) {
            console.error('Error ferching data: ', err);
        }
    }, []);

    return (
        <div className='flex flex-col'>
            <SiteHero
                title={customerRights?.data.attributes.Cim as string}
                desc={customerRights?.data.attributes.Alcim as LongText}
            />
            <div className="flex justify-center">
                <div
                    className='container flex flex-col items-center justify-center py-12 gap-4 md:py-24 md:gap-6'
                >
                    <div className="flex flex-col gap-8 items-center">
                        <ContentRenderer
                            node={customerRights?.data.attributes.Tartalom as LongText}
                            className='text-black w-full md:w-10/12'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerRights;
