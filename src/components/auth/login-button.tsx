"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/login")
    }

    if (mode == "modal") {
        return <p>To do : implement modal</p>
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )
}

export default LoginButton;