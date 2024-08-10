import SiteHero from "@/components/hero/SiteHero.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import { LongText, Payload, SearchApiResponse, Uegyvedek} from "@/api/types.ts";
import qs from "qs";
import axios from "axios";
import {mobileBreakpoint, useMediaQuery} from "@/hooks/useMediaQuery.ts";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input.tsx";

const Members = () => {
    const [lawyerData, setLawyerData] = useState<Payload<Uegyvedek[]>>();
    const [pageData, setPageData] = useState<Payload<SearchApiResponse>>();
    const [searchText, setSearchText] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalEntries, setTotalEntries] = useState(0);

    const mobileMode = useMediaQuery(mobileBreakpoint);

    const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, mobileMode ? 400 : 460);
    };

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const pageQuery = qs.stringify(
                    {
                        populate: '*',
                    },
                    { encodeValuesOnly: true }
                );
                const lawyerQuery = qs.stringify(
                    {
                        populate: '*',
                        sort: ['Nev'],
                        filters: {
                            $or: [
                                {
                                    Nev: {
                                        $contains: searchText,
                                    },
                                },
                                {
                                    Cim: {
                                        $contains: searchText,
                                    },
                                },
                                {
                                    Email: {
                                        Email: { $contains: searchText },
                                    },
                                },
                            ],
                        },
                        pagination: {
                            page: currentPage,
                            pageSize: 21,
                            pageCount: 5,
                        },
                    },
                    { encodeValuesOnly: true }
                );
                axios
                    .get(
                        `${import.meta.env.VITE_API_URL}/api/uegyvedeks?${lawyerQuery}`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    )
                    .then(res => {
                        setLawyerData(res.data as Payload<Uegyvedek[]>);
                        const total = res.data.meta.pagination.total;
                        setTotalEntries(total);
                    });
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/uegyvedkereso?${pageQuery}`)
                    .then(res => setPageData(res.data as Payload<SearchApiResponse>));
            } catch (err) {
                console.error('Error fetching data: ', err);
            }
        };

        fetchLawyers();
    }, [searchText, currentPage]);

    return (
        <div>
            <SiteHero title={pageData?.data.attributes.Cim} desc={pageData?.data.attributes.Alcim as LongText}/>
            <div className='container py-4 md:py-12'>
                <div
                    className={`flex gap-4 items-center mb-10 ${mobileMode ? 'flex-wrap w-full' : 'w-10/12'}`}
                >
                    <div className={mobileMode ? 'w-full' : ''}>
                        Keresendő szöveg:
                    </div>
                    <div className={mobileMode ? 'w-full' : 'w-1/4'}>
                        <PlaceholdersAndVanishInput
                            placeholders={['Név', 'Város', 'Irányítószám', 'Email cím']}
                            onChange={handleSearchTextChange}
                            onSubmit={() => setSearchText('')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members;