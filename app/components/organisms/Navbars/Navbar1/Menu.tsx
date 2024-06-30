import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

import { NavItem } from "@/app/components/organisms/Navbars/types";
import { Button } from "@/app/components/atoms/Button/Button";

import { useTheme } from "@/app/hooks/useTheme";

import { FaChevronDown } from "react-icons/fa";

type MenuProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  navItems: NavItem[];
};

export const Menu = ({ setIsOpen, isOpen, navItems }: MenuProps) => {
  const { styles } = useTheme();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<{
    [key: number]: boolean;
  }>({});
  const pathname = usePathname();

  const toggleSubmenu = (index: number) => {
    setIsSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ul
      className={twMerge(
        styles.menu,
        `w-full h-screen flex flex-col items-center justify-center text-center lg:w-fit lg:h-auto lg:flex-row lg:text-left`,
        isOpen ? styles.fadeIn : styles.fadeOut
      )}
    >
      {navItems.map((item, index) => (
        <li
          key={index}
          className="relative w-full py-2 transition-all duration-300 ease-in-out lg:px-2 lg:w-auto"
        >
          {item.type === "link" ? (
            item.subNavItems ? (
              <>
                <AnimatePresence>
                  {isSubmenuOpen[index] && (
                    <motion.div
                      className="fixed inset-0 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      onMouseOver={() =>
                        setIsSubmenuOpen({ ...isSubmenuOpen, [index]: false })
                      }
                    />
                  )}
                </AnimatePresence>
                <div className="relative flex flex-col items-center">
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className={twMerge(
                      `relative z-0 text-5xl border-b-4 border-transparent lg:text-xl lg:border-b-2`,
                      pathname === item.href
                        ? "text-ink border-ink"
                        : "text-ink hover:text-ink"
                    )}
                  >
                    {item.label}
                    <FaChevronDown
                      className={twMerge(
                        `inline-block text-ink text-3xl mx-2 -mt-2 transition-all duration-500 ease-in-out lg:hidden`,
                        isSubmenuOpen[index] && `transform rotate-180`
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isSubmenuOpen[index] && (
                      <motion.div
                        className="w-full text-center lg:absolute lg:-z-10 lg:top-8 lg:w-fit lg:mt-2"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={submenuVariants}
                        transition={{ type: "spring", duration: 0.5 }}
                      >
                        <div
                          className={twMerge(
                            `w-full min-w-[250px] text-center mt-2 pt-2 px-4 pb-12 shadow-lg lg:w-fit lg:pb-4 lg:rounded-b-lg`,
                            styles.submenu
                          )}
                        >
                          {item.subNavItems.map((subNavItem, subIndex) =>
                            subNavItem.type === "link" ? (
                              <Link
                                href={subNavItem.href}
                                key={subIndex}
                                className={twMerge(
                                  `block text-5xl border-b-4 border-transparent lg:text-xl lg:border-b-2 py-2`,
                                  pathname === subNavItem.href
                                    ? styles.activeSubNavItem
                                    : styles.subNavItem
                                )}
                              >
                                {subNavItem.label}
                              </Link>
                            ) : (
                              <Link
                                href={subNavItem.href}
                                onClick={() => setIsOpen(false)}
                                className="w-full"
                              >
                                <Button
                                  type="button"
                                  className="hidden w-full items-center justify-center lg:flex"
                                  color="paper"
                                  variant="solid"
                                  size="lg"
                                >
                                  {subNavItem.label}
                                </Button>
                                <Button
                                  type="button"
                                  className="w-[250px] flex items-center justify-center mx-auto mt-4 lg:hidden"
                                  color="paper"
                                  variant="solid"
                                  size="lg"
                                >
                                  {subNavItem.label}
                                </Button>
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className={twMerge(
                  `text-5xl border-b-4 border-transparent lg:text-xl lg:border-b-2`,
                  pathname === item.href
                    ? "text-ink border-ink"
                    : "text-ink hover:text-ink"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          ) : (
            <Link
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="mb-4 lg:ml-6 lg:mb-0"
            >
              <Button
                type="button"
                className="hidden lg:flex"
                color="ink"
                variant="solid"
                size="lg"
              >
                {item.label}
              </Button>
              <Button
                type="button"
                className="w-[250px] flex items-center justify-center lg:hidden"
                color="ink"
                variant="solid"
                size="lg"
              >
                {item.label}
              </Button>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
