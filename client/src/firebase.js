// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "albanihomes.firebaseapp.com",
  projectId: "albanihomes",
  storageBucket: "albanihomes.appspot.com",
  messagingSenderId: "1024601777622",
  appId: "1:1024601777622:web:9bf2feee6eee53f2a6b077"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);