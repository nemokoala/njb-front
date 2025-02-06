import { cn } from '@/lib/utils';

export default function Header({ className }: { className?: string }) {
  return <div className={cn('h-[50px] w-full rounded-none bg-white', className)}></div>;
}
