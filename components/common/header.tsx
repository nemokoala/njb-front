'use client';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function Header({
  className,
  title,
  backButton,
}: {
  className?: string;
  title: string;
  backButton?: boolean;
}) {
  const router = useRouter();
  return (
    <header
      className={cn(
        'flex h-[50px] w-full items-center justify-center rounded-none bg-primary text-xl font-bold',
        className,
      )}
    >
      {backButton && (
        <Button variant="ghost" size="icon" className="absolute left-0 h-10 w-10" onClick={() => router.back()}>
          <ChevronLeft size={30} />
        </Button>
      )}
      {title}
    </header>
  );
}
