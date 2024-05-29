"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "../form-success";
import login from "@/actions/login";

import { useState, useTransition } from "react";
import { start } from "repl";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const getErrorMessage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error !== null) {
    switch (error) {
      case "OAuthAccountNotLinked":
        return "Another account exists with the same email address! Please use the sign-in method you've originally used!";
      default:
        return "Oops! Something went wrong!";
    }
  }
  
  return undefined;
};

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>(getErrorMessage());
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const loginResponse: any = await login(values);

      setSuccess(loginResponse.success || "");
      setError(loginResponse.error || "");
    });
  };

	return (
		<CardWrapper
      cardTitle="Log in"
			cardDescription="Welcome back"
			backButtonLabel="Don't have an account? Register"
			backButtonHref="register"
			showSocial
		>
			<Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="********"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-normal text-neutral-400"
                  >
                    <Link href="/reset-password">
                      Forgot password?
                    </Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
		</CardWrapper>
	)
}

export default LoginForm;