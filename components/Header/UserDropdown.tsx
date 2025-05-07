"use client";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import DropdownItem from "@/components/ui/dropdown/DropdownItem";
import Dropdown from "@/components/ui/dropdown/Dropdown";

const UserDropdown = () => {
    const { user, logout } = useAuth();
    const queryClient = useQueryClient();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const closeDropdown = () => setIsOpen(false);

    const handleLogout = () => {
        logout();
        queryClient.invalidateQueries();
        router.push("/login");
    };

    if (!user) return null;

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
            >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="/images/user/owner.jpg" alt="UserType" />
        </span>
                <span className="block mr-1 font-medium text-theme-sm">{user.email}</span>
                <svg
                    className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
            >
                <div>
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            {user.first_name} {user.last_name}
          </span>
                    <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
                </div>

                <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            to="/profile"
                            className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            Editar Perfil
                        </DropdownItem>
                    </li>
                </ul>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                    Cerrar sesión
                </button>
            </Dropdown>
        </div>
    );
};

export default UserDropdown;