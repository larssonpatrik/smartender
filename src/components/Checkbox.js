import React from "react";
import { METAText } from "./TextBodies";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import "../components/css/Checkbox.css";

export default function Checkbox(props) {
  // Event that bubbles up to presenter
  function userSelectsACB() {
    props.onChange(props.index);
    props.updateParamsFunc(props.label);
  }

  // Conditional rendering depending on component state
  return (
    <div className="options" onClick={userSelectsACB}>
      <METAText style={{ color: "white" }}>{props.label}</METAText>
      {props.checked ? (
        <BiCheckboxChecked
          className="checkbox"
          style={{ color: "rgb(162, 123, 177)" }}
        />
      ) : (
        <BiCheckbox className="checkbox" style={{ color: "white" }} />
      )}
    </div>
  );
}
