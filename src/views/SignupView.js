import React from "react";

export default function SignupView(props) {
  return (
    <form>
      <div className="Signupform">
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
