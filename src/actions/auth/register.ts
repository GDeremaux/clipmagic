"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas/auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/email";

const register = async (values: any) => {
  const validatedFields = RegisterSchema.safeParse(values);
  
  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  // TEMPORARY: Only allow certain emails to register

  const allowedEmails = [
    "helsyliam@gmail.com",
    "tweiko.2006@gmail.com",
    "drysawp@gmail.com",
    "Diallothiernobillo14@gmail.com",
    "maxmut308@gmail.com",
    "wuircij.pro@gmail.com",
    "razot055@gmail.com",
    "ayman78sw@icloud.co",
    "tiktokillian31@gmail.com",
    "xbgames.contact@gmail.com",
    "mathis.sevre@gmail.com",
    "guittardsimon7@gmail.com",
    "gugus.ski.tiktok@gmail.com",
    "tortvid.yt@gmail.com",
    "gustave.deremaux@gmail.com",
    "tortvidwaze.yt@gmail.com"
  ];
  const isUserAllowed = allowedEmails.includes(email);
  if (!isUserAllowed) {
    return { error: "You are not allowed to register!" }
  }

  if (existingUser) {
    return { error: "Email already in use! Please log in!" }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  );

  return { success: "Please click on the verification link sent to your inbox!" }
}

export default register;