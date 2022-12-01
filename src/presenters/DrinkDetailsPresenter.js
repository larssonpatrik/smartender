import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";

import React from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById, searchAPICall, searchDrinkByName } from "../DrinkSource";

export default function DrinkDetailsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  
  function notifyACB() {
    reRender({});
  }

  React.useEffect(() => {
    resolvePromise(getDrinkById("15841"), promiseState, notifyACB);
  }, []);

return (
  <div>
    {promiseNoData(promiseState) || (
    <DrinkDetailsView drinks={promiseState.data.drinks}/>
    )}
  </div>
);
}
