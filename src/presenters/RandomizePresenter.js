import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";

import React from "react";
import resolvePromise from "../resolvePromise";
import { getRandomDrink} from "../DrinkSource";
import { PrimaryButton } from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function DrinkDetailsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  function randomizeDrinkACB() {
    resolvePromise(getRandomDrink(), promiseState, notifyACB)
  }

  React.useEffect(() => {
    resolvePromise(getRandomDrink(), promiseState, notifyACB);
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
      <PrimaryButton action={randomizeDrinkACB}>Randomize again!</PrimaryButton>
      <Spacer size={5}/>
    </div>
  );
}
