// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE_fjclmLDpeIW5IJDqrrrd9OGWCT9ut8",
  authDomain: "ca-teste-c2f38.firebaseapp.com",
  projectId: "ca-teste-c2f38",
  storageBucket: "ca-teste-c2f38.appspot.com",
  messagingSenderId: "10702982373",
  appId: "1:10702982373:web:730c7e182f3ce81ded980c",
  measurementId: "G-CBFSF6Z9KY"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);