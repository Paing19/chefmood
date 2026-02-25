// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8rJrxDARPd0bD3MetZVaUCEo-IrBi4KY",
  authDomain: "chefmood-3dd5c.firebaseapp.com",
  projectId: "chefmood-3dd5c",
  storageBucket: "chefmood-3dd5c.firebasestorage.app",
  messagingSenderId: "25838558478",
  appId: "1:25838558478:web:9e3d661c7dba0a87458b5f",
  measurementId: "G-ST62FGR4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
