import { cn } from '@/lib/utils';
import { BottomNav } from './bottom-nav';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="m-0 flex h-[100dvh] w-full flex-col items-center overflow-hidden">{children}</div>
    </>
  );
}

function Header({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('h-[50px] w-full max-w-screen-md rounded-none bg-primary text-white', className)}>
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}

function Content({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('w-full max-w-screen-md flex-1 overflow-y-auto bg-background p-4 scrollbar-hide', className)}>
      {children}
    </div>
  );
}

function Bottom({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('h-[70px] w-full rounded-none bg-white', className)}>{children ? children : <BottomNav />}</div>
  );
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Bottom = Bottom;

export default Layout;
