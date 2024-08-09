import Logo from "@/components/header/logo/Logo.tsx";
import {useNavigate} from "react-router-dom";
import DesktopMenu from "@/components/header/desktop/DesktopMenu.tsx";

const DesktopNavigation = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return (
            <div
                className="flex gap-2 items-center justify-between cursor-pointer w-full"
                onClick={handleClick}
            >
                <Logo />
                <DesktopMenu />
            </div>
    );
};

export default DesktopNavigation;
