"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

interface FullLogoProps {
	width?: number;
	height?: number;
  variant?: "default" | "unicolor"
  className?: string
}

const FullLogo = ({
	width,
	height,
  variant = "default",
  className
}: FullLogoProps) => {
  const {theme, setTheme} = useTheme();

	return (
    <>
      <Image
        src={`/brand/full_logo_light${variant === "unicolor" ? "_unicolor" : ""}.svg`}
        alt="Clipmagic logo"
        width={width ? width : (height ? height*4 : 400)}
        height={height ? height : (width ? width/4 : 100)}
        className={`dark:hidden ${className}`}
      />
      <Image
        src={`/brand/full_logo_dark${variant === "unicolor" ? "_unicolor" : ""}.svg`}
        alt="Clipmagic logo"
        width={width ? width : (height ? height*4 : 400)}
        height={height ? height : (width ? width/4 : 100)}
        className={`hidden dark:block ${className}`}
      />
    </>
	);
}

export default FullLogo;