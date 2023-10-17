// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-36776.firebaseapp.com",
  projectId: "estate-36776",
  storageBucket: "estate-36776.appspot.com",
  messagingSenderId: "317252900048",
  appId: "1:317252900048:web:52e0997550e7c9439e3ad5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);