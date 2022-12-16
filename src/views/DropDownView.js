import React from "react";
import { SecondaryButton, TirtiaryButton } from "../components/Buttons";
import DropDown from "../components/DropDown";
import Spacer from "../components/Spacer";

export default function DropDownView(props) {
  function renderCurrentActive() {
    if (props.activeState.alcohol[0]) {
      return (
        <DropDown
          data={props.data[0]}
          type={"alcohol"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
          checkedArrayState={props.checkedArrayState.alcohol}
        />
      );
    } else if (props.activeState.mixer[0]) {
      return (
        <DropDown
          data={props.data[1]}
          type={"mixer"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
          checkedArrayState={props.checkedArrayState.mixer}
        />
      );
    } else if (props.activeState.flavour[0]) {
      return (
        <DropDown
          data={props.data[2]}
          type={"flavour"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
          checkedArrayState={props.checkedArrayState.flavour}
        />
      );
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TirtiaryButton action={props.activeState.alcohol[1]}>
          Choose Alcohol
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={props.activeState.mixer[1]}>
          Choose Mixer
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={props.activeState.flavour[1]}>
          Choose Flavour
        </TirtiaryButton>
        <Spacer size={3} />
        <SecondaryButton action={props.clearChoices}>
          Clear Choices
        </SecondaryButton>
      </div>
      {renderCurrentActive()}
    </div>
  );
}
