import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import DrinkSlideshowView from "../views/DrinkSlideshowView";
import promiseNoData from "../promiseNoData";
import Spacer from "../components/Spacer";

export default function DrinkSlideshowPresenter() {
  const [promiseState] = React.useState({});
  const [promiseState2] = React.useState({});
  const [promiseState3] = React.useState({});

  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName("vodka"), promiseState, notifyACB);
    resolvePromise(searchDrinkByName("gin"), promiseState2, notifyACB);
    resolvePromise(searchDrinkByName("fizz"), promiseState3, notifyACB);
  }, []);
  return (
    <div>
      {promiseNoData(promiseState) || (
        <>
          <Spacer size={5} />
          <DrinkSlideshowView title="Vodka drinks" data={promiseState.data} />
        </>
      )}
      {promiseNoData(promiseState2) || (
        <>
          <Spacer size={3} />
          <DrinkSlideshowView title="Gin drinks" data={promiseState2.data} />
        </>
      )}
      {promiseNoData(promiseState2) || (
        <>
          <Spacer size={3} />
          <DrinkSlideshowView title="Fizzy vibe" data={promiseState3.data} />
        </>
      )}
    </div>
  );
}
