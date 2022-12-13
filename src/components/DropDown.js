import React from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { METAText } from "./TextBodies";
import "../components/css/DropDown.css";
import Spacer from "./Spacer";
import Checkbox from "./Checkbox";

export default function DropDown(props) {
  let keys = Object.keys(props.data);

  function renderOptionsCB(ingr, i) {
    return (
      <>
        <Checkbox label={ingr} />
        <Spacer size={3} />
      </>
    );
  }

  return (
    <>
      <Spacer size={2} />
      <div className="optionContainer">{keys.map(renderOptionsCB)}</div>;
    </>
  );
}
