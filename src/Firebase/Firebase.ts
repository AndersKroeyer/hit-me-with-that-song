import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQQD7uieJN4lfWi0AP271B0nT9G46Qmh8",
  authDomain: "hit-me-with-that-song.firebaseapp.com",
  projectId: "hit-me-with-that-song",
  storageBucket: "hit-me-with-that-song.appspot.com",
  messagingSenderId: "257443382902",
  appId: "1:257443382902:web:ae6bbee7960f728dafc157"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();