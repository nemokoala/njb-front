'use client';

import { useEffect, useState, useRef } from 'react';
import { getMessaging, getToken, isSupported, onMessage } from 'firebase/messaging';
import { firebaseApp } from '@/firebase';
import { usePathname } from 'next/navigation';
import { useFCMTokenMutation } from '@/queries/auth/mutation';
import { useUserStore } from '@/store/auth';

const messaging = async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function useNotification() {
  const user = useUserStore();

  const { mutate: fcmTokenMutation } = useFCMTokenMutation(
    () => {},
    () => {},
  );

  const pathname = usePathname();
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker 등록 성공:', registration);
        })
        .catch((error) => {
          console.error('Service Worker 등록 실패:', error);
        });
    }

    if (localStorage.getItem('notification') === 'true') {
      setWebNotification();
    }
  }, []);

  const setWebNotification = async () => {
    console.log('setWebNotification');
    const messagingResolve = await messaging();
    if (!messagingResolve) return;

    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        localStorage.setItem('notification', 'true');
        const registration = await navigator.serviceWorker.ready;
        const token = await getToken(messagingResolve, {
          vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
          serviceWorkerRegistration: registration,
        });
        console.log('FCM Token:', token);

        //서버에 토큰 전송
        if (user.accessToken) {
          fcmTokenMutation({ fcmToken: token });
        }
      }
    };

    requestPermission();

    onMessage(messagingResolve, (payload) => {
      console.log('Foreground 메시지:', payload);
      const { notification } = payload;
      const { title, body } = notification || {};
      const notificationInstance = new Notification(title || '알림!', { body });
      notificationInstance.onclick = () => {
        window.open(pathname, '_blank')?.focus();
      };
    });
  };

  return {
    setWebNotification,
  };
}
