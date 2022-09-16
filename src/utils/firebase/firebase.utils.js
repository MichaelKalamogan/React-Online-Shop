// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaB3GfuXMgZBf96CGGMq1AmVOa8_bx-8U",
  authDomain: "online-shop-90138.firebaseapp.com",
  projectId: "online-shop-90138",
  storageBucket: "online-shop-90138.appspot.com",
  messagingSenderId: "515546826651",
  appId: "1:515546826651:web:abd70d529de59e9829033e",
  measurementId: "G-S45CJLMLP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
