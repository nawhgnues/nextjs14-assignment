"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, REQUIRED_ERROR, USERNAME_MIN_LENGTH } from "@/lib/constants";
import { error } from "console";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({
      required_error: REQUIRED_ERROR,
    })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX),
  username: z
    .string({
      required_error: REQUIRED_ERROR,
    })
    .min(USERNAME_MIN_LENGTH),
});

interface loginActionState {
  loginSuccess: boolean;
}

export const login = async (previousState: loginActionState, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return {
      loginSuccess: false,
      error: result.error.flatten(),
    };
  } else {
    return {
      loginSuccess: true,
    };
  }
};
