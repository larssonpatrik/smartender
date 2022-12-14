import React from "react";
import "./css/SignForm.css";
import "../components/css/Headings.css";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";
import { HeadingFour } from "../components/Headings";
import { Link } from "react-router-dom";

export default function SignUpView(props) {
  return (
    <form>
      <div className="signForm">
        <HeadingFour>Sign Up </HeadingFour>
        <Spacer size={0} />
        <METAText>Create an account </METAText>
        
        <Spacer size={3} />

        <Textfield
          label="Email"
          variant="filled"
          color="primary"
          type="email"
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
          type="password"
          size="small"
          margin="dense"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "8px",
          }}
          value={props.userPassword}
          onChange={props.inputPasssword}
        ></Textfield>

        <Spacer size={3} />

        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: "rgb(162, 123, 177)",
            borderRadius: "8px",
            fontSize: "16px",
          }}
          color="primary"
          disabled={!props.userPassword}
          onClick={props.newUser}
        ><Link style={{textDecoration: 'None', color: 'inherit'}} className='link' to="/">
          SIGN UP
        </Link >
          
        </Button>
        <Spacer size={2} />
        <METAText>OBS: don't use your real email and password! </METAText>
        <Spacer size={6} />
        <Spacer size={6} />
        <Spacer size={2} />
      </div>
    </form>
  );
}
