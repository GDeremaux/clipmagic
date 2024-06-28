"use server";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where:  {
        email
      }
    })

    return user;
  } catch {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where:  {
        id
      }
    })

    return user;
  } catch {
    return null;
  }
}

export const getUserCreditsById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where:  {
        id
      },
      select: {
        credits: true
      }
    })

    return user;
  } catch {
    return null;
  }
}

export const removeCreditsFromUser = async (id: string, credits: number) => {
  console.log(id, credits);
  try {
    await db.user.update({
      where: {
        id
      },
      data: {
        credits: {
          decrement: credits
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}