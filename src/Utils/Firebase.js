// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrO2ppVZwDWJb2zStL5F8TcP8v_kUJ4V8",
  authDomain: "netflx-gpt.firebaseapp.com",
  projectId: "netflx-gpt",
  storageBucket: "netflx-gpt.appspot.com",
  messagingSenderId: "929906302787",
  appId: "1:929906302787:web:70e14dd1b2830ec57359f6",
  measurementId: "G-XP18EYGRF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();