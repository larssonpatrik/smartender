import React from "react";
import { DrinkCard } from "../components/DrinkCard";
export default function DrinkCollectionView(props) {

  console.log('2', props.drinks[0].strDrink);
  function render_drinkCB(drink, i) {
    return (
      //Change img to img tag with drink prop "img"
      <React.Fragment key={i}>
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
      </React.Fragment>
    );
  }

  return <div>{props.drinks.map(render_drinkCB)}</div>;
}
