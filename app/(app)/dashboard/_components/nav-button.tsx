"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavButtonProps {
  text: string,
  href: string,
  icon?: React.ReactElement
}

const NavButton = ({
  text,
  href,
  icon
}: NavButtonProps) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link href={href} className={cn(
      buttonVariants({size: "lg", variant: isActive ? "secondary" : "ghost"}),
      `flex flex-row items-center justify-start px-4 ${isActive ? "text-foreground" : "text-muted-foreground"}`
    )}>
      {
        icon && (
          React.cloneElement(icon, {
            className: "h-6 w-6 mr-2"
          })
        )
      }
      <span className="pb-0.5">{text}</span>
    </Link>
  );
};

export default NavButton;