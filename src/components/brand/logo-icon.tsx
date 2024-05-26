"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

interface LogoIconProps {
	width?: number;
	height?: number;
  variant?: "default" | "unicolor"
  invertTheme?: boolean
  className?: string
}

const LogoIcon = ({
	width,
	height,
  variant = "default",
  invertTheme,
  className
}: LogoIconProps) => {
  const {theme, setTheme} = useTheme();

	return (
    <>
      {
        (variant === "unicolor") &&
          <>
            <Image
              src={`/brand/logo_icon_unicolor_${invertTheme ? "dark" : "light"}.svg`}
              alt="Clipmagic logo"
              width={width ? width : (height ? height : 100)}
              height={height ? height : (width ? width : 100)}
              className={`dark:hidden ${className}`}
            />
            <Image
              src={`/brand/logo_icon_unicolor_${invertTheme ? "light" : "dark"}.svg`}
              alt="Clipmagic logo"
              width={width ? width : (height ? height : 100)}
              height={height ? height : (width ? width : 100)}
              className={`hidden dark:block ${className}`}
            />
          </>
      }
      {
        variant === "default" &&
          <Image
            src={`/brand/logo_icon.svg`}
            alt="Clipmagic logo"
            width={width ? width : (height ? height : 100)}
            height={height ? height : (width ? width : 100)}
            className={`${className}`}
          />
      }

    </>
	);
}

export default LogoIcon;