import LogoIcon from "@/components/header/logo/LogoIcon.tsx";
import {useNavigate} from "@tanstack/react-router";

const Logo = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate({ to: '/' });
    return (
        <div onClick={handleClick} className="flex gap-2 items-center text-white stroke-white cursor-pointer">
            <LogoIcon />
            <h4 className='text-base font-medium'>
                Egri Ügyvédi Kamara
            </h4>
        </div>
    );
};

export default Logo;
