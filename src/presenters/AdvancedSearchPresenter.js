import React from "react";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";
import Spacer from "../components/Spacer";
import DropDownView from "../views/DropDownView";
import SearchResultsView from "../views/SearchResultsView";
import resolvePromise from "../resolvePromise";
import {
  filterDrinkByMultiIngridient,
  searchDrinkByName,
} from "../DrinkSource";
import promiseNoData from "../promiseNoData";

export default function AdvancedSearchPresenter() {
  const [resultsPromiseState] = React.useState({});
  const [searchParamArray, setSearchParamArray] = React.useState([]);
  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  function updateSearchParamArray(itemToBeAdded, itemArray) {
    let duplicateChecker = false;

    function checkDuplicateCB(ingr) {
      if (ingr === itemToBeAdded) duplicateChecker = true;
    }

    function checkIngrCB(ingr) {
      return ingr !== itemToBeAdded;
    }

    if (searchParamArray.length !== 0)
      searchParamArray.forEach(checkDuplicateCB);

    if (duplicateChecker) {
      setSearchParamArray(searchParamArray.filter(checkIngrCB));
    } else {
      if (!Array.isArray(itemToBeAdded)) {
        setSearchParamArray([...searchParamArray, itemToBeAdded]);
      } else {
        setSearchParamArray([...searchParamArray, ...itemArray]);
      }
    }
  }

  function checkboxNewPromise() {
    if (searchParamArray.length !== 0) {
      let searchQuery = "";

      searchParamArray.forEach((item) => {
        if (item.includes(" ")) {
          item = item.replace(" ", "_");
        }
        searchQuery += item + ",";
      });
      searchQuery = searchQuery.slice(0, -1);
      resolvePromise(
        filterDrinkByMultiIngridient(searchQuery),
        resultsPromiseState,
        notifyACB
      );
    } else {
      resolvePromise(searchDrinkByName(""), resultsPromiseState, notifyACB);
    }
  }

  React.useEffect(() => {
    resolvePromise(searchDrinkByName(""), resultsPromiseState, notifyACB);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spacer size={2} />
      <HeadingFour style={{ textAlign: "center" }}>Advanced Search</HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        Select your favorite ingredients and find your perfect cocktail!
      </METAText>
      <Spacer size={3} />
      <DropDownView
        updateParamsFunc={updateSearchParamArray}
        newSearchFunc={checkboxNewPromise}
      />
      <Spacer size={4} />
      {promiseNoData(resultsPromiseState) || (
        <SearchResultsView
          drinks={resultsPromiseState.data.drinks}
          title="Results"
        />
      )}
      <Spacer size={5} />
    </div>
  );
}
