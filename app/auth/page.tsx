'use client';

import { SignUpForm } from '@/components/auth/signup-form';
import { LoginForm } from '@/components/auth/login-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (value: string) => {
    router.push(`/auth?tab=${value}`);
  };

  return (
    <Layout.Content className="container mx-auto p-5">
      <p className="text-2xl font-bold">NJB</p>
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
    </Layout.Content>
  );
}
