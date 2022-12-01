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
import { SearchForm, AlterativeForm } from "./components/Forms.js";
import HomePresenter from "./presenters/HomePresenter.js";

function App(props) {
  return (
    <div>
      <HomePresenter />
    </div>
  );
}

export default App;
