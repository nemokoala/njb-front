import { SignUpForm } from '@/components/auth/signup-form';
import { LoginForm } from '@/components/auth/login-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout';
export default function AuthPage() {
  return (
    <Layout.Content className="container mx-auto p-5">
      <p className="text-2xl font-bold">NJB</p>
      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">회원가입</TabsTrigger>
          <TabsTrigger value="login">로그인</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUpForm />
        </TabsContent>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </Layout.Content>
  );
}
