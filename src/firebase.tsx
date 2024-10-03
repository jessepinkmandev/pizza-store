// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3TR3v9x7CDE2v00cQbY_D-VmbfXgg5v4",
  authDomain: "pizza-store-4ab1d.firebaseapp.com",
  projectId: "pizza-store-4ab1d",
  storageBucket: "pizza-store-4ab1d.appspot.com",
  messagingSenderId: "177844222171",
  appId: "1:177844222171:web:6b77bd3016269a4d67f4fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
