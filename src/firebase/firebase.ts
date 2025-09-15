// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfTZAd2ZfjZkqgsvHlG9AXpRZX5o3E2_o",
  authDomain: "sistemacontabil.firebaseapp.com",
  databaseURL: "https://sistemacontabil-default-rtdb.firebaseio.com",
  projectId: "sistemacontabil",
  storageBucket: "sistemacontabil.firebasestorage.app",
  messagingSenderId: "736680932464",
  appId: "1:736680932464:web:f57746b7f72f8fca3030b5",
  measurementId: "G-BL9ZKRVBRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

