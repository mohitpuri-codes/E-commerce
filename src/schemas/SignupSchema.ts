import z from "zod";
import { RuleMessages } from "../constants/RuleMessage.constants";

export const signupSchema = z.object({
  email: z.string().email(RuleMessages.EmailRequired),
  password: z.string().min(6, RuleMessages.PasswordRequired),
  displayName: z.string().min(5, RuleMessages.DisplayNameRequired),
  mobileNumber: z.string().min(7, RuleMessages.MobileNumberRequired),
  username: z.string().min(3, RuleMessages.UsernameRequired),
});
