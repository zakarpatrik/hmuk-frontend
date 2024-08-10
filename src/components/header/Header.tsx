import { useEffect, useState } from 'react';
import DesktopNavigation from './desktop/DesktopNavigation.tsx';
import {cn} from "@/lib/utils.ts";
import MobileNavigation from "@/components/header/mobile/MobileNavigation.tsx";

const Header = () => {
    const [background, setBackground] = useState('bg-transparent');
    const [scrolled, setScrolled] = useState('');

    useEffect(() => {
        const changeBackground = () => {
            const newBackground = window.scrollY >= 50 ? 'bg-primary text-white [&_svg]:fill-white' : 'transparent text-white [&_svg]:fill-white';
            const newColor = window.scrollY >= 50 ? 'scrolled' : '';
            setBackground(newBackground);
            setScrolled(newColor);
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, [scrolled]);

    return (
        <div
            className={cn('flex w-full justify-center fixed lg:py-2 top-0 z-50 transition duration-200 ease-in', background)}
        >
            <div className="hidden lg:flex container justify-between py-4 items-center">
                <DesktopNavigation />
            </div>
            <MobileNavigation />
        </div>
    );
};

export default Header;
