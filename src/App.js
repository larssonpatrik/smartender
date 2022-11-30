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
import Header from "./views/Header";

function App() {
  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
