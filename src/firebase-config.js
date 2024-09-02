// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkF0x50p-zv31jT1J7aHmfyj2JEa8Y2c",
  authDomain: "real-time-messaging-f4f79.firebaseapp.com",
  projectId: "real-time-messaging-f4f79",
  storageBucket: "real-time-messaging-f4f79.appspot.com",
  messagingSenderId: "5447621449",
  appId: "1:5447621449:web:86ec06f40595fcb12ad898",
  measurementId: "G-2LQJ47LVBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);