import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDx4_XJg7dqlafqNExiM35jXMPaP_j1IL0",
  authDomain: "react-firebase-playground-gh.firebaseapp.com",
  projectId: "react-firebase-playground-gh",
  storageBucket: "react-firebase-playground-gh.appspot.com",
  messagingSenderId: "96310076294",
  appId: "1:96310076294:web:f2086ed6fce04ccab88207",
};

export const firebaseApp = initializeApp(firebaseConfig);
