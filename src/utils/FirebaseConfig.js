// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz8WMhOyJIcmVk-rW3sLVjKUl5ITKrgKk",
  authDomain: "ecommerce-ropa-787fb.firebaseapp.com",
  projectId: "ecommerce-ropa-787fb",
  storageBucket: "ecommerce-ropa-787fb.appspot.com",
  messagingSenderId: "737818773972",
  appId: "1:737818773972:web:9a57692ea0da4f4abcae41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore intialize

const db = getFirestore(app)

export default db 