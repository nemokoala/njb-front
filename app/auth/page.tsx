'use client';

import { SignUpForm } from '@/components/auth/signup-form';
import { LoginForm } from '@/components/auth/login-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { useUrlQuery } from '@/hooks/use-url-query';

function AuthPage() {
  const { getParam } = useUrlQuery();
  const router = useRouter();
  const tab = getParam('tab') || 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (value: string) => {
    router.push(`/auth?tab=${value}`);
  };

  return (
    <Layout.Content className="flex flex-col p-5">
      <article className="mt-16 w-full">
        <p className="mb-3 w-full text-center text-3xl font-bold">레시픽</p>
        <p className="mb-10 w-full text-center text-sm text-gray-500">냉장고 재료를 관리해보세요!</p>
        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">로그인</TabsTrigger>
            <TabsTrigger value="signup">회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm
              defaultEmail={email}
              defaultPassword={password}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
            />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm
              defaultEmail={email}
              defaultPassword={password}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
            />
          </TabsContent>
        </Tabs>
      </article>
    </Layout.Content>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage />
    </Suspense>
  );
}
