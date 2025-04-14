'use client';

import Layout from '@/components/layout';
import { useActivate } from '@/queries/auth/queries';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Active() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { data, isLoading, isError } = useActivate(token);
  console.log(data);

  return (
    <Layout.Content>
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-6">
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="p-6">
            <div className="mb-6 flex justify-center">
              {!isError ? (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600 dark:text-red-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">계정 활성화</h2>
            <div className="space-y-4">
              <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-700">
                {isLoading && (
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    {token ? '계정 활성화 중입니다...' : '활성화 토큰이 필요합니다'}
                  </p>
                )}

                {isError && (
                  <p className="text-center text-red-600 dark:text-red-300">
                    {'계정 활성화에 실패했습니다. 유효하지 않은 토큰이거나 만료되었습니다.'}
                  </p>
                )}

                {!isLoading && !isError && (
                  <p className="text-center text-green-600 dark:text-green-300">계정이 성공적으로 활성화되었습니다!</p>
                )}
              </div>

              {isLoading && (
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                      <div className="h-full animate-pulse rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              )}

              {isError && (
                <div className="flex justify-center">
                  <a
                    href="/auth"
                    className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
                  >
                    로그인 페이지로 이동
                  </a>
                </div>
              )}

              {!isLoading && !isError && (
                <div className="flex justify-center">
                  <a
                    href="/auth"
                    className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  >
                    로그인 페이지로 이동
                  </a>
                </div>
              )}

              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                {!isError
                  ? '계정이 성공적으로 활성화되면 자동으로 로그인 페이지로 이동합니다.'
                  : '계정 활성화에 문제가 있으면 고객 지원에 문의하세요.'}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-600 dark:bg-gray-700">
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              문제가 발생하셨나요?{' '}
              <a href="/contact" className="text-green-600 hover:underline dark:text-green-400">
                고객 지원에 문의하세요
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout.Content>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Active />
    </Suspense>
  );
}
