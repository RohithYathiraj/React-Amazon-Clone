 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAkdQzz3-GqWKqI5OSSdB659kDaLGr0cgI",
  authDomain: "clone-49da6.firebaseapp.com",
  projectId: "clone-49da6",
  storageBucket: "clone-49da6.appspot.com",
  messagingSenderId: "2384948319",
  appId: "1:2384948319:web:0e9b5f8bfeacb865a1bfea",
  measurementId: "G-EBHRGBEBT7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
