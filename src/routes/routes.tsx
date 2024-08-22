import Home from "@/components/home/Home.tsx";
import {createRef} from "react";
import Members from "@/components/members/Members.tsx";

export const routes = [
    { path: '/', name: 'Magunkról', element: <Home />, nodeRef: createRef() },
    {
        path: '/ugyvedkereso',
        name: 'Ügyvédkereső',
        element: <Members />,
        nodeRef: createRef(),
    },
    // {
    //     path: '/tisztsegviseloink',
    //     name: 'Tisztségviselőink',
    //     element: <OfficeBearers />,
    //     nodeRef: createRef(),
    // },
    // {
    //     path: '/ugyfel-jogok',
    //     name: 'Ügyfél jogok',
    //     element: <CustomerRights />,
    //     nodeRef: createRef(),
    // },
    // {
    //     path: '/hogyan-valasszunk-ugyvedet',
    //     name: 'Hogyan válasszunk ügyvédet?',
    //     element: <HowToChoose />,
    //     nodeRef: createRef(),
    // },
    // {
    //     path: '/hasznos-linkek',
    //     name: 'Hasznos linkek',
    //     element: <ImportantLinks />,
    //     nodeRef: createRef(),
    // },
];