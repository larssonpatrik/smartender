import React from "react";
import { METAText } from "./TextBodies";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import "../components/css/Checkbox.css";

export default function Checkbox(props) {
  // Components state that updates the UI depending on option is checked or not
  const [checked, setChecked] = React.useState(false);

  // Event that bubbles up to presenter
  function userSelectsACB() {
    props.action(props.label);
  }

  // Conditional rendering depending on component state
  return checked ? (
    <div className="options" onClick={() => setChecked(!checked)}>
      <METAText style={{ color: "white" }}>{props.label}</METAText>
      <BiCheckboxChecked
        className="checkbox"
        style={{ color: "rgb(162, 123, 177)" }}
      />
    </div>
  ) : (
    <div className="options" onClick={() => setChecked(!checked)}>
      <METAText style={{ color: "white" }}>{props.label}</METAText>
      <BiCheckbox className="checkbox" style={{ color: "white" }} />
    </div>
  );
}
