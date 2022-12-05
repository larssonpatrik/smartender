import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";

import React from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById, searchAPICall, searchDrinkByName } from "../DrinkSource";
import { PrimaryButton } from "../components/Buttons";
import Spacer from "../components/Spacer";

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
    <div style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center'
      }}>
      {promiseNoData(promiseState) || (
        <DrinkDetailsView drinks={promiseState.data.drinks} />
      )}
      <PrimaryButton>Randomize again!</PrimaryButton>
      <Spacer size={5}/>
    </div>
  );
}
