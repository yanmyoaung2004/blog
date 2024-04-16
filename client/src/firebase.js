// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-265be.firebaseapp.com",
  projectId: "mern-blog-265be",
  storageBucket: "mern-blog-265be.appspot.com",
  messagingSenderId: "849901146387",
  appId: "1:849901146387:web:1ab4c9bb505a58fddd4ae6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
