import React from "react";
import { TirtiaryButton } from "../components/Buttons";
import DropDown from "../components/DropDown";
import Spacer from "../components/Spacer";
import { listCategories, listGlasses, listIngredients } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import resolvePromise from "../resolvePromise";

export default function DropDownView(props) {
  const [alcoholActive, setalcoholActive] = React.useState(false);
  const [mixerActive, setmixerActive] = React.useState(false);
  const [flavourActive, setFlavourActive] = React.useState(false);

  const ALCOHOL = [
    "Vodka",
    "Absolut Kurant",
    "Absolut Vodka",
    "Raspberry Vodka",
    "Vanilla Vodka",
    "Absolut Citron",
    "Rum",
    "Añejo Rum",
    "Dark Rum",
    "Light Rum",
    "Malibu Rum",
    "White Rum",
    "151 proof rum",
    "Gin",
    "Sloe Gin",
    "Blended Whiskey",
    "Irish Whiskey",
    "Rye Whiskey",
    "Tennessee whiskey",
    "Scotch",
    "Tequila",
    "Vermouth",
    "Dry Vermouth",
    "Sweet Vermouth",
  ];

  const TASTERS = [
    "Lemon Peel",
    "Lemon Juice",
    "Lemonade",
    "lemon",
    "Lime Juice",
    "Lime",
    "Chocolate",
    "Chocolate Syrup",
    "Mint",
    "Coffee",
    "Strawberries",
    "Mango",
    "Banana",
  ];

  const MIXERS = [
    "Club Soda",
    "Coca-cola",
    "Grape soda",
    "Lemon-lime soda",
    "Soda Water",
    "Sprite",
    "Tonic Water",
    "Apple Juice",
    "Cranberry Juice",
    "Grapefruit Juice",
    "Orange Juice",
    "Passion fruit juice",
    "Pineapple Juice",
    "Tomato Juice",
    "Grenadine",
  ];

  function setalcoholActiveACB() {
    setalcoholActive(!alcoholActive);
    setmixerActive(false);
    setFlavourActive(false);
  }

  function setmixerActiveACB() {
    setalcoholActive(false);
    setmixerActive(!mixerActive);
    setFlavourActive(false);
  }

  function setFlavourActiveACB() {
    setalcoholActive(false);
    setmixerActive(false);
    setFlavourActive(!flavourActive);
  }

  function renderCurrentActive() {
    if (alcoholActive) {
      return (
        <DropDown
          data={ALCOHOL}
          type={"alcohol"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
        />
      );
    } else if (mixerActive) {
      return (
        <DropDown
          data={MIXERS}
          type={"mixer"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
        />
      );
    } else if (flavourActive) {
      return (
        <DropDown
          data={TASTERS}
          type={"flavour"}
          updateParamsFunc={props.updateParamsFunc}
          newSearchFunc={props.newSearchFunc}
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
        <TirtiaryButton action={setalcoholActiveACB}>
          Choose Alcohol
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={setmixerActiveACB}>Choose Mixer</TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={setFlavourActiveACB}>
          Choose Flavour
        </TirtiaryButton>
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
