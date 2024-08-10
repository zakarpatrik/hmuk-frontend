import LogoIcon from "@/components/header/logo/LogoIcon.tsx";

const Logo = () => {
    return (
        <div className="flex gap-2 items-center">
            <LogoIcon />
            <h4 className='text-base font-medium'>
                Egri Ügyvédi Kamara
            </h4>
        </div>
    );
};

export default Logo;
