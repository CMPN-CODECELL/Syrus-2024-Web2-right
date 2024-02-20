import * as z from "zod";

export const formSchema = z.object({
  bodyWeight: z.string().min(1, {
    message: "Body Weight is required",
  }),
  height: z.string().min(1, {
    message: "Height is required",
  }),
  sex: z.string().min(1, {
    message: "Sex is required",
  }),
  age: z.string().min(1, {
    message: "Age is required",
  }),
  bodyFat: z.string().min(1, {
    message: "Body Fat is required",
  }),
});
