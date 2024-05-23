import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
 
export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({async authorize(credentials) {
    const validatedFields = LoginSchema.safeParse(credentials);

    if (validatedFields.success) {
      const { email, password } = validatedFields.data;

      const user = await getUserByEmail(email);

      if (!user || !user.password) return undefined;

      const passwordsMatch = await bcrypt.compare(
        password,
        user.password
      )

      if (passwordsMatch) return user as any;
      
      return undefined;
    }
  }})],
  pages: {
    signIn: "/login",
    error: "/login"
  },
  events: {
    async linkAccount({user}) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow sign-in if oauth
      if (account?.provider !== "credentials") return true;

      const existingUser = user.id ? await getUserById(user.id) : undefined;
      
      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      // Todo : add 2fa check

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      return token;
    }
  }
} satisfies NextAuthConfig;

// NextAuthJS Config without edge runtime non-supported features (PrismaAdapter)
// to use in the middleware to initiate another auth() from this config instead of importing the one from @/auth.ts, which uses PrismaAdapter