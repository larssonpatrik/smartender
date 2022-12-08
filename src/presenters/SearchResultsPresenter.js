import SearchResultsView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";

export default function SearchResultsPresenter(props) {
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  const { searchInput } = useParams();

  React.useEffect(() => {
    resolvePromise(searchDrinkByName(searchInput), promiseState, notifyACB);
  }, []);

  //Here props will be used instead of placeholder "drinks" const later
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
