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
  const ALCOHOL = [
    "Vodka",
    "Absolut Kurant",
    "Absolut Vodka",
    "Raspberry Vodka",
    "Vanilla Vodka",
    "Absolut Citron",
    "Rum",
    "Añejo Rum",
    "Dark Rum",
    "Light Rum",
    "Malibu Rum",
    "White Rum",
    "151 proof rum",
    "Gin",
    "Sloe Gin",
    "Blended Whiskey",
    "Irish Whiskey",
    "Rye Whiskey",
    "Tennessee whiskey",
    "Scotch",
    "Tequila",
    "Vermouth",
    "Dry Vermouth",
    "Sweet Vermouth",
  ];

  const FLAVOURS = [
    "Lemon Peel",
    "Lemon Juice",
    "Lemonade",
    "lemon",
    "Lime Juice",
    "Lime",
    "Chocolate",
    "Chocolate Syrup",
    "Mint",
    "Coffee",
    "Strawberries",
    "Mango",
    "Banana",
  ];

  const MIXERS = [
    "Club Soda",
    "Coca-cola",
    "Grape soda",
    "Lemon-lime soda",
    "Soda Water",
    "Sprite",
    "Tonic Water",
    "Apple Juice",
    "Cranberry Juice",
    "Grapefruit Juice",
    "Orange Juice",
    "Passion fruit juice",
    "Pineapple Juice",
    "Tomato Juice",
    "Grenadine",
  ];

  const [resultsPromiseState] = React.useState({});
  const [searchParamArray, setSearchParamArray] = React.useState([]);
  const [alcoholActive, setAlcoholActive] = React.useState(false);
  const [mixerActive, setMixerActive] = React.useState(false);
  const [flavourActive, setFlavourActive] = React.useState(false);
  const [isCheckedArrayAlcohol, setIsCheckedArrayAlcohol] = React.useState(
    new Array(ALCOHOL.length).fill(false)
  );
  const [isCheckedArrayMixer, setIsCheckedArrayMixer] = React.useState(
    new Array(MIXERS.length).fill(false)
  );
  const [isCheckedArrayFlavour, setIsCheckedArrayFlavour] = React.useState(
    new Array(FLAVOURS.length).fill(false)
  );
  const [, reRender] = React.useState();

  function setAlcoholActiveACB() {
    setAlcoholActive(!alcoholActive);
    setMixerActive(false);
    setFlavourActive(false);
  }

  function setMixerActiveACB() {
    setAlcoholActive(false);
    setMixerActive(!mixerActive);
    setFlavourActive(false);
  }

  function setFlavourActiveACB() {
    setAlcoholActive(false);
    setMixerActive(false);
    setFlavourActive(!flavourActive);
  }

  function clearChoicesACB() {
    setIsCheckedArrayAlcohol(new Array(ALCOHOL.length).fill(false));
    setIsCheckedArrayMixer(new Array(MIXERS.length).fill(false));
    setIsCheckedArrayFlavour(new Array(FLAVOURS.length).fill(false));
    setSearchParamArray([]);
    resolvePromise(searchDrinkByName(""), resultsPromiseState, notifyACB);
  }

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
        activeState={{
          alcohol: [alcoholActive, setAlcoholActiveACB],
          mixer: [mixerActive, setMixerActiveACB],
          flavour: [flavourActive, setFlavourActiveACB],
        }}
        checkedArrayState={{
          alcohol: [isCheckedArrayAlcohol, setIsCheckedArrayAlcohol],
          mixer: [isCheckedArrayMixer, setIsCheckedArrayMixer],
          flavour: [isCheckedArrayFlavour, setIsCheckedArrayFlavour],
        }}
        data={[ALCOHOL, MIXERS, FLAVOURS]}
        clearChoices={clearChoicesACB}
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
