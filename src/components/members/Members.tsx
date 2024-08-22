import SiteHero from "@/components/hero/SiteHero.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {LongText, Payload, SearchApiResponse, Uegyvedek} from "@/api/types.ts";
import qs from "qs";
import axios from "axios";
import {mobileBreakpoint, tabletBreakpoint, useMediaQuery} from "@/hooks/useMediaQuery.ts";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input.tsx";
import MemberCard from "@/components/members/MemberCard.tsx";
import PaginationWithEllipsis from "@/components/PaginationWithEllipsis.tsx";

const Members = () => {
    const [lawyerData, setLawyerData] = useState<Payload<Uegyvedek[]>>();
    const [pageData, setPageData] = useState<Payload<SearchApiResponse>>();
    const [searchText, setSearchText] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalEntries, setTotalEntries] = useState(0);

    const mobileMode = useMediaQuery(mobileBreakpoint);
    const tabletMode = useMediaQuery(tabletBreakpoint);

    const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const pageQuery = qs.stringify(
                    {
                        populate: '*',
                    },
                    {encodeValuesOnly: true}
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
                                        Email: {$contains: searchText},
                                    },
                                },
                            ],
                        },
                        pagination: {
                            page: currentPage,
                            pageSize: tabletMode ? 21 : 20,
                            pageCount: 5,
                        },
                    },
                    {encodeValuesOnly: true}
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
        <>
            <SiteHero title={pageData?.data.attributes.Cim} desc={pageData?.data.attributes.Alcim as LongText}/>
            <div id='site-top' className='scroll-mt-[88px] container flex flex-col items-center justify-center py-4 md:py-12'>
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
                <div
                    className='flex flex-col gap-8 items-center w-full sm:w-5/6'
                >
                    <div
                        className='w-full grid auto-rows-fr gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    >
                        {lawyerData?.data && lawyerData.data.length > 0 ? (
                            lawyerData.data.map((lawyer, idx) => (
                                    <MemberCard key={idx} lawyer={lawyer}/>
                                )
                            )) : (
                            <div>Nincs a keresésnek megfelelő eredmény.</div>
                        )}
                    </div>
                    <PaginationWithEllipsis
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pageSize={tabletMode ? 21 : 20}
                        totalEntries={totalEntries}
                    />
                </div>
            </div>
        </>
    )
}

export default Members;