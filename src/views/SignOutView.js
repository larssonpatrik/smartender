import React from "react";
import "../components/css/Headings.css";

export default function SignOutView(props) {
  return (
    <form>
      <div className="signForm">
        <button className="PrimaryButton" onClick={props.newUser}>
          SIGN UP
        </button>
      </div>
    </form>
  );
}
