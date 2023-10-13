// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfo_YGLQRmrMc4g2gVX0f_MpJfdCiqdY",
  authDomain: "wishaquehaider.firebaseapp.com",
  projectId: "wishaquehaider",
  storageBucket: "wishaquehaider.appspot.com",
  messagingSenderId: "604529374659",
  appId: "1:604529374659:web:3bbad86aa0ad65fbc53976",
  measurementId: "G-3WQFM45FZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);