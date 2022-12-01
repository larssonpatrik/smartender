import React from "react";
import { DrinkCard } from "../components/DrinkCard";
import Spacer from "../components/Spacer";
import "./DrinkCollectionView.css";

export default function DrinkCollectionView(props) {

  console.log('2', props.drinks[0].strDrink);
  function render_drinkCB(drink, i) {
    return (
      <div className="CardContainer" key={i}>
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={2} />
      </div>
    );
  }

  return (
    <div className="ResultsContainer">{props.drinks.map(render_drinkCB)}</div>
  );
}
