import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { filterDrinkByIngridient } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";

export default function SearchResultsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  const { userInput } = useParams();

  React.useEffect(() => {
    resolvePromise(filterDrinkByIngridient(userInput), promiseState, notifyACB);
  }, []);

  return (
    <div>
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
