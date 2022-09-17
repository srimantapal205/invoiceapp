// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwnNcOSuJ2Ttesry7sMzvPFKh7yIIDEKk",
  authDomain: "invoiceapp-ea531.firebaseapp.com",
  projectId: "invoiceapp-ea531",
  storageBucket: "invoiceapp-ea531.appspot.com",
  messagingSenderId: "1004517847577",
  appId: "1:1004517847577:web:e0849c45a151f4b5263088"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;