import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";

export class LastVerificationTokenTooRecentError extends Error {
  constructor(msg: string) {
      super(msg);

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, LastVerificationTokenTooRecentError.prototype);
  }
}

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    if (new Date().getTime() - existingToken.createdAt.getTime() < 60 * 1000) throw LastVerificationTokenTooRecentError;

    await db.passwordResetToken.delete({
      where: { id: existingToken.id }
    });
  };

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // expiration in 1 hour

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    if (new Date().getTime() - existingToken.createdAt.getTime() < 60 * 1000) throw LastVerificationTokenTooRecentError;

    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      }
    });
  };

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return verificationToken;
};

