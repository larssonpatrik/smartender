import React from "react";
import { TirtiaryButton } from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function DropDownView(props) {
  const [ingredientActive, setIngredientActive] = React.useState(false);
  const [typeActive, setTypeActive] = React.useState(false);
  const [glassActive, setGlassActive] = React.useState(false);

  function setIngredientActiveACB() {
    setIngredientActive(!ingredientActive);
    setTypeActive(false);
    setGlassActive(false);
  }

  function setTypeActiveACB() {
    setIngredientActive(false);
    setTypeActive(!typeActive);
    setGlassActive(false);
  }

  function setGlassActiveACB() {
    setIngredientActive(false);
    setTypeActive(false);
    setGlassActive(!glassActive);
  }

  function renderCurrentActive() {
    if (ingredientActive) {
      return "Ingredients";
    } else if (typeActive) {
      return "type";
    } else if (glassActive) {
      return "glass";
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
        <TirtiaryButton action={setIngredientActiveACB}>
          Choose Ingredients
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={setTypeActiveACB}>
          Choose Type of Drink
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={setGlassActiveACB}>Choose Glass</TirtiaryButton>
      </div>
      {renderCurrentActive()}
    </div>
  );
}

/* if (props.active === "") {
        
}
else if (props.active === "ingredients") {
return "Nu visas ingredients";
} else if (props.active === "type") {
return "Nu visas type";
} else if (props.active === "glass") {
return "nu visas glass";
}
*/
