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
import DrinkCollectionPresenter from "./presenters/DrinkCollectionPresenter";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter";
import Spacer from "./components/Spacer";
import DrinkDetailsView from "./views/DrinkDetailsView";

function App(props) {
  return <div>
    <DrinkCollectionPresenter/>
    <DrinkDetailsPresenter/>
  </div>;

}

export default App;
