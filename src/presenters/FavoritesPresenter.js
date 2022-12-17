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
  const [firebasePromiseState] = React.useState({});

  const [, reRender] = React.useState();

  const user = getAuth().currentUser;

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
    if (user) {
      resolvePromise(getFavoriteDrinks(), promiseState, notifyACB);
    }
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
      {user ? (
        promiseNoData(promiseState) || (
          <SearchResultsView drinks={promiseState.data} />
        )
      ) : (
        <div className="signForm">
          <Spacer size={4} />
          <HeadingOne>Create or login to an existing account</HeadingOne>
          <HeadingThree>to save and display favorites.</HeadingThree>
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
