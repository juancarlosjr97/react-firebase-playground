import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

/**
 * This configuration is based on this particular Firebase project.
 * When forking the project, this configuration will need to be updated to match the configuration.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBUlylPIH4eeV_yk7YBdEioA8UTK6Qw7S4",
  authDomain: "react-firebase-playground-neo.firebaseapp.com",
  projectId: "react-firebase-playground-neo",
  storageBucket: "react-firebase-playground-neo.appspot.com",
  messagingSenderId: "917055939120",
  appId: "1:917055939120:web:d8b3d584fc77fa391d43f5",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDatabase = getFirestore(firebaseApp);

export { firebaseApp, firebaseDatabase };
