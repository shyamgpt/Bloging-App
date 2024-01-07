// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKw1SVsrNDA4oSIqhQUWjgGmBErwj-v9I",
  authDomain: "blogging-app-773ee.firebaseapp.com",
  projectId: "blogging-app-773ee",
  storageBucket: "blogging-app-773ee.appspot.com",
  messagingSenderId: "208267328304",
  appId: "1:208267328304:web:69cd38511581e7ace6e6f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);