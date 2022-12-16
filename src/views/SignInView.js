import React from "react";
import "./SignForm.css";
import "../components/css/Headings.css";

export default function SignupView(props) {
  return (
    <form>
      <div className="signForm">
        <input
          className="SignupInput"
          value={props.userEmail}
          onChange={props.inputEmail}
          placeholder="Email"
        ></input>
        <input
          className="SignupInput"
          value={props.userPassword}
          onChange={props.inputPasssword}
          placeholder="Password"
        ></input>
        <button className="PrimaryButton" onClick={props.newUser}>
          SIGN IN
        </button>
      </div>
    </form>
  );
}
