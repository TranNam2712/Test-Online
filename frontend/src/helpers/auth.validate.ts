import z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email không được để trống")
    .email("Email không hợp lệ")
    .trim(),
  password: z
    .string()
    .nonempty("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải từ 6 ký tự"),
  remember: z.boolean().optional(),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Tên không được để trống")
      .min(3, "Tên phải từ 3 ký tự"),
    phone: z.string().regex(/^0\d{9,10}$/, {
      message: "Số điện thoại không hợp lệ",
    }),
    email: z
      .string()
      .nonempty("Email không được để trống")
      .email("Email không hợp lệ"),
    password: z
      .string()
      .nonempty("Mật khẩu không được để trống")
      .min(6, "Mật khẩu phải từ 6 ký tự"),
    confirmPassword: z
      .string()
      .nonempty("Xác nhận mật khẩu không được để trống")
      .min(6, "Vui lòng xác nhận mật khẩu"),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "Bạn phải đồng ý với điều khoản" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
