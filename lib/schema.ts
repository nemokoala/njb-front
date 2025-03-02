import { z } from 'zod';

export const signUpSchema = z
  .object({
    nickname: z.string().min(2, '닉네임은 2글자 이상이어야 합니다.').max(50, '닉네임은 50글자 이하여야 합니다.'),
    email: z.string().email('올바른 이메일 주소를 입력해주세요.'),
    password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   '비밀번호는 대문자, 소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다.',
    // ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 주소를 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

export const refrigeratorSchema = z.object({
  name: z.string().min(1, '냉장고 이름은 필수입니다.'),
  photoUrl: z.string().url({ message: '유효한 URL을 입력해주세요.' }).optional().or(z.literal('')),
  description: z.string().optional(),
});

export const itemSchema = z.object({
  name: z.string().min(1, '재료 이름은 필수입니다.'),
  photoUrl: z
    .union([z.string().url({ message: '유효한 URL을 입력해주세요.' }), z.string().length(0), z.null()])
    .optional(),
  quantity: z.number().int().min(0, '수량은 0 이상이어야 합니다.'),
  category: z.string().min(1, '카테고리는 필수입니다.'),
  expirationDate: z.coerce.date({ invalid_type_error: '유효한 날짜를 입력해주세요.' }),
  refrigeratorId: z.string().min(1, '냉장고 ID는 필수입니다.'),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RefrigeratorFormData = z.infer<typeof refrigeratorSchema>;
export type ItemFormData = z.infer<typeof itemSchema>;
