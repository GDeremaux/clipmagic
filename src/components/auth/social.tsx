"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row gap-x-2 items-center w-full">
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => onClick("github")}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>

  )
}

export default Social;