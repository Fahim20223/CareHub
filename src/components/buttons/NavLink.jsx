"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-medium ${
        isActive
          ? "text-white bg-pink-500 rounded-xl hover:text-white dark:bg-green-400 border-0"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
