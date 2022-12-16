import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "../components/css/Signup.css";
import "../components/css/Button.css";
import SignInView from "../views/SignInView";
const app = initializeApp(firebaseConfig);

export default function SignupPresenter(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function signInUserInFirebaseACB(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("You are now signed in!");
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
        inputPasssword={onInputPasswordChange}
        newUser={signInUserInFirebaseACB}
        userPassword={password}
        userEmail={email}
      />
    </div>
  );
}
