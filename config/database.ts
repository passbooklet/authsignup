import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC_37WI9m7ZEe8XxAWDOPXseynD2jqosyk",
  authDomain: "logintodo-dcc30.firebaseapp.com",
  projectId: "logintodo-dcc30",
  storageBucket: "logintodo-dcc30.appspot.com",
  messagingSenderId: "224233971297",
  appId: "1:224233971297:web:0acd02971b88eb45fe1420",
  measurementId: "G-7JEVX6RKR0"
};
// logintodo

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage= getStorage(app);


// Initialize Cloud Firestore and get a reference to the service

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,db,storage}