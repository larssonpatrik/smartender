import React from "react";
import "./App.css";
import {
  searchDrinkByName,
  searchIngredientByName,
  filterDrinkByIngridient,
  filterDrinkByCategory,
  filterIngredientByAlcoholic,
  listIngredients,
  listAlcoholics,
} from "./DrinkSource";
import resolvePromise from "./resolvePromise";
import promiseNoData from "./promiseNoData";
import PaddanDevEnv from "./PaddDevEnv";
import Spacer from "./components/Spacer";
import SearchResultsPresenter from "./presenters/SearchResultsPresenter";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter";

function App(props) {
  return (
    <div>
      <SearchResultsPresenter />
      <DrinkDetailsPresenter />
      <h1>HEllo world</h1>
    </div>
  );
}

export default App;
