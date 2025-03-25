'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <Alert variant="destructive" className="mb-8 max-w-md">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>500 - Server Error</AlertTitle>
        <AlertDescription>문제가 발생했습니다. 다시 시도해주세요.</AlertDescription>
      </Alert>
      <Button asChild variant="outline">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          홈으로
        </Link>
      </Button>
    </div>
  );
}
