import { NextResponse } from 'next/server';

export async function GET() {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const swContent = `
    importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

    const firebaseConfig = ${JSON.stringify(firebaseConfig)};

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      const notificationData = payload.data;
      const notificationOptions = {
        body: notificationData.body,
        icon: '/Icon/10km.png',
        data: {
          redirectUrl: notificationData.redirectUrl || '/',
          ...notificationData,
        },
      };

      return self.registration.showNotification(notificationData.title, notificationOptions);
    });

    self.addEventListener('notificationclick', function (event) {
      console.log('Notification clicked:', event.notification);
      event.notification.close();

      let redirectUrl = event.notification.data?.redirectUrl || '/';
      const baseUrl = self.location.origin;

      if (redirectUrl && !redirectUrl.startsWith('http')) {
        redirectUrl = \`\${baseUrl}/\${redirectUrl}\`;
      }
      console.log('Redirect URL:', redirectUrl);

      event.waitUntil(
        clients
          .matchAll({
            type: 'window',
          })
          .then(function (clientList) {
            for (const client of clientList) {
              if (client.url === redirectUrl && 'focus' in client) {
                return client.focus();
              }
            }
            return clients.openWindow(redirectUrl);
          }),
      );
    });
  `;

  return new NextResponse(swContent, {
    headers: {
      'Content-Type': 'application/javascript',
    },
  });
}
