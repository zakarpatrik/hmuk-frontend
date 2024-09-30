import Logo from "@/components/header/logo/Logo.tsx";
import DesktopMenu from "@/components/header/desktop/DesktopMenu.tsx";

const DesktopNavigation = () => {
    return (
            <div
                className="flex gap-2 items-center justify-between w-full"
            >
                <Logo />
                <DesktopMenu />
            </div>
    );
};

export default DesktopNavigation;
