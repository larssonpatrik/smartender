import React, { useState } from "react";

export function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onInputEmailChangeACB(event) {
    setEmail(event.target.value);
    props.onInputEmailChange(email);
  }

  function onInputPasswordChange(event) {
    setPassword(event.target.value);
    props.onInputPasswordChange(password);
  }

  return (
    <form>
      <div className="Signup">
        <input
          className="SignupInput"
          onInput={onInputEmailChangeACB}
          placeholder="Email"
        ></input>
        <input
          className="SignupInput"
          onInput={onInputPasswordChange}
          placeholder="Password"
        ></input>
      </div>
    </form>
  );
}
