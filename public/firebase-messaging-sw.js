importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAK4IIDxxQCkI7WFdb7_-nk22qoYNNgVhY',
  authDomain: 'njbproject-39407.firebaseapp.com',
  projectId: 'njbproject-39407',
  storageBucket: 'njbproject-39407.firebasestorage.app',
  messagingSenderId: '85978485474',
  appId: '1:85978485474:web:1f347a10c2fd35478944bb',
  measurementId: 'G-F3JGWH95PY',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // console.log('[firebase-messaging-sw.js] Received background message ', payload);
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
  // console.log('Notification clicked:', event.notification);
  event.notification.close();

  let redirectUrl = event.notification.data?.redirectUrl || '/';
  const baseUrl = self.location.origin;

  // redirectUrl이 있는 경우 baseUrl에 추가
  if (redirectUrl && !redirectUrl.startsWith('http')) {
    redirectUrl = `${baseUrl}/${redirectUrl}`;
  }
  // console.log('Redirect URL:', redirectUrl);

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
