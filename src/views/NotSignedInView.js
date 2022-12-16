import React from "react";
import Spacer from "../components/Spacer";
import { HeadingOne, HeadingThree } from "../components/Headings";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import "./SignForm.css";

export default function NotSignedInView(props) {
  return (
    <div className="signForm">
      <Spacer size={4} />
      <HeadingOne>To save and display favorites.</HeadingOne>
      <HeadingThree>Create or login to an existing account!</HeadingThree>
      <Spacer size={2} />
      <div className="btns">
        <Link className="link" to="/signin">
          <SecondaryButton>Log in</SecondaryButton>
        </Link>
        <Spacer size={2} />
        <Link className="link" to="/signup">
          <PrimaryButton>Sign up</PrimaryButton>
        </Link>
        <Spacer size={4} />
      </div>
    </div>
  );
}
