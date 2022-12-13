import React from "react";
import "./SearchResultsView.css";
import DrinkCard from "../components/DrinkCard.js";
import Spacer from "../components/Spacer";
import { HeadingThree } from "../components/Headings";

export default function SearchResultsView(props) {
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
        <DrinkCard
          name={drink.strDrink}
          img={drink.strDrinkThumb}
          id={drink.idDrink}
          navigation={"drinkDetails"}
        />
        <Spacer size={2} />
        {console.log(drink)}
      </div>
    );
  }

  return props.drinks ? (
    <div className="resultContainer">{props.drinks.map(render_drinkCB)}</div>
  ) : (
    <div style={{ height: "100vh" }}>
      <Spacer size={5}></Spacer>
      <HeadingThree>No results found</HeadingThree>
    </div>
  );
}
