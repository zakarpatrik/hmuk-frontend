import Logo from "@/components/header/logo/Logo.tsx";
import moment from "moment";
import FooterLink from "@/components/footer/FooterLink.tsx";
import {contacts, downloadableFiles, mobileNavItems} from "@/components/footer/footer-links.ts";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-center bg-primary py-14">
            <div className="container items-center flex flex-col gap-8">
                <Link to={'/'} hrefLang={'hu'}>
                    <Logo/>
                </Link>
                <div className="bg-white mx-20 h-px w-full"/>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between w-full gap-6'
                >
                    <div className="flex flex-col gap-2 basis-full">
                        <h4 className="text-white text-2xl font-bold font-title pb-2">
                            Egri Ügyvédi Kamara
                        </h4>
                        <p className="text-white text-sm">
                            Az oldalon található tartalom tulajdonosa az Egri Ügyvédi Kamara.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 basis-full">
                        <h4 className="text-white text-2xl font-bold font-title pb-2">
                            Oldalaink
                        </h4>
                        {mobileNavItems?.map(item => {
                            return (
                                <FooterLink
                                    key={item.key}
                                    text={item.label}
                                    link={`/${item.key}`}
                                />
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-2 basis-full">
                        <h4 className="text-white text-2xl font-bold font-title pb-2">
                            Letölthető fájlok
                        </h4>
                        {downloadableFiles.map(file => (
                            <FooterLink key={file.key} text={file.label} link={file.key} icon={<file.icon />} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 basis-full">
                        <h4 className="text-white text-2xl font-bold font-title pb-2">
                            Kapcsolat
                        </h4>
                        {contacts.map(contact => (
                            <FooterLink key={contact.key} text={contact.label} link={contact.href} icon={<contact.icon />} />
                        ))}
                    </div>
                </div>
                <div className="bg-white h-px w-full"/>
                <p className="text-white text-center text-xs">
                    Copyright @ {moment().year()} Egri Ügyvédi Kamara. Minden jog
                    fenntartva
                </p>
            </div>
        </div>
    )
}

export default Footer;