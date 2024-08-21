import LogoIcon from "@/components/header/logo/LogoIcon.tsx";

const Logo = () => {
    return (
        <div className="flex gap-2 items-center text-white stroke-white">
            <LogoIcon />
            <h4 className='text-base font-medium'>
                Egri Ügyvédi Kamara
            </h4>
        </div>
    );
};

export default Logo;
