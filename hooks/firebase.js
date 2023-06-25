// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM_QhOYsr-tR36EGnsc7e3uwOdl-kByhs",
    authDomain: "gamemate-app-9b800.firebaseapp.com",
    projectId: "gamemate-app-9b800",
    storageBucket: "gamemate-app-9b800.appspot.com",
    messagingSenderId: "858333712885",
    appId: "1:858333712885:web:e5b560b8459fa5b92710bc",
    measurementId: "G-2RYHQ4G9GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
