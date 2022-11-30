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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaddanDevEnv from "./PaddDevEnv";

function App() {
  const [promiseState, setPromiseState] = React.useState({});
  const [, rerender] = React.useState();

  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");
  function testACB() {
    resolvePromise(searchDrinkByName("vodka"), promiseState);
    console.log(promiseState);
  }
  return <div>Hello World</div>;
}

export default App;
