import React from "react";
import "../components/css/Headings.css";

export default function SignUpView(props) {
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
          SIGN UP
        </button>
      </div>
    </form>
  );
}
