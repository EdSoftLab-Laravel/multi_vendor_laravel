importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAmw4SR4kJcW8moJLQDGKc1oHjkEiiCOLM",
    authDomain: "nandarani-kitchen.firebaseapp.com",
    projectId: "nandarani-kitchen",
    storageBucket: "nandarani-kitchen.firebasestorage.app",
    messagingSenderId: "891841211572",
    appId: "1:891841211572:android:0124d44b7da79b76f5bbe1",
    measurementId: "G-SMS1740F46"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
