"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => {
  return !username.includes("potato");
};

const checkConfirmPassword = ({ password, confirm_password }: { password: string; confirm_password: string }) => {
  return password === confirm_password;
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Type error",
        required_error: "Please insert your username",
      })
      .min(PASSWORD_MIN_LENGTH, "Too Short!")
      .max(PASSWORD_MIN_LENGTH, "Too Looooong!")
      .refine(checkUsername, "I dont like potatoes"),
    email: z.string().email(),
    password: z.string().min(10).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(10).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
  })
  .refine(checkConfirmPassword, {
    message: "Password Inconsistence",
    path: ["confirm_password"],
  });

export default async function createAccount(prevState: any, formData: FormData) {
  console.log(prevState);
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  //  formSchema.parse -> throw error
  //   try {
  //     formSchema.parse(data);
  //   } catch (e) {
  //     console.log(e);
  //   }

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
