import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../components/css/Signup.css";
import "../components/css/Button.css";
import SignUpView from "../views/SignUpView";
import { createUserInFirebase } from "../firebaseModel";

export default function SignUpPresenter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function createUserInFirebaseACB(event) {
    createUserInFirebase(event, email, password)
  }

  return (
    <div>
      <SignUpView
        inputEmail={onInputEmailChangeACB}
        inputPasssword={onInputPasswordChange}
        newUser={createUserInFirebaseACB}
        userPassword={password}
        userEmail={email}
      />
    </div>
  );
}
