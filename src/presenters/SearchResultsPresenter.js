import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";
import Spacer from "../components/Spacer";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";

export default function SearchResultsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  const { searchInput } = useParams();

  React.useEffect(() => {
    resolvePromise(searchDrinkByName(searchInput), promiseState, notifyACB);
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
      <HeadingFour style={{ textAlign: "center" }}>Search Results</HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        This is what we managed to find for you!
      </METAText>
      <Spacer size={2} />

      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
