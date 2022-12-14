import React from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { METAText } from "./TextBodies";
import "../components/css/DropDown.css";
import Spacer from "./Spacer";
import Checkbox from "./Checkbox";
import { SecondaryButton } from "./Buttons";

export default function DropDown(props) {
  const [isCheckedArrayAlcohol, setIsCheckedArrayAlcohol] = React.useState(
    new Array(props.data.length).fill(false)
  );

  const [isCheckedArrayMixer, setisCheckedArrayMixer] = React.useState(
    new Array(props.data.length).fill(false)
  );

  const [isCheckedArrayFlavour, setIsCheckedArrayFlavour] = React.useState(
    new Array(props.data.length).fill(false)
  );

  function handleCheck(position) {
    if (props.type === "alcohol") {
      const updatedIsCheckedArray = isCheckedArrayAlcohol.map((item, index) => {
        return index === position ? !item : item;
      });
      setIsCheckedArrayAlcohol(updatedIsCheckedArray);
    } else if (props.type === "mixer") {
      const updatedIsCheckedArray = isCheckedArrayMixer.map((item, index) => {
        return index === position ? !item : item;
      });
      setisCheckedArrayMixer(updatedIsCheckedArray);
    } else if (props.type === "flavour") {
      const updatedIsCheckedArray = isCheckedArrayFlavour.map((item, index) => {
        return index === position ? !item : item;
      });
      setIsCheckedArrayFlavour(updatedIsCheckedArray);
    }
  }

  function renderOptionsCB(ingr, i) {
    return (
      <React.Fragment key={i}>
        {props.type === "alcohol" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArrayAlcohol[i]}
            onChange={handleCheck}
            updateParamsFunc={props.updateParamsFunc}
            index={i}
          />
        ) : props.type === "mixer" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArrayMixer[i]}
            onChange={handleCheck}
            updateParamsFunc={props.updateParamsFunc}
            index={i}
          />
        ) : props.type === "flavour" ? (
          <Checkbox
            label={ingr}
            checked={isCheckedArrayFlavour[i]}
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
