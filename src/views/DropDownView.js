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

  const [alcoholActive, setalcoholActive] = React.useState(false);
  const [sweetenerActive, setSweetenerActive] = React.useState(false);
  const [flavourActive, setFlavourActive] = React.useState(false);

  const ALCOHOL = {
    Vodka: [
      "Vodka",
      "Absolut Kurant",
      "Absolut Peppar",
      "Absolut Vodka",
      "Citrus Vodka",
      "Cranberry Vodka",
      "Lemon Vodka",
      "Lime Vodka",
      "Melon Vodka",
      "Orange Vodka",
      "Peach Vodka",
      "Pineapple Vodka",
      "Raspberry Vodka",
      "Vanilla Vodka",
      "Absolut Citron",
    ],
    Rum: [
      "Rum",
      "Aejo Rum",
      "Añejo Rum",
      "Banana Rum",
      "Black Rum",
      "Coconut Rum",
      "Dark Rum",
      "Gold rum",
      "Light Rum",
      "Malibu Rum",
      "Orange rum",
      "Pineapple rum",
      "Spiced Rum",
      "White Rum",
      "Blackstrap rum",
      "151 proof rum",
    ],
    Gin: ["Gin", "Sloe Gin"],
    Whiskey: [
      "Blended Whiskey",
      "Canadian Whisky",
      "Irish Whiskey",
      "Rye Whiskey",
      "Tennessee whiskey",
      "Whiskey",
      "Whisky",
      "Cinnamon Whisky",
      "Scotch",
      "Blended Scotch",
      "Islay single malt Scoth",
    ],
    Tequila: ["Tequila", "Gold Tequila", "Tequila rose"],
    Vermouth: [
      "Dry Vermouth",
      "Sweet Vermouth",
      "Vermouth",
      "Rosso Vermouth",
      "White Vermouth",
    ],
  };

  const TASTERS = {
    Lime: [
      "Lime juice cordia",
      "Lime Juice",
      "Lime Peel",
      "Limeade",
      "Lime",
      "Fresh Lime Juice",
    ],
    Lemon: [
      "Bitter Lemon",
      "Fresh Lemon Juice",
      "Lemon Peel",
      "Lemonade",
      "lemon",
      "lemon-lime",
    ],
    Coffee: ["Coffee"],
    Chocolate: [
      "Chocolate",
      "Chocolate Syrup",
      "Chocolate Milk",
      "Chocolate Ice-cream",
      "Chocolate Liqueur",
      "Dark Chocolate",
      "Hot Chocolate",
      "Plain Chocolate",
      "Choclate Sauce",
      "Salted Chocolate",
    ],
    Berry: [
      "Berries",
      "Blackberries",
      "Strawberries",
      "Blueberries",
      "Cranberries",
    ],
  };

  const SWEETNERES = {
    Sugar: [
      "Brown Sugar",
      "Demerara Sugar",
      "Granulated Sugar",
      "Powdered Sugar",
      "Sugar",
    ],
    Syrup: [
      "Sugar Syrup",
      "Agave Syrup",
      "Banana Syrup",
      "Choclate Syrup",
      "Coconut Syrup",
      "Corn Syrup",
      "Maple Syrup",
      "Mint Syrup",
      "Orgeat Syrup",
      "Passion fruit syrup",
      "Raspberry syrup",
      "Strawberry syrup",
      "Vanilla Syrup",
      "Ginger Syrup",
      "Honey syrup",
      "Pineapple Syrup",
      "Rosemary Syrup",
    ],
  };
  const MIXERS = {
    sodas: [
      "Club Soda",
      "Coca-cola",
      "Cream Soda",
      "Grape soda",
      "Lemon soda",
      "Lemon-lime soda",
      "Orange Soda",
      "Soda Water",
      "Pepsi Cola",
      "Sprite",
      "7-up",
      "Fanta",
      "Tonic Water",
    ],
    juice: [
      "Apple Juice",
      "Cherry Juice",
      "Clamato Juice",
      "Cranberry Juice",
      "Fruit Juice",
      "Grape juice",
      "Grapefruit Juice",
      "Guava juice",
      "Orange Juice",
      "Papaya juice",
      "Passion fruit juice",
      "Peach juice",
      "Pineapple Juice",
      "Raspberry Juice",
      "Strawberry juice",
      "Tomato Juice",
      "Pomegranate juice",
    ],
  };

  function setalcoholActiveACB() {
    setalcoholActive(!alcoholActive);
    setSweetenerActive(false);
    setFlavourActive(false);
  }

  function setSweetenerActiveACB() {
    setalcoholActive(false);
    setSweetenerActive(!sweetenerActive);
    setFlavourActive(false);
  }

  function setFlavourActiveACB() {
    setalcoholActive(false);
    setSweetenerActive(false);
    setFlavourActive(!flavourActive);
  }

  function renderCurrentActive() {
    if (alcoholActive) {
      return (
        promiseNoData(ingredientPromiseState) || (
          <>
            {console.log("PROMISESTATE", ingredientPromiseState.data)}
            <DropDown data={ALCOHOL} />
          </>
        )
      );
    } else if (sweetenerActive) {
      return (
        promiseNoData(ingredientPromiseState) || (
          <>
            {console.log("PROMISESTATE", ingredientPromiseState.data)}
            <DropDown data={SWEETNERES} />
          </>
        )
      );
    } else if (flavourActive) {
      return (
        promiseNoData(ingredientPromiseState) || (
          <>
            {console.log("PROMISESTATE", ingredientPromiseState.data)}
            <DropDown data={TASTERS} />
          </>
        )
      );
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
        <TirtiaryButton action={setalcoholActiveACB}>
          Choose Alcohol
        </TirtiaryButton>
        <Spacer size={3} />
        <TirtiaryButton action={setSweetenerActiveACB}>
          Choose Sweetener
        </TirtiaryButton>
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
