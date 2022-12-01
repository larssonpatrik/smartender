import React from "react";
import "./drinkCollectionView.css";
import { DrinkCard } from "../components/DrinkCard";
import Spacer from "../components/Spacer";
export default function DrinkCollectionView(props) {

  console.log('2', props.drinks[0].strDrink);
  function render_drinkCB(drink, i) {
    /*return (
      //Change img to img tag with drink prop "img"
      <React.Fragment key={i}>
        
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={1}/>
      </React.Fragment>
      
    );*/
    return (
      <div className="drinkCardContainer">
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={2}/>
      </div>
    )
  }

  return <div className="resultContainer">{props.drinks.map(render_drinkCB)}</div>;
}
