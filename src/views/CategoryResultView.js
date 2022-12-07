import React from "react";
import "./SearchResultsView.css";
import DrinkCard from "../components/DrinkCard.js";
import Spacer from "../components/Spacer";

export default function CategoryResultsView(props) {
  function render_drinkCB(drink, i) {
    return (
      <div className="drinkCardContainer">
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={2} />
      </div>
    );
  }

  return (
    <div className="resultContainer">{props.drinks.map(render_drinkCB)}</div>
  );
}
