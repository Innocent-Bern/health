import { initializeApp } from "firebase/app";
import {
    getFirestore
} from "firebase/firestore"
import {
  getAuth
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCs8R1Mw26Ap7v1pQmMBzal0uL8URvF048",
  authDomain: "health-617a8.firebaseapp.com",
  projectId: "health-617a8",
  storageBucket: "health-617a8.appspot.com",
  messagingSenderId: "354618239773",
  appId: "1:354618239773:web:581885321c2df38f140ff4"
};

// Initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize services
const db= getFirestore()
const auth= getAuth()

export {db, auth}
