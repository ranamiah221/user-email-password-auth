// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUPZaBCrBK2R-ksCiDM17IrO9H4oIHGKo",
  authDomain: "user-email-password-auth-c482f.firebaseapp.com",
  projectId: "user-email-password-auth-c482f",
  storageBucket: "user-email-password-auth-c482f.appspot.com",
  messagingSenderId: "664027110563",
  appId: "1:664027110563:web:6d34d04c8cacf538193316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 export default auth;