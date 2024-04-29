import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      name: "Home",
      active: pathname === "/",
    },
    // {
    //   href: "/projects",
    //   name: "Projects",
    //   active: pathname === "/projects",
    // },
    // {
    //   href: "/contact",
    //   name: "Contact",
    //   active: pathname === "/contact",
    // },
  ];
  return (
    <nav className="flex justify-between mx-auto py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="h-5 w-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">PORTFOLIO</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={
              route.active
                ? "text-black font-medium dark:text-white"
                : "text-muted-foreground"
            }>
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
