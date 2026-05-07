"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobileNav = false, userId }: { isMobileNav?: boolean; userId?: string }) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        const href = item.route === "/profile" ? (userId ? `${item.route}/${userId}` : null) : item.route;

        if (!href) return null;

        const isActive = (pathname.includes(href) && href.length > 1) || pathname === href;

        const LinkComponent = (
          <Link
            href={href}
            key={href}
            role={isMobileNav ? "link" : undefined}
            className={cn(
              isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>{item.label}</p>
          </Link>
        );

        return isMobileNav ? <SheetClose key={href} nativeButton={false} render={LinkComponent} /> : LinkComponent;
      })}
    </>
  );
};

export default NavLinks;
