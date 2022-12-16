import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "../components/css/Signup.css";
import "../components/css/Button.css";
import SignUpView from "../views/SignUpView";
const app = initializeApp(firebaseConfig);

export default function SignUpPresenter(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function createUserInFirebaseACB(event) {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
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
