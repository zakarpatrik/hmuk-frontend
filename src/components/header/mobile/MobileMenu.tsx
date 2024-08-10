import {MenuIcon, XIcon} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import Logo from "@/components/header/logo/Logo.tsx";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

const menuItems: { title: string; href: string }[] = [
    {
        title: "Magunkról",
        href: "/",
    },
    {
        title: "Ügyvédkereső",
        href: "/ugyvedkereso",
    },
    {
        title: "Tisztségviselőink",
        href: "/tisztsegviseloink",
    },
    {
        title: "Ügyfél jogok",
        href: "/ugyfel-jogok",
    },
    {
        title: "Hogyan válasszunk ügyvédet?",
        href: "/hogyan-valasszunk-ugyvedet",
    },
    {
        title: "Hasznos linkek",
        href: "/hasznos-linkek",
    },
]

const MobileMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation();

    const handleClose = () => setOpen(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div className='p-1 bg-gray-900/60 rounded-md'>
                    <MenuIcon className='w-6 h-6'/>
                </div>
            </SheetTrigger>
            <SheetContent className='bg-primary flex flex-col gap-8 border-none w-5/6 text-white [&>button]:hidden p-6'>
                <div className='flex w-full justify-between [&_svg]:fill-white'>
                    <Logo/>
                    <div className='p-1 bg-gray-900/60 rounded-md'>
                        <XIcon className='w-6 h-6' onClick={handleClose}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {menuItems.map((item, idx) => {
                        return (
                            <Link key={idx} to={item.href} hrefLang={'hu'}
                                  className={cn('p-2 rounded-md font-medium', location.pathname === item.href && 'bg-white text-primary')}
                                  onClick={handleClose}>{item.title}</Link>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu;