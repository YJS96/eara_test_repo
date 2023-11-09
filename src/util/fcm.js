import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const config = {
  apiKey: "AIzaSyC1jJvue_jUm6uhqnHVcvAPzBTgSGmisKI",
  authDomain: "eara-cf80c.firebaseapp.com",
  projectId: "eara-cf80c",
  storageBucket: "eara-cf80c.appspot.com",
  messagingSenderId: "747956469880",
  appId: "1:747956469880:web:0bab6e05af0528efebad8d",
  measurementId: "G-NBKYLTZB14",
};

const app = initializeApp(config);
const messaging = getMessaging();

getToken(messaging, {
  vapidKey:
    "BMFK58UQCK-qWNw_vmgrWZatmdnKniUUU0Xxwl2z6AY7ODuqCjyWhxTdIk0EvI2VCUspgylZOB1nU19TGqnSZZM",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log("No registration token available. Request permission to generate one.");
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});
