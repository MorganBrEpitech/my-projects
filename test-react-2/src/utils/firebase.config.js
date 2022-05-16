import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-b8102.firebaseapp.com",
  projectId: "react-firebase-redux-b8102",
  storageBucket: "react-firebase-redux-b8102.appspot.com",
  messagingSenderId: "117351211711",
  appId: "1:117351211711:web:0503dff9ba5eeb3e7b5c0a"
});

export const auth = app.auth();
export default app;