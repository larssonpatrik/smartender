import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import DrinkSlideshowPresenter from "./presenters/DrinkSlideshowPresenter";
import HomePresenter from "./presenters/HomePresenter";
import Header from "./views/headerView";
import Spacer from "./components/Spacer";
import DrinkDetailsPresenter from "./presenters/DrinkDetailsPresenter.js";
import RandomizePresenter from "./presenters/RandomizePresenter.js";
import DrinkSlideshowView from "./views/DrinkSlideshowView";
import { AlterativeForm } from "./components/Forms";

function App(props) {
  return (
    <>
    <Spacer size={3} />
      <Header />
      <Spacer size={3} />
      <Routes>
        <Route path="/" element={<HomePresenter />}></Route>
        <Route path="/drinkDetalis">
          <Route index element={<DrinkDetailsPresenter />}></Route>
          <Route path=":id" element={<DrinkSlideshowView />}>
            {
              // måste skicka med id på drinken // behöver lägga in const{id}=useParams() på den sidan
            }
          </Route>
        </Route>
        <Route path="/search" element={<AlterativeForm />}></Route>
        <Route path="/randomize" element={<RandomizePresenter />}></Route>
        <Route path="/favorites" element={<div />}></Route>
        <Route path="*" element={<h1>NOT FOUND</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
