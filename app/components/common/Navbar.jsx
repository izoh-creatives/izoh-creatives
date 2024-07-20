"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "@/app/styles/navbar.module.scss";
import { navItems } from "@/app/demo/navItems";
import {
  CrossIcon,
  ListCollapseIcon,
  MenuIcon,
  SidebarCloseIcon,
} from "lucide-react";

const Navbar = () => {
  const menuRef = useRef();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  //Open menu
  const openMenu = () => setMenuOpen(true);

  //Close menu
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    //Close menu on outside click
    const closeOnClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", closeOnClick);

    return () => document.removeEventListener("mousedown", closeOnClick);
  }, []);

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <p className={styles.logo}>Izoh Creatives</p>
      </Link>
      <div
        ref={menuRef}
        className={`${styles.navItems} ${menuOpen && styles.openMenu}`}
      >
        <button onClick={closeMenu} className={styles.closeIcon}>
          X
        </button>
        {navItems.map((navItem, index) => {
          const isActive = pathname == navItem.link;

          return (
            <Link href={navItem.link} key={index}>
              <p
                onClick={closeMenu}
                className={`${styles.navItem} ${isActive && styles.activeLink}`}
              >
                {navItem.title}
              </p>
            </Link>
          );
        })}
      </div>
      <MenuIcon onClick={openMenu} className={styles.menuIcon} />
    </div>
  );
};

export default Navbar;
