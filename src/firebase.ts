// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktoSwiz_WdfeYSjz4DXjVMSzX7raZsKQ",
  authDomain: "azhizen-academy.firebaseapp.com",
  projectId: "azhizen-academy",
  storageBucket: "azhizen-academy.firebasestorage.app",
  messagingSenderId: "236882070342",
  appId: "1:236882070342:web:f0ffcbff62236b20fbb347",
  measurementId: "G-7408VNEPHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);