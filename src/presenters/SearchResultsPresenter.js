import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";

export default function SearchResultsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("gin"), promiseState, notifyACB);
  }, []);
  //Here props will be used instead of placeholder "drinks" const later
  return (
    <div>
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
