import React from "react";
import "./App.css";
import {
  searchDrinkByName,
  searchIngredientByName,
  filterDrinkByIngridient,
  filterDrinkByCategory,
  filterIngredientByAlcoholic,
  listIngredients,
} from "./DrinkSource";
import resolvePromise from "./resolvePromise";
import promiseNoData from "./promiseNoData";
import PaddanDevEnv from "./PaddDevEnv";
import DrinkCollectionPresenter from "./presenters/DrinkCollectionPresenter";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter";
function App(props) {
  let testPromiseState = {};
  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");

  return (
    <div>
      <DrinkCollectionPresenter />
      <DrinkDetailsPresenter />
    </div>
  );
}

export default App;
