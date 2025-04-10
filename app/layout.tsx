import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Layout from '@/components/layout';
import Providers from '@/providers/query-provider';
import { BottomModalProvider } from '@/providers/bottom-modal-provider';
import AuthProvider from '@/providers/auth-provider';
import { Toaster } from 'sonner';
import { ModalProvider } from '@/providers/modal-provider';
import NotificationProvider from '@/providers/notification-provider';
import BottomNav from '@/components/bottom-nav';
const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '레시픽',
  description: '재료 관리하는 서비스 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} w-full bg-white antialiased`}>
        <Providers>
          <AuthProvider>
            <BottomModalProvider>
              <ModalProvider>
                <NotificationProvider>
                  <Layout>
                    {children}
                    <BottomNav />
                  </Layout>
                  <Toaster richColors position="top-center" />
                </NotificationProvider>
              </ModalProvider>
            </BottomModalProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
