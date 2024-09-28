// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "albaniahomes-b2f3d.firebaseapp.com",
  projectId: "albaniahomes-b2f3d",
  storageBucket: "albaniahomes-b2f3d.appspot.com",
  messagingSenderId: "990225025555",
  appId: "1:990225025555:web:8213934b167daf8b950de6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);