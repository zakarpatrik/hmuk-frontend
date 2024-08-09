import { useEffect, useState } from 'react';
import DesktopNavigation from './desktop/DesktopNavigation.tsx';
import {cn} from "@/lib/utils.ts";

const Header = () => {
    const [background, setBackground] = useState('transparent');
    const [scrolled, setScrolled] = useState('');

    useEffect(() => {
        const changeBackground = () => {
            const newBackground = window.scrollY >= 150 ? '#1e2e45EE' : 'transparent';
            const newColor = window.scrollY >= 150 ? 'scrolled' : '';
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
            className={cn('flex w-full justify-center fixed py-2 top-0 z-50')}
            style={{ background: background, transition: 'background 0.5s ease-in' }}
        >
            <div className="flex container justify-between py-4 items-center">
                <DesktopNavigation />
            </div>
        </div>
    );
};

export default Header;
