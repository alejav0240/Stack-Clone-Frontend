// components/DropdownItem.tsx
import Link from "next/link";
import { type FC, type ReactNode, MouseEvent } from "react";

interface DropdownItemProps {
    tag?: "a" | "button";
    to?: string;
    onClick?: () => void;
    onItemClick?: () => void;
    baseClassName?: string;
    className?: string;
    children: ReactNode;
}

const DropdownItem: FC<DropdownItemProps> = ({
                                                 tag = "button",
                                                 to,
                                                 onClick,
                                                 onItemClick,
                                                 baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                                                 className = "",
                                                 children,
                                             }) => {
    const combinedClasses = `${baseClassName} ${className}`.trim();

    const handleClick = (event: MouseEvent) => {
        if (tag === "button") {
            event.preventDefault();
        }
        if (onClick) onClick();
        if (onItemClick) onItemClick();
    };

    if (tag === "a" && to) {
        return (
            <Link href={to} className={combinedClasses} onClick={handleClick}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={handleClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default DropdownItem;
