import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Layout from '@/components/layout';
import Providers from '@/providers/query-provider';
import { BottomModalProvider } from '@/providers/bottom-modal-provider';
import AuthProvider from '@/providers/auth-provider';
import { Toaster } from 'sonner';
import { ModalProvider } from '@/providers/modal-provider';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '냉장고를 잘 부탁해',
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
                <Layout>{children}</Layout>
                <Toaster richColors position="top-center" />
              </ModalProvider>
            </BottomModalProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
