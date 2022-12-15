import React from "react";
import "./SearchResultsView.css";
import DrinkCard from "../components/DrinkCard.js";
import Spacer from "../components/Spacer";
import { HeadingThree, HeadingTwo } from "../components/Headings";

export default function SearchResultsView(props) {
  console.log(props);
  function render_drinkCB(drink, i) {
    return (
      <div className="drinkCardContainer" key={i}>
        <DrinkCard
          name={drink.strDrink}
          img={drink.strDrinkThumb}
          id={drink.idDrink}
          navigation={"drinkDetails"}
        />
        <Spacer size={2} />
      </div>
    );
  }

  return props.drinks ? (
    <>
      {props.drinks.length === 0 || (
        <>
          <HeadingTwo>{props.title}</HeadingTwo>
          <Spacer size={2} />{" "}
        </>
      )}

      <div
        className="resultContainer"
        style={
          props.drinks.length <= 4
            ? { justifyContent: "flex-start" }
            : { justifyContent: "space-between" }
        }
      >
        {props.drinks.map(render_drinkCB)}
      </div>
      <Spacer size={4} />
    </>
  ) : (
    <div style={{ height: "100vh" }}>
      <Spacer size={5}></Spacer>
      <HeadingThree>No results found</HeadingThree>
    </div>
  );
}
