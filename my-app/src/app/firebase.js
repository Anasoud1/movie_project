// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iZlx6Kh_mGR7sSBTRZtt5ytczX9sZXI",
  authDomain: "my-app-6f58c.firebaseapp.com",
  projectId: "my-app-6f58c",
  storageBucket: "my-app-6f58c.appspot.com",
  messagingSenderId: "632576460346",
  appId: "1:632576460346:web:e20d761ab9f05e212a1703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, auth, db};