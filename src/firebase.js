// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCufmwazYCrfAiwP1rMbtzN_15t9jipdYk",
  authDomain: "fir-auth-8f9a4.firebaseapp.com",
  projectId: "fir-auth-8f9a4",
  storageBucket: "fir-auth-8f9a4.appspot.com",
  messagingSenderId: "209902316133",
  appId: "1:209902316133:web:61c6a7e5579402c6b8b48c",
  measurementId: "G-V2T8KMHS4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};