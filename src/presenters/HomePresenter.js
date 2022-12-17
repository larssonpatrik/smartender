import React from "react";
import resolvePromise from "../resolvePromise";
import {
  filterDrinkByIngridient,
  getLatestDrinks,
  getPopularDrinks,
  searchDrinkByName,
} from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { SearchForm } from "../components/SerchForm";
import Spacer from "../components/Spacer";
import DrinkSlideShowView from "../views/DrinkSlideshowView.js";
import CategoryCard from "../components/CategoryCard";
import { HeadingFour } from "../components/Headings";
import { METAText } from "../components/TextBodies";
import { getDrinkById } from "../DrinkSource";


export default function HomePresenter(props) {
  const [testSearchPromiseState] = React.useState({});
  const [popularDrinksPromiseState] = React.useState({});
  const [latestDrinksPromiseState] = React.useState({});
  const [devPicksPromiseState] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState({});
  const devPicks = ['178338', '178354', '11416', '11224', '11004', '11009', '13940', '13625', '15395', '16405'];

  const [, reRender] = React.useState();

  function notifyACB() {
    reRender({});
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
  }

  function getDevelopersPicks() {  
    return Promise.all(
      devPicks.map((id) => {
        return getDrinkById(id).then((obj) => obj.drinks[0]);
    })
    );
  }
  
  React.useEffect(() => {
    resolvePromise(getPopularDrinks(), popularDrinksPromiseState, notifyACB);

    resolvePromise(getLatestDrinks(), latestDrinksPromiseState, notifyACB);

    resolvePromise(getDevelopersPicks(), devPicksPromiseState, notifyACB);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SearchForm onInputChange={userInputChange} onSearch={onSearch} />
      <Spacer size={6} />
      <HeadingFour style={{ textAlign: "center" }}>
        Welcome to Smartender!
      </HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        An extensive collection of drink recipes online. Here you will find
        recipes for simple and tasty drinks and cocktails.
      </METAText>
      <Spacer size={6} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CategoryCard
          name="Rum"
          img="https://studyfinds.org/wp-content/uploads/2022/11/AdobeStock_375404788_Editorial_Use_Only-scaled.jpeg"
        />
        <Spacer size={6} />
        <CategoryCard
          name="Gin"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d3861425776209.5634a914d94d5.jpg"
        />
        <Spacer size={6} />

        <CategoryCard
          name="Vodka"
          img="https://megaricos.com/wp-content/uploads/2021/04/shutterstock_653237029.jpg"
        />
      </div>
      <Spacer size={6} />
      {promiseNoData(popularDrinksPromiseState) || (
        <DrinkSlideShowView
          title="Popular Drinks"
          data={popularDrinksPromiseState.data}
        />
      )}

      <Spacer size={3} />
      {promiseNoData(latestDrinksPromiseState) || (
        <DrinkSlideShowView
          title="New kids on the block"
          data={latestDrinksPromiseState.data}
        />
      )}
      <Spacer size={3} />
      { promiseNoData(devPicksPromiseState) || (
        console.log('data',devPicksPromiseState.data),
        <DrinkSlideShowView
          title="Developers picks"
          data={{drinks: devPicksPromiseState.data}}
        />
      )}
    </div>
  );
}
