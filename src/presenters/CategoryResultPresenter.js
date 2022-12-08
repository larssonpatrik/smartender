import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { filterDrinkByIngridient } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";

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
    }}>
      {promiseNoData(promiseState) || (
        <SearchResultsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
