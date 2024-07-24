import { z } from "zod";

const usernameValidator = z
  .string()
  .min(3, "Username must be at least 3 characters ")
  .max(20, "Username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");

export const signupSchema = z.object({
  username: usernameValidator,
  email: z.string().email({ message: "Please fill a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
    }),
});
