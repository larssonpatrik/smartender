import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { HeadingFour } from "../components/Headings";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";
import { getAuth } from "firebase/auth";
import { getFavoriteDrinksFromFirebase } from "../firebaseModel";
import { HeadingOne, HeadingThree } from "../components/Headings";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { Link } from "react-router-dom";

export default function FavoritesPresenter(props) {
  const [promiseState] = React.useState({});
  const [favoriteArray, setFavoriteArray] = React.useState(
    props.model.favoriteDrinks
  );
  const [, reRender] = React.useState();
  const user = getAuth().currentUser;

  function notifyACB() {
    reRender({});
  }

  function observersACB() {
    setFavoriteArray(props.model.favoriteDrinks);
  }

  function getFavoriteDrinks() {
    if (user) {
      getFavoriteDrinksFromFirebase(props.model);
    }
    return Promise.all(
      favoriteArray.map((id) => {
        return getDrinkById(id).then((obj) => obj.drinks[0]);
      })
    );
  }

  function wasCreatedACB() {
    props.model.addObserver(observersACB);

    resolvePromise(getFavoriteDrinks(), promiseState, notifyACB);

    function isTakenDownACB() {
      props.model.removeObserver(observersACB);
    }
    return isTakenDownACB;
  }

  React.useEffect(wasCreatedACB, [favoriteArray]);

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
      {user ? (
        promiseNoData(promiseState) || (
          <SearchResultsView drinks={promiseState.data} />
        )
      ) : (
        <div className="signForm">
          <Spacer size={4} />
          <HeadingOne>To save and display favorites.</HeadingOne>
          <HeadingThree>Create or login to an existing account!</HeadingThree>
          <Spacer size={2} />
          <div className="btns">
            <Link className="link" to="/signin">
              <SecondaryButton>Log in</SecondaryButton>
            </Link>
            <Spacer size={2} />
            <Link className="link" to="/signup">
              <PrimaryButton>Sign up</PrimaryButton>
            </Link>
            <Spacer size={4} />
          </div>
        </div>
      )}
    </div>
  );
}
