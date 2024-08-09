import HomeHero from "@/components/home/HomeHero.tsx";
import HomeContent from "@/components/home/HomeContent.tsx";
import {useEffect, useState} from "react";
import {HomeApiResponse, Payload} from "@/api/types.ts";
import axios from "axios";
import qs from 'qs';

const Home = () => {
    const [homeData, setHomeData] = useState<Payload<HomeApiResponse>>();

    useEffect(() => {
        const rightsQuery = qs.stringify(
            {
                populate: '*',
            },
            { encodeValuesOnly: true }
        );

        try {
            axios
                .get(`${import.meta.env.VITE_API_URL}/api/fooldal?${rightsQuery}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(res => setHomeData(res.data as Payload<HomeApiResponse>));
        } catch (err) {
            console.error('Error fetching data: ', err);
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <HomeHero homeData={homeData} />
            <HomeContent homeData={homeData} />
        </div>
    )
}

export default Home;