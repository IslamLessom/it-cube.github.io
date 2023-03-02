import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuB9u19-R04o9uTGVXgUllk5QA7dFx59I",
  authDomain: "it-cube-4c8c0.firebaseapp.com",
  projectId: "it-cube-4c8c0",
  storageBucket: "it-cube-4c8c0.appspot.com",
  messagingSenderId: "593877077574",
  appId: "1:593877077574:web:c54c8b1c63a5ec99138447"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app) 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

