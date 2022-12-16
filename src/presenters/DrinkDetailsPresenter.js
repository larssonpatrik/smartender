import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";
import {addFavoriteToFirebase, removeFavoriteFromFirebase} from "../firebaseModel"
import React from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById } from "../DrinkSource";
import { useParams } from "react-router-dom";

export default function DrinkDetailsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();
  const [favorites, setFavorites] = React.useState(props.model.favoriteDrinks);
  const [activeFavorite, setActiveFavorite] = React.useState();

  function addToFavoritesACB(id) {
    props.model.addToFavorites(id);
    addFavoriteToFirebase(props.model)
  }

  function removeFromFavoritesACB(id) {
    props.model.removeFromFavorites(id);
    removeFavoriteFromFirebase(props.model)
  }

  function observersACB() {
    setFavorites(props.model.favoriteDrinks);
  }

  function wasCreatedACB() {
    resolvePromise(getDrinkById(id), promiseState, notifyACB);

    props.model.addObserver(observersACB);
    console.log("COMPONENT INITIALIZED");

    function isTakenDownACB() {
      props.model.removeObserver(observersACB);
      console.log("COMPONENT TAKEN DOWN");
    }

    return isTakenDownACB;
  }

  function notifyACB() {
    reRender({});
  }

  const { id } = useParams();

  React.useEffect(wasCreatedACB, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {promiseNoData(promiseState) || (
        <DrinkDetailsView
          drinks={promiseState.data.drinks}
          addFavoriteFunc={addToFavoritesACB}
          removeFavoriteFunc={removeFromFavoritesACB}
          favorites={favorites}
        />
      )}
    </div>
  );
}
