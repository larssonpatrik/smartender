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
import Spacer from "./components/Spacer";
import Header from "./views/headerView";
import { SearchForm } from "./components/Forms.js";

function App(props) {
  return (
    <div>
      <Spacer size={16} />
      <SearchForm />
      <Spacer size={16} />
    </div>
  );
}

export default App;
