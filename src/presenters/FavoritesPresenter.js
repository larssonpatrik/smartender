import FavoritesView from "../views/SearchResultsView";
import SearchResultsView from "../views/SearchResultsView";
import React, { useState } from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";

export default function FavoritesPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  let testArray = [];

  function notifyACB() {
    reRender({});
  }

  console.log("MODEL: ", props.model.favoriteDrinks);
  if (!promiseState) {
    props.model.favoriteDrinks.forEach((drinkId) => {
      resolvePromise(getDrinkById(drinkId), promiseState, notifyACB);
      testArray = [...testArray, promiseState];
    });
  }

  //Here props will be used instead of placeholder "drinks" const later
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {console.log("TESTARRAY:", testArray)}
      {promiseNoData(promiseState) || <SearchResultsView drinks={[]} />}
    </div>
  );
}
