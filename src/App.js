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

function App() {
  let testPromiseState = {};
  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");
  function testACB() {
    resolvePromise(searchDrinkByName("vodka"), testPromiseState);
  }
  return promiseNoData(testPromiseState) || <div>{testPromiseState.data}</div>;
}

export default App;
