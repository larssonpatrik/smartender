import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePresenter from "./presenters/HomePresenter";
import Header from "./views/headerView";
import Spacer from "./components/Spacer";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter.js";
import RandomizePresenter from "./presenters/RandomizePresenter.js";
import AdvancedSearchPresenter from "./presenters/AdvancedSearchPresenter";
import SearchResultsPresenter from "./presenters/SearchResultsPresenter";
import CategoryResultsPresenter from "./presenters/CategoryResultPresenter";
import { HeadingFour } from "./components/Headings";

function App(props) {
  return (
    <>
      <Spacer size={3} />
      <Header />
      <Spacer size={3} />
      <Routes>
        <Route path="/" element={<HomePresenter />}></Route>
        <Route
          path="/drinkDetails/:id"
          element={<DrinkDetailsPresenter />}
        ></Route>
        <Route
          path="/searchResult/:searchInput"
          element={<SearchResultsPresenter />}
        ></Route>
        <Route
          path="/categoryResult/:alcohol"
          element={<CategoryResultsPresenter />}
        ></Route>
        <Route
          path="/advancedsearch"
          element={<AdvancedSearchPresenter />}
        ></Route>
        <Route path="/randomize" element={<RandomizePresenter />}></Route>
        <Route path="/favorites" element={<div />}></Route>
        <Route
          path="*"
          element={<HeadingFour>DU ÄR FKN BARSTOPPAD</HeadingFour>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
