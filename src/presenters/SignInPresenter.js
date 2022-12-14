import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../components/css/Signup.css";
import "../components/css/Button.css";
import SignInView from "../views/SignInView";
import { signInUserInFirebase } from "../firebaseModel";


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
    signInUserInFirebase(event, email, password)
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
