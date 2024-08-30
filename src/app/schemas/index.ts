import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(6).max(50).email(),
  password: z.string().min(6).max(50),
});
