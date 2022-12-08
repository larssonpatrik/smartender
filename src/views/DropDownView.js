import React from "react";
import { TirtiaryButton } from "../components/Buttons";
import DropDown from "../components/DropDown";
import Spacer from "../components/Spacer";
import { listCategories, listGlasses, listIngredients } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import resolvePromise from "../resolvePromise";

export default function DropDownView(props) {
  const [ingredientPromiseState, setIngredientPromiseState] = React.useState(
    {}
  );
  const [typePromiseState, setTypePromiseState] = React.useState({});
  const [glassPromiseState, setGlassPromiseState] = React.useState({});
  const [, reRender] = React.useState({});

  function notifyACB() {
    reRender({});
  }

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
      return (
        promiseNoData(ingredientPromiseState) || (
          <>
            {console.log("PROMISESTATE", ingredientPromiseState.data.drinks[0])}
            <DropDown data={ingredientPromiseState.data.drinks} />
          </>
        )
      );
    } else if (typeActive) {
      return "type";
    } else if (glassActive) {
      return "glass";
    }
  }
  React.useEffect(() => {
    resolvePromise(listIngredients(), ingredientPromiseState, notifyACB);
    resolvePromise(listCategories(), typePromiseState, notifyACB);
    resolvePromise(listGlasses(), glassPromiseState, notifyACB);
  }, []);
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
