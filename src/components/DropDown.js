import React from "react";
import "../components/css/DropDown.css";
import Spacer from "./Spacer";
import Checkbox from "./Checkbox";
import { SecondaryButton } from "./Buttons";

export default function DropDown(props) {
  const [isCheckedArray, setIsCheckedArray] = props.checkedArrayState;

  function handleCheck(position) {
    const updatedIsCheckedArray = isCheckedArray.map((item, index) => {
      return index === position ? !item : item;
    });

    setIsCheckedArray(updatedIsCheckedArray);
  }

  function renderOptionsCB(ingr, i) {
    return (
      <React.Fragment key={i}>
        {props.type === "alcohol" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArray[i]}
            onChange={handleCheck}
            updateParamsFunc={props.updateParamsFunc}
            index={i}
          />
        ) : props.type === "mixer" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArray[i]}
            onChange={handleCheck}
            updateParamsFunc={props.updateParamsFunc}
            index={i}
          />
        ) : props.type === "flavour" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArray[i]}
            onChange={handleCheck}
            updateParamsFunc={props.updateParamsFunc}
            index={i}
          />
        ) : null}
        <Spacer size={3} />
      </React.Fragment>
    );
  }

  return (
    <div className="dropDownContainer">
      <Spacer size={2} />
      <div className="optionContainer">{props.data.map(renderOptionsCB)} </div>
      <Spacer size={2} />
      <div>
        <SecondaryButton action={props.newSearchFunc}>
          Let's Go!
        </SecondaryButton>
      </div>
    </div>
  );
}
