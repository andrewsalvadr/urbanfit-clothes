import  { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhbMGu5H0dcJBb-4y-AW9ZnMRJGonM6wo",
  authDomain: "urbanfit-app.firebaseapp.com",
  projectId: "urbanfit-app",
  storageBucket: "urbanfit-app.appspot.com",
  messagingSenderId: "910572351673",
  appId: "1:910572351673:web:f969e8ef1b2d8844e0eb68"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getDatabase()
export const db = getFirestore()