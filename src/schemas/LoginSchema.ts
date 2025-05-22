import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Username should contain at least 3 Characters"),
  password: z
    .string()
    .min(6, "Password length should be at least 6 Characters"),
});
