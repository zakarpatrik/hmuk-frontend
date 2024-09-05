import {ReactNode} from "react";
import {Link} from "react-router-dom";

const FooterLink = ({icon, link, text}: { icon?: ReactNode; link?: string; text: string; }) => {
    return (
        <div className="flex text-white items-center gap-2 [&_svg]:min-w-4 [&_svg]:h-4">
            {icon ? icon : null}
            {link ? (
                <Link to={link ?? '#'} hrefLang={'hu'} className="text-white text-sm">
                    {text}
                </Link>
            ) : (
                <span className="text-white text-sm">
                    {text}
                </span>
            )}
        </div>
    )
}

export default FooterLink;