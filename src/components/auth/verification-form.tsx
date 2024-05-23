"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { emailVerification } from "@/actions/email-verification";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

const EmailVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!")
      return;
    }

    emailVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Oops! Something went wrong!")
      })
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <CardWrapper
      cardTitle="Email verification"
      cardDescription="We are confirming your email."
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex gap-y-4 flex-col items-center w-full justify-center">
        {!success && !error && (
          <>
            <div className="dark:hidden">
              <BeatLoader />
            </div>
            <div className="hidden dark:block">
              <BeatLoader color="white" />
            </div>
          </>
        )}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default EmailVerificationForm;