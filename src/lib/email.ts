import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "Clipmagic <verify@clipmagic.io>",
    to: email,
    subject: "Reset your password",
    html: `<p>To change your password, please click on the link below :<br><a href="${resetLink}">${resetLink}</a></p>`
  });
}

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `${domain}/verify-email?token=${token}`;

  await resend.emails.send({
    from: "Clipmagic <verify@clipmagic.io>",
    to: email,
    subject: "Confirm your email",
    html: `<p>Please verify your email.<br>Click on the link below to confirm your email :<br><a href="${confirmLink}">${confirmLink}</a></p>`
  });
};