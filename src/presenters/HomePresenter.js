import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";

import { SearchForm } from "../components/Forms";
import Spacer from "../components/Spacer";
import Header from "../views/headerView";
import DrinkSlideShowView from "../views/DrinkSlideshowView.js";

export default function HomePresenter(props) {
  const [testSearchPromiseState] = React.useState({});
  const [popularDrinksPromiseState] = React.useState({});
  const [ginDrinksPromiseState] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState({});

  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  function clickOnCardACB(nameOfDrink) {
    alert(nameOfDrink);
  }

  function userInputChange(query) {
    setSearchQuery(query);
  }

  function onSearch() {
    resolvePromise(
      searchDrinkByName(searchQuery),
      testSearchPromiseState,
      notifyACB
    );
    console.log(testSearchPromiseState);
  }

  React.useEffect(() => {
    resolvePromise(
      searchDrinkByName("vodka"),
      popularDrinksPromiseState,
      notifyACB
    );

    resolvePromise(searchDrinkByName("Gin"), ginDrinksPromiseState, notifyACB);
  }, []);

  return (
    <div>
      <Spacer size={3} />
      <Header />
      <Spacer size={3} />
      <SearchForm onInputChange={userInputChange} onSearch={onSearch} />
      <Spacer size={3} />
      {promiseNoData(popularDrinksPromiseState) || (
        <DrinkSlideShowView
          title="Popular Drinks"
          data={popularDrinksPromiseState.data}
          clickOnCard={clickOnCardACB}
        />
      )}
      <Spacer size={3} />
      {promiseNoData(ginDrinksPromiseState) || (
        <DrinkSlideShowView
          title="Gin Drinks"
          data={ginDrinksPromiseState.data}
          clickOnCard={clickOnCardACB}
        />
      )}
    </div>
  );
}
