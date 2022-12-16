import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePresenter from "./presenters/HomePresenter";
import HeaderPresenter from "./presenters/HeaderPresenter.js";
import Spacer from "./components/Spacer";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter.js";
import RandomizePresenter from "./presenters/RandomizePresenter.js";
import AdvancedSearchPresenter from "./presenters/AdvancedSearchPresenter";
import SearchResultsPresenter from "./presenters/SearchResultsPresenter";
import CategoryResultsPresenter from "./presenters/CategoryResultPresenter";
import { HeadingFour } from "./components/Headings";
import SignInPresenter from "./presenters/SignInPresenter";
import SignUpPresenter from "./presenters/SignUpPresenter";
import FavoritesPresenter from "./presenters/FavoritesPresenter.js";
import FooterView from "./views/FooterView.js";
import NotSignedInView from "./views/NotSignedInView.js";

function App(props) {
  return (
    <>
      <Spacer size={3} />
      <HeaderPresenter />
      <Spacer size={3} />
      <Routes>
        <Route path="/" element={<HomePresenter />}></Route>
        <Route
          path="/drinkDetails/:id"
          element={<DrinkDetailsPresenter model={props.model} />}
        ></Route>
        <Route
          path="/searchResult/:searchInput"
          element={<SearchResultsPresenter />}
        ></Route>
        <Route
          path="/categoryResult/:alcohol"
          element={<CategoryResultsPresenter />}
        ></Route>
        <Route path="/search" element={<AdvancedSearchPresenter />}></Route>
        <Route
          path="/randomize"
          element={<RandomizePresenter model={props.model} />}
        ></Route>
        <Route
          path="/favorites"
          element={<FavoritesPresenter model={props.model} />}
        ></Route>
        <Route
          path="/signin"
          element={<SignInPresenter model={props.model} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUpPresenter model={props.model} />}
        ></Route>
        <Route
          path="*"
          element={<HeadingFour>DU ÄR BARSTOPPAD</HeadingFour>}
        ></Route>
      </Routes>
      <FooterView />
    </>
  );
}

export default App;
