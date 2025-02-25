// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl7crEDYJPgcMifFYbw8rDqOuaqxU3Dls",
    authDomain: "login-auth-28bc8.firebaseapp.com",
    projectId: "login-auth-28bc8",
    storageBucket: "login-auth-28bc8.appspot.com",
    messagingSenderId: "107052070804",
    appId: "1:107052070804:web:fcc8ac40aecb8619730181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }