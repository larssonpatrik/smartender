import DrinkCard from "../components/DrinkCard";
import "./DrinkSlideshowView.css";
import Spacer from "../components/Spacer";
import { HeadingTwo } from "../components/Headings";

export default function DrinkSlideshowView(props) {
  let drinkArray = props.data.drinks;

  function renderDrinkCard(drink, i) {
    function onUserClickOnCard() {
      props.clickOnCard(drink.strDrink);
    }

    return (
      <div className="DrinkCardItem" key={i} onClick={onUserClickOnCard}>
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={2} />
      </div>
    );
  }

  return (
    <div className="SlideshowContainer">
      <HeadingTwo>{props.title}</HeadingTwo>
      <Spacer size={0} />
      <div className="DrinkCardContainer">
        {drinkArray.map(renderDrinkCard)};
      </div>
    </div>
  );
}
