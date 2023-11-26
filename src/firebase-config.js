import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: " AIzaSyByFiQMQBQ0imh-qjuKyTDbsjaIE11ChUM ",
  authDomain: "react-authentication-f2f1a.firebaseapp.com",
  projectId: "react-authentication-f2f1a",
  storageBucket: "react-authentication-f2f1a.appspot.com",
  messagingSenderId: "149109652703",
  appId: "1:149109652703:web:ba4196eed1edcb1070bd6a",
  measurementId: "G-L13WFH39S6"
};


  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)