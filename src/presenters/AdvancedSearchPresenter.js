import React from "react";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";
import Spacer from "../components/Spacer";
import DropDownView from "../views/DropDownView";
import SearchResultsView from "../views/SearchResultsView";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";

export default function AdvancedSearchPresenter() {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("Vodka"), promiseState, notifyACB);
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

      <HeadingFour style={{ textAlign: "center" }}>Advanced Search</HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        Select your favorite ingredients and find your perfect cocktail!
      </METAText>
      <Spacer size={3} />
      <DropDownView />
      <Spacer size={5} />
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
