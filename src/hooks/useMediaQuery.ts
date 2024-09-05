import { useState, useEffect } from 'react';

export const mobileBreakpoint = '(max-width: 576px)';
export const tabletBreakpoint = '(max-width: 1023px)';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};
