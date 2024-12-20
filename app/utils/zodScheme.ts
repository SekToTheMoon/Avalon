import { Schema, z, ZodSchema } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, { message: "ชื่อ ต้องมากกว่า 2 อักขระ" }),
});

export const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 1MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
