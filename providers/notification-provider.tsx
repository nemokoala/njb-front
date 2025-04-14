'use client';

import { ReactNode, useState, useEffect } from 'react';
import useNotification from '@/hooks/use-notification';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function NotificationProvider({ children }: { children: ReactNode }) {
  const { setWebNotification } = useNotification();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const notification = localStorage.getItem('notification');
    setOpen(!notification);
  }, []);

  return (
    <>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>알림 설정</DialogTitle>
            <DialogDescription>웹 푸시 알림을 받으시려면 알림 권한을 허용해주세요.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Button
              onClick={() => {
                setWebNotification();
                setOpen(false);
              }}
              className="w-full"
            >
              알림 권한 허용하기
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem('notification', 'false');
                setOpen(false);
              }}
              className="w-full"
              variant="outline"
            >
              다시 보지 않기
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
