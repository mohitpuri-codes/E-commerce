import z from "zod";
import { RuleMessages } from "../constants/RuleMessage.constants";

export const loginSchema = z.object({
  username: z.string().min(3, RuleMessages.UsernameRequired),
  password: z.string().min(6, RuleMessages.PasswordRequired),
});
