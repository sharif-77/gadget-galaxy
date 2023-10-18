import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAENTrwvqsc4eatUtOtMMmaP94BNSX21zI",
  authDomain: "gadget-galaxy-7db0b.firebaseapp.com",
  projectId: "gadget-galaxy-7db0b",
  storageBucket: "gadget-galaxy-7db0b.appspot.com",
  messagingSenderId: "154414229763",
  appId: "1:154414229763:web:4b4b33fde4c6cee4b6a136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
