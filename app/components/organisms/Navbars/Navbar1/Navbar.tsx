"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { Menu } from "./Menu";

import { useTheme } from "@/app/hooks/useTheme";

interface NavbarProps {
  navItems: {
    label: string;
    href: string;
  }[];
  alert?: React.ReactNode;
}

export function Navbar({ navItems, alert }: NavbarProps) {
  const { styles, theme } = useTheme();

  // Hamburger color
  const [hamburgerColor, setHamburgerColor] = useState("black"); // need to figure out how to hook this up the themes

  // Mobile nav toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hiding nav on admin pages
  const [hideNav, setHideNav] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname?.includes("/admin")) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [pathname]);

  // Check if homepage
  const isHomepage = pathname === "/";

  // Adding no-scroll class to body when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  // The actual navbar
  return hideNav ? null : (
    // Navbar container
    <>
      {alert && (
        <div className="z-50 fixed top-0 right-0 w-full h-[45px] flex flex-row items-center justify-center px-4 py-2 rounded-lg shadow-sm">
          {alert}
        </div>
      )}
      <header
        className={twMerge(
          `absolute top-0 z-40 w-full h-[150px] -mb-[150px]`,
          alert !== undefined && `mt-10`,
          styles.NavbarContainer
        )}
      >
        {/* Navbar wrapper */}
        <motion.div
          className={twMerge(`w-full p-6`, styles.navbarWrapper)}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          {/* The navbar itself */}
          <nav
            className={twMerge(
              `w-full max-w-screen-xl flex flex-row items-center justify-between mx-auto p-2`,
              styles.navbar
            )}
          >
            {/* The brand logo */}
            <Link className={twMerge(styles.navbarLogo, `z-40`)} href="/">
              <Image
                src={`/logos/${theme}/navbar-logo.png`}
                alt="Brandable UI logo"
                width={350}
                height={100}
                priority
              />
            </Link>
            {/* The mobile menu button/hamburger nav */}
            <div className="relative z-40 lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={toggleMenu}
                duration={0.75}
                size={30}
                distance="sm"
                color={hamburgerColor}
                rounded
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-full flex-row items-center justify-end">
              <Menu setIsOpen={setIsOpen} isOpen={isOpen} navItems={navItems} />
            </div>
          </nav>
          {/* Mobile "pop up" menu */}
          <div
            className={twMerge(
              `z-30 fixed top-0 w-full h-screen flex items-center justify-center transition-all ease-in-out lg:hidden`,
              isOpen
                ? `right-0 duration-[.75s]`
                : `-right-[200vw] duration-[1s]`
            )}
          >
            <Menu setIsOpen={setIsOpen} isOpen={isOpen} navItems={navItems} />
          </div>
        </motion.div>
      </header>
    </>
  );
}
