import FavoritesView from "../views/SearchResultsView";
import SearchResultsView from "../views/SearchResultsView";
import React, { useState } from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";
import { HeadingFour } from "../components/Headings";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";
import { getAuth } from "firebase/auth";
import { getFavoriteDrinksFromFirebase } from "../firebaseModel";

export default function FavoritesPresenter(props) {
  const [promiseState] = React.useState({});
  const [firebasePromiseState] = React.useState({});

  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  function getFavoriteDrinks() {
    getFavoriteDrinksFromFirebase(props.model);
    return Promise.all(
      props.model.favoriteDrinks.map((id) => {
        return getDrinkById(id).then((obj) => obj.drinks[0]);
      })
    );
  }

  React.useEffect(() => {
    resolvePromise(getFavoriteDrinks(), promiseState, notifyACB);
  }, []);

  //Here props will be used instead of placeholder "drinks" const later
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spacer size={2} />

      <HeadingFour style={{ textAlign: "center" }}>Favorites</HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        Your absolute favorite drinks!
      </METAText>
      <Spacer size={3} />
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data} />
      )}
    </div>
  );
}
