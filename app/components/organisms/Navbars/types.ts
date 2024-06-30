export type NavItem = {
  label: string;
  href: string;
  subNavItems?: NavItem[];
  type?: "button" | "link";
};
