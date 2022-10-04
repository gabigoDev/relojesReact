// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "collection-relojesreact.firebaseapp.com",
    projectId: "collection-relojesreact",
    storageBucket: "collection-relojesreact.appspot.com",
    messagingSenderId: "724462001791",
    appId: "1:724462001791:web:12fcb3fc51538fe187a94a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
