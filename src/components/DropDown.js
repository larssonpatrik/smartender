import React from "react";
import { BiCheckbox } from "react-icons/bi";
import { METAText } from "./TextBodies";
import "../components/css/DropDown.css";
import Spacer from "./Spacer";

export default function DropDown(props) {
  let keys = Object.keys(props.data);

  function renderOptionsCB(ingr, i) {
    return (
      <>
        <div className="options" style={{ color: "white" }} key={i}>
          <METAText>{ingr}</METAText>
          <BiCheckbox className="checkbox" />
        </div>
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
