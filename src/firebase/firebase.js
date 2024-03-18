// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJmVDiu-zLqQmxGi6JbUjk6_SYsV1GpY4",
  authDomain: "fir-blog-e286c.firebaseapp.com",
  projectId: "fir-blog-e286c",
  storageBucket: "fir-blog-e286c.appspot.com",
  messagingSenderId: "578769516466",
  appId: "1:578769516466:web:6e5f90b76b57476aad96ab",
  measurementId: "G-M54YM474J2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
