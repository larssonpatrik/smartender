import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import firebaseConfig from "./firebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyA23h9kgQFxFR1aBJe30o_Unye_deQ9JPM",
  authDomain: "smartender-a52c9.firebaseapp.com",
  projectId: "smartender-a52c9",
  storageBucket: "smartender-a52c9.appspot.com",
  messagingSenderId: "424256854993",
  appId: "1:424256854993:web:4b27eab269bde611fadef0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
