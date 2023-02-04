// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwX6T4XnbGjR0cWtj1pVOGYCwO0aS_CKs",
  authDomain: "simo-web-apps.firebaseapp.com",
  projectId: "simo-web-apps",
  storageBucket: "simo-web-apps.appspot.com",
  messagingSenderId: "472932207773",
  appId: "1:472932207773:web:039768732412a7bbdb5874",
  measurementId: "G-RMBPRSBDVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);