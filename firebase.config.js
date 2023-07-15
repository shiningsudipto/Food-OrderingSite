// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmxWEZgeTSsKbNEyHTHzXUsygvgJiyUNk",
    authDomain: "foodorder-restaurant.firebaseapp.com",
    projectId: "foodorder-restaurant",
    storageBucket: "foodorder-restaurant.appspot.com",
    messagingSenderId: "175867577179",
    appId: "1:175867577179:web:68aef6b2a9e13413f0d07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;