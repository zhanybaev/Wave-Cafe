import firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLq8qZpEXV8oSlo4p2SLUqMSbksAwmmmU",
  authDomain: "wavecafelogin.firebaseapp.com",
  projectId: "wavecafelogin",
  storageBucket: "wavecafelogin.appspot.com",
  messagingSenderId: "1012011993117",
  appId: "1:1012011993117:web:d2f98de2528db039f79ef4"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire;