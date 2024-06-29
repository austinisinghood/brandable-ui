import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { Button } from "@/app/components/atoms/Button/Button";

import { useTheme } from "@/app/hooks/useTheme";

type NavItem = {
  label: string;
  href: string;
  offset?: number;
};

type MenuProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  navItems: NavItem[];
};

export const Menu = ({ setIsOpen, isOpen, navItems }: MenuProps) => {
  const { styles } = useTheme();

  const pathname = usePathname();

  return (
    <ul
      className={twMerge(
        styles.menu,
        `w-full h-screen flex flex-col items-center justify-center lg:w-fit lg:h-auto lg:flex-row`,
        isOpen ? styles.fadeIn : styles.fadeOut
      )}
    >
      {navItems.map((item, index) => (
        <li key={index} className="button-text mb-12 lg:ml-6 lg:mb-0">
          <Link
            href={item.href}
            className={twMerge(
              `text-5xl border-b-4 border-transparent lg:text-xl lg:border-b-2`,
              pathname === item.href
                ? "text-ink border-ink"
                : "text-ink hover:ink"
            )}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className="mb-4 lg:ml-6 lg:mb-0">
        <AnchorLink
          href="#contact"
          offset={-50}
          onClick={() => setIsOpen(false)}
        >
          <Button
            type="button"
            className="hidden lg:flex"
            color="ink"
            variant="solid"
            size="md"
          >
            Contact
          </Button>
          <Button
            type="button"
            className="w-[250px] flex items-center justify-center lg:hidden"
            color="ink"
            variant="solid"
            size="md"
          >
            Contact
          </Button>
        </AnchorLink>
      </li>
    </ul>
  );
};
