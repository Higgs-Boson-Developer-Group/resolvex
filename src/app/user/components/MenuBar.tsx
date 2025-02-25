"use client";

// import { logoutUser } from "@/server/controllers/user.controller";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

export default function MenuBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    // const { messageStatus, message } = await logoutUser();
    // if (messageStatus === "success") {
    //   router.push("/auth/login");
    // } else {
    //   alert(message);
    // }
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3" ref={menuRef}>
        <div>
          <button
            type="button"
            onClick={toggleMenu}
            className="relative flex items-center gap-2 rounded-full bg-gray-800 p-2 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            <Image
              className="size-8 rounded-full"
              src="https://toolkits.cloudmateria.com/api/image-generator/text?text=Mark%20Menorca&bgColor=1B1B1E&fgColor=ffffff"
              alt="User avatar"
              width={32}
              height={32}
              unoptimized
            />
            <FiChevronDown className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            <a
              href="/management/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
            >
              <FiUser /> Profile
            </a>
            <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
              <FiLogOut /> Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
