'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpFormData } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useSignUpMutation } from '@/queries/auth/mutation';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface SignUpFormProps {
  defaultEmail: string;
  defaultPassword: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
}

export function SignUpForm({ defaultEmail, defaultPassword, onEmailChange, onPasswordChange }: SignUpFormProps) {
  const router = useRouter();
  const { mutate: signUpMutate, isPending } = useSignUpMutation(
    () => {
      toast.success('회원가입 성공', {
        description: '이메일에서 인증 메일을 확인해주세요.',
      });
      router.push('/auth?tab=login');
    },
    () => {
      toast.error('회원가입 실패', {
        description: '입력하신 정보를 다시 확인해주세요.',
      });
    },
  );
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      nickname: '',
      email: defaultEmail,
      password: defaultPassword,
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  // 입력값이 변경될 때마다 부모 컴포넌트에 알림
  const handleEmailChange = (value: string) => {
    onEmailChange(value);
  };

  const handlePasswordChange = (value: string) => {
    onPasswordChange(value);
  };

  async function onSubmit(data: SignUpFormData) {
    signUpMutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>닉네임</FormLabel>
              <FormControl>
                <Input placeholder="닉네임을 입력하세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleEmailChange(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handlePasswordChange(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호를 다시 입력하세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? '처리 중...' : '회원가입'}
        </Button>
      </form>
    </Form>
  );
}
