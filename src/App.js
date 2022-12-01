import React from "react";
import "./App.css";
<<<<<<< HEAD

import DrinkSlideshowPresenter from "./presenters/DrinkSlideshowPresenter";
=======
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
>>>>>>> fd9f198bafbd436d4a1c2a76c902d4ff010c1f41

function App(props) {
  return (
    <div>
<<<<<<< HEAD
      <DrinkSlideshowPresenter />
=======
      <HomePresenter />
>>>>>>> fd9f198bafbd436d4a1c2a76c902d4ff010c1f41
    </div>
  );
}

export default App;
