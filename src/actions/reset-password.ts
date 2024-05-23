"use server";

import * as z from "zod";

import { LastVerificationTokenTooRecentError } from "@/lib/tokens";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/email";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return {error : "Invalid email!"}
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {error: "Email not found!"}
  }

  try {
    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );
  } catch (LastVerificationTokenTooRecentError) {
    return { error: "A reset email has already been sent! Try again in 1 minute to send another reset link!" }
  }


  return {
    success: "Reset email sent!"
  }
}