"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { useTheme } from "@/app/hooks/useTheme";

type NavItem = {
  label: string;
  href: string;
  offset?: number;
};

type MenuProps = {
  navItems: NavItem[];
};

export function Basebar({ navItems }: MenuProps) {
  const { styles, theme } = useTheme();

  const [hideBasebar, setHideBasebar] = useState(false);
  const pathname = usePathname();

  // Hiding nav on admin pages
  useEffect(() => {
    if (pathname?.includes("/admin")) {
      setHideBasebar(true);
    } else {
      setHideBasebar(false);
    }
  }, [pathname]);

  return hideBasebar ? null : (
    <footer className="w-full bg-paper-light py-24">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center flex-wrap gap-y-4 mx-auto px-6 lg:flex-row lg:justify-between">
        <motion.div
          className="w-full flex flex-col items-center justify-center pt-24 pb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={`/logos/${theme}/navbar-logo.png`}
            alt="Brandable UI logo"
            width={500}
            height={500}
            priority
          />
          <ul className="w-full flex items-center justify-center py-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={twMerge(
                    `button-text mx-2 border-b border-transparent transition-all duration-200 ease-in-out lg:border-b-2`,
                    pathname === item.href
                      ? "text-ink border-ink"
                      : "text-ink hover:ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="w-full flex flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <small className="talk text-ink">
            All rights reserved &copy; {new Date().getFullYear()}
          </small>
          <small className="talk text-ink">
            <a
              href="https://hankerhouse.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Built by <span className="underline">Austin Isinghood</span>
            </a>
          </small>
        </motion.div>
      </div>
    </footer>
  );
}
