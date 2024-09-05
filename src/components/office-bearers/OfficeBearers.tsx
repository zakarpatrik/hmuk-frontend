import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    CommitteeApiAttributes,
    LongText,
    MemberData,
    Payload,
} from '@/api/types.ts';
import qs from 'qs';
import SiteHero from "@/components/hero/SiteHero.tsx";

const OfficeBearers = () => {
    const [lawyerData, setLawyerData] =
        useState<Payload<CommitteeApiAttributes>>();

    useEffect(() => {
        const presidencyQuery = qs.stringify(
            {
                populate: [
                    'Elnokseg.Elnok',
                    'Elnokseg.Elnokhelyettesek',
                    'Elnokseg.Titkar',
                    'Elnokseg.VezetoFegyelmiBiztos',
                    'Elnokseg.FegyelmiMegbizott',
                    'Elnokseg.Tagok',
                    'EllenorzoBizottsag.Elnok',
                    'EllenorzoBizottsag.Tagok',
                    'FegyelmiBizottsag.Tagok',
                    'OsszeferhetetlensegiBizottsag.Elnok',
                    'OsszeferhetetlensegiBizottsag.Tagok',
                    'OsszeferhetetlensegiBizottsag.MukKuldottek',
                ],
            },
            {
                encodeValuesOnly: true,
            }
        );
        try {
            axios
                .get(
                    `${import.meta.env.VITE_API_URL}/api/tisztsegviselok?${presidencyQuery}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(res =>
                    setLawyerData(res.data as Payload<CommitteeApiAttributes>)
                );
        } catch (err) {
            console.error('Error fetching data: ', err);
        }
    }, []);

    const presidency = lawyerData?.data.attributes.Elnokseg;
    const rulesCommittee = lawyerData?.data.attributes.EllenorzoBizottsag;
    const disciplinaryBoard = lawyerData?.data.attributes.FegyelmiBizottsag;
    const conflictBoard =
        lawyerData?.data.attributes.OsszeferhetetlensegiBizottsag;

    return (
        <div className='flex flex-col'>
            <SiteHero
                title={lawyerData?.data.attributes.Cim as string}
                desc={lawyerData?.data.attributes.Alcim as LongText}
            />
            <div className="flex py-16 flex-col items-center gap-12">
                <div className="container flex flex-col gap-4">
                    <h3 className='text-4xl font-semibold font-title'>Elnökség</h3>
                    {renderMembers(presidency?.Elnok.data, 'Elnök')}
                    {renderMembers(
                        presidency?.Elnokhelyettesek.data,
                        'Elnökhelyettesek'
                    )}
                    {renderMembers(presidency?.Titkar.data, 'Titkár')}
                    {renderMembers(
                        presidency?.VezetoFegyelmiBiztos.data,
                        'Vezető Fegyelmi Biztos'
                    )}
                    {renderMembers(
                        presidency?.FegyelmiMegbizott.data,
                        'Fegyelmi megbízott'
                    )}
                    {renderMembers(presidency?.Tagok.data, 'Elnökségi tagok')}
                </div>
                <div className="container flex flex-col gap-4">
                    <h3 className='text-4xl font-semibold font-title'>Ellenőrző Bizottság</h3>
                    {renderMembers(rulesCommittee?.Elnok.data, 'Elnök')}
                    {renderMembers(
                        rulesCommittee?.Tagok.data,
                        'Bizottsági tagok'
                    )}
                </div>
                <div className="container flex flex-col gap-4">
                    <h3 className='text-4xl font-semibold font-title'>Fegyelmi Bizottság</h3>
                    {renderMembers(disciplinaryBoard?.Tagok.data, 'Tagok')}
                </div>
                <div className="container flex flex-col gap-4">
                    <h3 className='text-4xl font-semibold font-title'>Összeférhetetlenségi Bizottság</h3>
                    {renderMembers(conflictBoard?.Elnok.data, 'Elnök')}
                    {renderMembers(conflictBoard?.Tagok.data, 'Tagok')}
                    {renderMembers(
                        conflictBoard?.MukKuldottek.data,
                        'MÜK Küldöttek'
                    )}
                </div>
            </div>
        </div>
    );
};

const renderMembers = (
    memberData: MemberData | MemberData[] | undefined,
    position: string
) => {
    if (!memberData) {
        return;
    } else if (Array.isArray(memberData)) {
        return (
            <div className='flex-col gap-2 md:flex-row md:items-end'>
                <h4 className="text-2xl font-semibold font-title">
                    {position}:
                </h4>
                <p className="pb-0.5">
                    {(memberData as MemberData[]).map(
                        (member, index) =>
                            `${member.attributes.Nev}${memberData.length !== index + 1 ? ', ' : ''}`
                    )}
                </p>
            </div>
        );
    } else {
        return (
            <div className='flex-col gap-0 md:gap-2 md:flex-row md:items-end'>
                <h4 className="text-2xl font-semibold font-title">
                    {position}:
                </h4>
                <p className="pt-0.5">{memberData?.attributes.Nev}</p>
            </div>
        );
    }
};

export default OfficeBearers;
