import DrinkCollectionView from "../views/DrinkCollectionView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { searchAPICall, searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";

export default function DrinkCollectionPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("Vodka"), promiseState, notifyACB);
  }, []);
  //Here props will be used instead of placeholder "drinks" const later
  return (
    <div>
      {promiseNoData(promiseState) || (
        <DrinkCollectionView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
