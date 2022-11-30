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
  let testPromiseState = {};
  //listIngredients();
  //searchDrinkByName("vodka");
  //filterDrinkByIngridient("Gin, Lime");
  //filterDrinkByCategory("classic");
  //filterIngredientByAlcoholic("non-alcoholic");
  function testACB() {
    resolvePromise(searchDrinkByName("vodka"), testPromiseState);
    console.log(testPromiseState);
  }
  return (
    <Router>
      <div>
        <Link to="/sam">Sam</Link>
        <Link to="/paddi">Paddi</Link>
        <Link to="/flis">Flis</Link>
        <Link to="/gretzky">Gretzky</Link>

        <Routes>
          <Route path="/sam"></Route>
          <Route path="/paddi" element={<PaddanDevEnv />} />

          <Route path="/flis">{/* <DevEnvNamn här /> */}</Route>
          <Route path="/gretzky">{/* <DevEnvNamn här /> */}</Route>
        </Routes>

        <h1>Hello world</h1>
      </div>
    </Router>
  );
}

export default App;
