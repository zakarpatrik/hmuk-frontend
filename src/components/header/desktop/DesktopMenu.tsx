import {Button} from "@/components/ui/button.tsx";
import {useLocation} from "react-router-dom";
import {cn} from "@/lib/utils.ts";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import {useState} from "react";

const menuItems: { title: string; href: string }[] = [
    {
        title: "Magunkról",
        href: "/",
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

const DesktopMenu = () => {
    const location = useLocation();
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='flex gap-6'>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='bg-transparent hover:bg-transparent hover:text-white text-white'>
                        Kamara
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="grid grid-cols-1 gap-1 w-max p-1">
                        {menuItems.map((component) => (
                            <a
                                key={component.title}
                                href={component.href}
                                hrefLang={'hu'}
                                className={cn('p-2 rounded-md w-full whitespace-nowrap transition duration-100 ease-linear text-sm', location.pathname === component.href ? 'bg-primary text-white' : 'bg-transparent text-foreground hover:bg-slate-500 hover:text-white')}
                            >
                                <span>{component.title}</span>
                            </a>
                        ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <a href={'/ugyvedkereso'}>
                <Button variant='ghost' className='bg-transparent hover:bg-transparent hover:text-white text-white'>
                    Tagjaink
                </Button>
            </a>
        </div>
    )
}
export default DesktopMenu;