"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Logo from "../images/logo.png";
import { menuItems } from "../data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // Get active page link
  const pathname = usePathname();

  // Variables to control menu open and close
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference for outside click handling
  const ref = useRef(null);

  // Open menu
  const openMenu = () => setMenuOpen(true);

  // Close menu
  const closeMenu = () => setMenuOpen(false);

  // Handle outside click
  useEffect(() => {
    const handleOutSideClick = (event) => {
      // If outside menu is clicked,close the menu
      if (!ref.current?.contains(event.target)) {
        closeMenu();
      }
    };

    //Listen to window click event
    window.addEventListener("mousedown", handleOutSideClick);

    // Dispose the outside click event handling
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div
      id="top"
      className="w-screen flex justify-between items-center bg-black border border-white/10 py-3"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          width={40}
          height={40}
          src={Logo}
          className="pl-2 hover:scale-95 logo-animation"
          alt="Izoh Creatives"
        />
      </Link>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-10 pr-8">
        {menuItems.map((menuItem, index) => (
          <ScrollLink
            key={index}
            to={menuItem.link}
            className={`text-xs font-medium cursor-pointer ${
              pathname == menuItem.link && "text-red-600"
            } hover:scale-[98%] hover:text-red-500 smooth-animation `}
          >
            {menuItem.name}
          </ScrollLink>
        ))}
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={ref}
          className="w-55 h-screen flex flex-col items-center space-y-6 md:hidden absolute top-0 right-0 z-1000 bg-red-500 px-3 py-4 smooth-animation"
        >
          {/* Close icon */}
          <X
            className="w-5 h-5 cursor-pointer hover:text-[#121212] smooth-animation"
            onClick={closeMenu}
          />
          {/* Menu items */}
          {menuItems.map((menuItem, index) => (
            <ScrollLink
              key={index}
              to={menuItem.link}
              className={`text-xs font-medium cursor-pointer  ${
                pathname == menuItem.link && "text-[#121212]"
              } hover:text-[#121212] smooth-animation`}
              onClick={closeMenu}
            >
              {menuItem.name}
            </ScrollLink>
          ))}
        </div>
      )}
      {/* Menu toggle icon */}
      {!menuOpen && (
        <Menu
          className="w-5 h-5 md:hidden cursor-pointer mr-7 hover:text-red-500 smooth-animation"
          onClick={openMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
