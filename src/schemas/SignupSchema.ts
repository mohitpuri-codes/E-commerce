import z from "zod";

export const signupSchema = z.object({
  email: z.string().email("Enter a valid Email"),
  password: z.string().min(6, "Password should atleast 6 characters long"),
  displayName: z.string().min(5, "Enter name with atleast 5 Characters"),
  mobileNumber: z.string().min(7, "Phone number should be of minimum 7 length"),
  username: z.string().min(3, "Enter username with atleast 3 Characters"),
});
