import { cn } from '@/lib/utils';

export default function Header({ className }: { className?: string }) {
  return <header className={cn('h-[50px] w-full rounded-none bg-primary', className)}></header>;
}
