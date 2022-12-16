import React from "react";
import "./SignForm.css";
import "../components/css/Headings.css";
import { PrimaryButton } from "../components/Buttons";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Spacer from "../components/Spacer";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";
import { Link } from "react-router-dom";

export default function SignInView(props) {
  return (
    <form>
      <div className="signForm">
        <HeadingFour>Log In </HeadingFour>
        <Spacer size={0} />
        <METAText>Log in to your account</METAText>
        <Spacer size={3} />

        <Textfield
          label="Email"
          variant="filled"
          color="primary"
          size="small"
          margin="dense"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "8px",
          }}
          value={props.userEmail}
          onChange={props.inputEmail}
        ></Textfield>

        <Textfield
          label="Password"
          variant="filled"
          color="primary"
          size="small"
          margin="dense"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "8px",
          }}
          value={props.userPassword}
          onChange={props.inputPassword}
        ></Textfield>

        <Spacer size={3} />

        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: "rgb(162, 123, 177)",
            //color: 'rgb(22, 14, 38)',
            borderRadius: "8px",
            fontSize: "16px",
          }}
          color="primary"
          disabled={!props.userPassword}
          onClick={props.newUser}
        >
          <Link to="/">LOG IN</Link>
        </Button>

        <Spacer size={6} />
        <Spacer size={6} />
        <Spacer size={2} />
      </div>
    </form>
  );
}
