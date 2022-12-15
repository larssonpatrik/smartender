import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { filterDrinkByIngridient } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";
import Spacer from "../components/Spacer";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";

export default function CategoryResultsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  const { alcohol } = useParams();

  React.useEffect(() => {
    resolvePromise(filterDrinkByIngridient(alcohol), promiseState, notifyACB);
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
      <HeadingFour style={{ textAlign: "center" }}>
        {alcohol} Drinks
      </HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        {alcohol === "Rum"
          ? "Want a quick trip to the caribbean? Enjoy one of these!"
          : alcohol === "Gin"
          ? "Feeling fancy? Try one of these!"
          : alcohol === "Vodka"
          ? "Are you looking for a classy yet simple drink? These are the ones to make!"
          : null}
      </METAText>
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
