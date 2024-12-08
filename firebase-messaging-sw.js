importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js"
);

// Firebase Configuration
firebase.initializeApp({
  apiKey: "AIzaSyD4mDJE1_ugDxibuUUMV4UbTOX0pR7Twoo",
  authDomain: "masseges-5892f.firebaseapp.com",
  projectId: "masseges-5892f",
  storageBucket: "masseges-5892f.appspot.com",
  messagingSenderId: "1009540401808",
  appId: "1:1009540401808:web:0e1d394ff0efd0534c6615",
});

// إعداد Firebase Messaging
const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log("رسالة جديدة في الخلفية:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
