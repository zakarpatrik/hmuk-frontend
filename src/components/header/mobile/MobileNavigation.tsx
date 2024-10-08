import MobileMenu from "@/components/header/mobile/MobileMenu.tsx";
import Logo from "@/components/header/logo/Logo.tsx";

const MobileNavigation = () => {
    return (
        <div className='flex lg:hidden w-full bg-primary justify-between items-center text-white [&_svg]:fill-white px-4 py-6'>
            <Logo />
            <MobileMenu />
        </div>
    )
}

export default MobileNavigation;