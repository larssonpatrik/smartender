import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "../components/css/Signup.css";
const app = initializeApp(firebaseConfig);

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function createUserInFirebaseACB(e) {
    e.preventDefault();
    const auth = getAuth();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <form>
      <div className="Signupform">
        <input
          className="SignupInput"
          id="email"
          type="text"
          value={email}
          onChange={onInputEmailChangeACB}
          placeholder="Email"
        ></input>
        <input
          className="SignupInput"
          value={password}
          onChange={onInputPasswordChange}
          placeholder="Password"
        ></input>
        <button className="SignupButton" onClick={createUserInFirebaseACB}>
          SIGN UP
        </button>
      </div>
    </form>
  );
}
