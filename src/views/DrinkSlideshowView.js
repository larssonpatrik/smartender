import DrinkCard from "../components/DrinkCard";
import "./css/DrinkSlideshowView.css";
import Spacer from "../components/Spacer";
import { HeadingTwo } from "../components/Headings";

export default function DrinkSlideshowView(props) {
  let drinkArray = props.data.drinks;
  
  function renderDrinkCardCB(drink, i) {
    return (
      <div className="DrinkCardItem" key={i}>
        <DrinkCard
          name={drink.strDrink}
          img={drink.strDrinkThumb}
          id={drink.idDrink}
          navigation={"drinkDetails"}
        />
        <Spacer size={2} />
      </div>
    );
  }

  return (
    <div className="SlideshowContainer">
      <div style={{ display: "flex"}}>
        <Spacer size={2} />
        <HeadingTwo>{props.title}</HeadingTwo>
      </div>
      <Spacer size={0} />
      <div className="DrinkCardContainer">
        {drinkArray.map(renderDrinkCardCB)};
      </div>
    </div>
  );
}
