
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-nUtOTHaEf4jJOJhYuTwe0-A_yOkgdE",
  authDomain: "ecommerce-1b398.firebaseapp.com",
  projectId: "ecommerce-1b398",
  storageBucket: "ecommerce-1b398.appspot.com",
  messagingSenderId: "925865491221",
  appId: "1:925865491221:web:8b478779b20e864a16471c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
