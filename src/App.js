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
import Signup from "./presenters/SignupPresenter.js";

function App(props) {
  return (
    <>
      <Signup />
    </>
  );
}

export default App;
