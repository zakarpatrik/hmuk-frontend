import {TbFileText} from "react-icons/tb";
import {FaPhoneAlt} from "react-icons/fa";
import {FaCreditCard, FaEnvelope, FaFax} from "react-icons/fa6";

const mobileNavItems = [
    {
        label: 'Magunkról',
        key: '',
    },
    {
        label: 'Tagjaink',
        key: 'ugyvedkereso',
    },
    {
        label: 'Tisztségviselőink',
        key: 'tisztsegviseloink',
    },
    {
        label: 'Ügyfél jogok',
        key: 'ugyfel-jogok',
    },
    {
        label: 'Hogyan válasszunk ügyvédet?',
        key: 'hogyan-valasszunk-ugyvedet',
    },
    {
        label: 'Hasznos linkek',
        key: 'hasznos-linkek',
    },
];

const downloadableFiles = [
    {
        label: 'Iránymutatás az ügyvédjelöltek alkalmazásáról',
        key: '#1',
        icon: TbFileText
    },
    {
        label: 'A Magyar Ügyvédi Kamara Alapszabálya',
        key: '#2',
        icon: TbFileText
    },
    {
        label: 'Foglalkoztatásra jogosult ügyvédek',
        key: '#3',
        icon: TbFileText
    },
    {
        label: 'Alapszabály',
        key: '#4',
        icon: TbFileText
    },
]

const contacts = [
    {
        label: 'Tel.: +36 36 518-590',
        href: 'tel: +3636518590',
        key: 'tel',
        icon: FaPhoneAlt
    },
    {
        label: 'E-mail: hmuk@t-online.hu',
        href: 'mailto: hmuk@t-online.hu',
        key: 'mail',
        icon: FaEnvelope
    },
    {
        label: 'Fax.: +36 36 518-590',
        key: 'fax',
        icon: FaFax
    },
    {
        label: 'Bankszámla számunk: 10403507-50526772-56501001',
        key: 'credit_card',
        icon: FaCreditCard
    },
]

export { contacts, downloadableFiles, mobileNavItems };