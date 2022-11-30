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
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("gin"), promiseState, notifyACB);
  }, []);

  return (
    <div>
      {promiseNoData(promiseState) || (
        <p>{promiseState.data.drinks[1].strDrink}</p>
      )}
    </div>
  );
}

export default App;
