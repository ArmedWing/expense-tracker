// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB41pYnZLVZYySUxRLV0_fiKpiuNq2JJus",
    authDomain: "expense-tracker-ff453.firebaseapp.com",
    projectId: "expense-tracker-ff453",
    storageBucket: "expense-tracker-ff453.appspot.com",
    messagingSenderId: "255913784370",
    appId: "1:255913784370:web:658830510ac8f9bc76382b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)