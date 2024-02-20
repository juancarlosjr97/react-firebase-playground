import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

/**
 * This configuration is based on this particular Firebase project.
 * When forking the project, this configuration will need to be updated to match the configuration.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDx4_XJg7dqlafqNExiM35jXMPaP_j1IL0",
  authDomain: "react-firebase-playground-gh.firebaseapp.com",
  projectId: "react-firebase-playground-gh",
  storageBucket: "react-firebase-playground-gh.appspot.com",
  messagingSenderId: "96310076294",
  appId: "1:96310076294:web:f2086ed6fce04ccab88207",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDatabase = getFirestore(firebaseApp);

export { firebaseApp, firebaseDatabase };
