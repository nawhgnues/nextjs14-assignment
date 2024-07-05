"use server";

export const handleForm = async (previousState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (formData.get("password") === "12345") {
    return true;
  }

  return false;
};
