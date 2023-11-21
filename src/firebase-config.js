import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth"
import { get } from "react-hook-form";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "react-authentication-f2f1a.firebaseapp.com",
    projectId: "react-authentication-f2f1a",
    storageBucket: "react-authentication-f2f1a.appspot.com",
    messagingSenderId: "149109652703",
    appId: "1:149109652703:web:ba4196eed1edcb1070bd6a",
    measurementId: "G-L13WFH39S6"
  };


  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  export const auth = getAuth(app)