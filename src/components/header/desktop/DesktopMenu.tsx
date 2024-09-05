import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button.tsx";
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

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
    return (
        <NavigationMenu className='text-white'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                            Kamara
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid grid-cols-1 gap-1 w-max p-1">
                            {menuItems.map((component) => (
                                <Link
                                    key={component.title}
                                    to={component.href}
                                    hrefLang={'hu'}
                                    className={cn('p-2 rounded-md text-sm w-full whitespace-nowrap transition duration-100 ease-linear', location.pathname === component.href ? 'bg-primary text-white' : 'bg-transparent text-foreground hover:bg-slate-500 hover:text-white')}
                                >
                                    <span>{component.title}</span>
                                </Link>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href={'/ugyvedkereso'} className='group'>
                        <Button variant='ghost' className='bg-transparent hover:bg-transparent hover:text-white'>
                            Tagjaink
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default DesktopMenu;