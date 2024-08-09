import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button.tsx";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Magunkrol",
        href: "/",
        description:
            "Valami rovid leiras magunkrol, lehet nem is fog kelleni ez",
    },
    {
        title: "Magunkrol",
        href: "/",
        description:
            "Valami rovid leiras magunkrol, lehet nem is fog kelleni ez",
    },
    {
        title: "Magunkrol",
        href: "/",
        description:
            "Valami rovid leiras magunkrol, lehet nem is fog kelleni ez",
    },
    {
        title: "Magunkrol",
        href: "/",
        description:
            "Valami rovid leiras magunkrol, lehet nem is fog kelleni ez",
    },
    {
        title: "Magunkrol",
        href: "/",
        description:
            "Valami rovid leiras magunkrol, lehet nem is fog kelleni ez",
    },
]

const DesktopMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Kamara</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid grid-cols-1 gap-3 w-[150px] p-4">
                            {components.map((component) => (
                                <NavigationMenuLink
                                    key={component.title}
                                    href={component.href}
                                    className='text-sm'
                                >
                                    <b>{component.title}</b>
                                </NavigationMenuLink>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href={'/ugyvedkereso'} className='group'>
                        <Button variant='ghost'>
                            Tagjaink
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default DesktopMenu;