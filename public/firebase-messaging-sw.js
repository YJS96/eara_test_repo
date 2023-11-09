//프로젝트 버전 확인
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js");

const config = {
  apiKey: "AIzaSyC1jJvue_jUm6uhqnHVcvAPzBTgSGmisKI",
  authDomain: "eara-cf80c.firebaseapp.com",
  projectId: "eara-cf80c",
  storageBucket: "eara-cf80c.appspot.com",
  messagingSenderId: "747956469880",
  appId: "1:747956469880:web:0bab6e05af0528efebad8d",
  measurementId: "G-NBKYLTZB14",
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();

//백그라운드 서비스워커 설정
messaging.onBackgroundMessage(messaging, (payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: payload,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
