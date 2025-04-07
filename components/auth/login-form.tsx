'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLoginMutation } from '@/queries/auth/mutation';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useUserStore } from '@/store/auth';
interface LoginFormProps {
  defaultEmail: string;
  defaultPassword: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
}

export function LoginForm({ defaultEmail, defaultPassword, onEmailChange, onPasswordChange }: LoginFormProps) {
  const router = useRouter();
  const setUserState = useUserStore((state) => state.setAccessToken);
  const { mutate: loginMutate, isPending } = useLoginMutation(
    (userData) => {
      // 로그인 성공 시 유저 정보 저장
      setUserState(userData.accessToken);

      toast.success('로그인 성공', {
        description: '환영합니다!',
      });
      router.push('/refrigerator');
    },
    () => {
      toast.error('로그인 실패', {
        description: '이메일과 비밀번호를 확인해주세요.',
      });
    },
  );

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: defaultEmail,
      password: defaultPassword,
    },
  });

  // 입력값이 변경될 때마다 부모 컴포넌트에 알림
  const handleEmailChange = (value: string) => {
    onEmailChange(value);
  };

  const handlePasswordChange = (value: string) => {
    onPasswordChange(value);
  };

  async function onSubmit(data: LoginFormData) {
    loginMutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit" disabled={isPending}>
          {isPending ? '로그인 중...' : '로그인'}
        </Button>
      </form>
    </Form>
  );
}
