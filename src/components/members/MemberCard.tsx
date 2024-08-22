import React from 'react';
import {Uegyvedek} from '@/api/types.ts';
import {Link} from "react-router-dom";

type MemberCardProps = {
    lawyer: Uegyvedek;
};

const MemberCard: React.FC<MemberCardProps> = ({ lawyer }) => {
    return (
        <div
            className="w-full shadow-md rounded-md bg-white p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out"
        >
            <div className="flex flex-col items-between">
                <h2 className='text-base font-semibold text-primary'>{lawyer.attributes.Nev}</h2>
                <h3 className="mb-4 text-accent">{lawyer.attributes.Iroda}</h3>
                <Link
                    className='hover:text-accent'
                    hrefLang='hu'
                    to={`https://www.google.com/maps/search/?api=1&query=${lawyer.attributes.Cim}`}
                    target="_blank"
                >
                    {lawyer.attributes.Cim}
                </Link>
                <div className='flex flex-col'>
                    <div>
                        <span className='font-medium'>Telefonszám:{' '}</span>
                        {lawyer.attributes.Telefonszam.map((t, idx) => (
                            <Link key={idx} to={`tel: ${t.Telefonszam}`} hrefLang='hu' className='hover:text-accent'>
                                {t.Telefonszam}
                                {lawyer.attributes.Telefonszam.length > 1 &&
                                    idx !== lawyer.attributes.Telefonszam.length - 1 &&
                                    ', '}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <span className='font-medium'>Email:{' '}</span>
                        {lawyer.attributes.Email.map((t, idx) => (
                            <Link key={idx} to={`mailto: ${t.Email}`} hrefLang='hu' className='hover:text-accent'>
                                {t.Email}
                                {lawyer.attributes.Email.length > 1 &&
                                    idx !== lawyer.attributes.Email.length - 1 &&
                                    ', '}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
