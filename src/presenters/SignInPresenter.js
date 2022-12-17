import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "../components/css/Signup.css";
import "../components/css/Button.css";
import SignInView from "../views/SignInView";
import { getFavoriteDrinksFromFirebase } from "../firebaseModel";

const app = initializeApp(firebaseConfig);

export default function SignInPresenter(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function signInUserInFirebaseACB(event) {
    const auth = getAuth();
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <div>
      <SignInView
        inputEmail={onInputEmailChangeACB}
        inputPassword={onInputPasswordChange}
        newUser={signInUserInFirebaseACB}
        userPassword={password}
        userEmail={email}
      />
    </div>
  );
}
