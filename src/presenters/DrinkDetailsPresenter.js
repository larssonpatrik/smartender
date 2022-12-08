import DrinkDetailsView from "../views/DrinkDetailsView";
import promiseNoData from "../promiseNoData";

import React from "react";
import resolvePromise from "../resolvePromise";
import { getDrinkById } from "../DrinkSource";
import { useParams } from "react-router-dom";

export default function DrinkDetailsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  const { id } = useParams();

  React.useEffect(() => {
    resolvePromise(getDrinkById(id), promiseState, notifyACB);
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
        <DrinkDetailsView drinks={promiseState.data.drinks} />
      )}
    </div>
  );
}
