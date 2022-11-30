import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import DrinkSlideshowView from "../views/DrinkSlideshowView";
import promiseNoData from "../promiseNoData";

export default function DrinkSlideshowPresenter() {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("vodka"), promiseState, notifyACB);
  }, []);
  return (
    promiseNoData(promiseState) || (
      <DrinkSlideshowView title="Popular drinks" data={promiseState.data} />
    )
  );
}
