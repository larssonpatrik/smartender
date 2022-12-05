import React from "react";
import resolvePromise from "../resolvePromise";
import { filterDrinkByIngridient, searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";

import { SearchForm } from "../components/Forms";
import Spacer from "../components/Spacer";
import Header from "../views/headerView";
import DrinkSlideShowView from "../views/DrinkSlideshowView.js";
import CategoryCard from "../components/CategoryCard";
import BarPhoto from "../images/BarPhoto.png";
import { HeadingOne, HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";

export default function HomePresenter(props) {
  const [testSearchPromiseState] = React.useState({});
  const [CategoryCardPromiseState] = React.useState({});

  const [popularDrinksPromiseState] = React.useState({});
  const [ginDrinksPromiseState] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState({});

  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
  }

  function clickOnDrinkCardACB(nameOfDrink) {
    alert(nameOfDrink);
  }

  function clickOnCategoryCardACB(ingredient) {
    resolvePromise(
      filterDrinkByIngridient(ingredient),
      CategoryCardPromiseState,
      notifyACB
    );
    console.log(CategoryCardPromiseState);
  }

  function userInputChange(query) {
    setSearchQuery(query);
  }

  function onSearch() {
    resolvePromise(
      searchDrinkByName(searchQuery),
      testSearchPromiseState,
      notifyACB
    );
    console.log(testSearchPromiseState);
  }

  React.useEffect(() => {
    resolvePromise(
      searchDrinkByName("vodka"),
      popularDrinksPromiseState,
      notifyACB
    );

    resolvePromise(searchDrinkByName("Gin"), ginDrinksPromiseState, notifyACB);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Spacer size={3} />
      <Header />
      <Spacer size={3} />
      <SearchForm onInputChange={userInputChange} onSearch={onSearch} />
      <Spacer size={6} />
      <HeadingFour style={{ textAlign: "center" }}>
        Welcome to Smartender!
      </HeadingFour>

      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        An extensive collection of drink recipes online. Here you will find
        recipes for simple and good drinks and cocktails.
      </METAText>
      <Spacer size={6} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CategoryCard
          name="Rum"
          img="https://studyfinds.org/wp-content/uploads/2022/11/AdobeStock_375404788_Editorial_Use_Only-scaled.jpeg"
          onClickCard={clickOnCategoryCardACB}
        />
        <Spacer size={6} />
        <CategoryCard
          name="Gin"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d3861425776209.5634a914d94d5.jpg"
          onClickCard={clickOnCategoryCardACB}
        />
        <Spacer size={6} />

        <CategoryCard
          name="Vodka"
          img="https://megaricos.com/wp-content/uploads/2021/04/shutterstock_653237029.jpg"
          onClickCard={clickOnCategoryCardACB}
        />
      </div>
      <Spacer size={3} />
      <CategoryCard
        name="Gin"
        img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d3861425776209.5634a914d94d5.jpg"
      />
      <CategoryCard
        name="Vodka"
        img="https://megaricos.com/wp-content/uploads/2021/04/shutterstock_653237029.jpg"
      />
      <CategoryCard
        name="Rum"
        img="http://consumatorium.com/wp-content/uploads/2015/08/Tiki-Drinks-2015-08-04-45_028a019e0_6945.jpg"
      />
      <Spacer size={3} />
      {promiseNoData(popularDrinksPromiseState) || (
        <DrinkSlideShowView
          title="Popular Drinks"
          data={popularDrinksPromiseState.data}
          clickOnCard={clickOnDrinkCardACB}
        />
      )}
      <Spacer size={3} />
      {promiseNoData(ginDrinksPromiseState) || (
        <DrinkSlideShowView
          title="Gin Drinks"
          data={ginDrinksPromiseState.data}
          clickOnCard={clickOnDrinkCardACB}
        />
      )}
    </div>
  );
}
