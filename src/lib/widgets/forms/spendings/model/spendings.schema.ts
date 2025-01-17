import { z } from "zod";

export const spendingsFormSchema = z.object({
  date    : z.coerce.date().optional(),
  name    : z.string(),
  category: z.string(),
  amount  : z.number().or(z.string().transform(Number)).optional(),
  price   : z.number().or(z.string().transform(Number)).optional(),
  total   : z.number().or(z.string().transform(Number)),
  paidWith: z.string(),
});

export type SpendingsFormType = z.infer<typeof spendingsFormSchema>;
