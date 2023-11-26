import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";



const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-authentication-f2f1a.firebaseapp.com",
  projectId: "react-authentication-f2f1a",
  storageBucket: "react-authentication-f2f1a.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:149109652703:web:ba4196eed1edcb1070bd6a",
  measurementId: "G-L13WFH39S6"
});


  // const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export default app