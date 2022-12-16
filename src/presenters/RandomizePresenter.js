import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";

import React from "react";
import resolvePromise from "../resolvePromise";
import { getRandomDrink } from "../DrinkSource";
import { PrimaryButton } from "../components/Buttons";
import Spacer from "../components/Spacer";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";
import { addFavoriteToFirebase } from "../firebaseModel";

export default function RandomizePresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();
  const [favorites, setFavorites] = React.useState(props.model.favoriteDrinks);

  function addToFavoritesACB(id) {
    props.model.addToFavorites(id);
    addFavoriteToFirebase();
  }

  function removeFromFavoritesACB(id) {
    props.model.removeFromFavorites(id);
  }

  function notifyACB() {
    reRender({});
  }

  function randomizeDrinkACB() {
    resolvePromise(getRandomDrink(), promiseState, notifyACB);
  }

  React.useEffect(() => {
    resolvePromise(getRandomDrink(), promiseState, notifyACB);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spacer size={2} />

      <HeadingFour style={{ textAlign: "center" }}>Randomizer</HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        The drink selected just for you!
      </METAText>
      <Spacer size={3} />
      <PrimaryButton action={randomizeDrinkACB}>Randomize again!</PrimaryButton>
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
