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
<<<<<<< Updated upstream
import PaddanDevEnv from "./PaddDevEnv";
import DrinkCollectionPresenter from "./presenters/DrinkCollectionPresenter";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter";
import Spacer from "./components/Spacer";
=======
import Header from "./views/headerView";
import { SearchForm } from "./components/Forms.js";
>>>>>>> Stashed changes

function App(props) {
  return <div>Hello World!</div>;

<<<<<<< Updated upstream
  
=======
  return (
    <div>
      <SearchForm />
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
