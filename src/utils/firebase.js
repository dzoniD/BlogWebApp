// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1ea92.firebaseapp.com",
  projectId: "blog-1ea92",
  storageBucket: "blog-1ea92.appspot.com",
  messagingSenderId: "98973893234",
  appId: "1:98973893234:web:bd10b28ef248e809a738eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
