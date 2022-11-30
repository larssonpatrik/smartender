import DrinkCard from "../components/DrinkCard";
import "./DrinkSlideshowView.css";
import Spacer from "../components/Spacer";
import { HeadingOne } from "../components/Headings";

export default function DrinkSlideshowView(props) {
  let drinkArray = props.data.drinks;
  console.log(drinkArray);

  function renderDrinkCard(drink, i) {
    return (
      <div className="DrinkCardItem" key={i}>
        <DrinkCard name={drink.strDrink} img={drink.strDrinkThumb} />
        <Spacer size={2} />
      </div>
    );
  }
  return (
    <div className="SlideshowContainer">
      <Spacer size={5} />
      <HeadingOne>{props.title}</HeadingOne>
      <Spacer size={0} />
      <div className="DrinkCardContainer">
        {drinkArray.map(renderDrinkCard)};
      </div>
    </div>
  );
}
