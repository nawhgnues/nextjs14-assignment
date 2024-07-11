"use server";
import bcrypt from "bcrypt";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, REQUIRED_ERROR, USERNAME_MIN_LENGTH } from "@/lib/constants";
import db from "@/lib/db";
import { error } from "console";
import { z } from "zod";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z.string().email().toLowerCase().refine(checkEmailExists, "이메일을 확인해주세요."),
  password: z
    .string({
      required_error: REQUIRED_ERROR,
    })
    .min(PASSWORD_MIN_LENGTH),
  // .regex(PASSWORD_REGEX),
  username: z
    .string({
      required_error: REQUIRED_ERROR,
    })
    .min(USERNAME_MIN_LENGTH),
});

export const login = async (previousState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    return {
      error: result.error.flatten(),
    };
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("profile");
    } else {
      return {
        error: {
          fieldErrors: {
            password: ["비밀번호를 확인해주세요."],
          },
        },
      };
    }
  }
};
