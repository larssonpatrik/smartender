import DrinkCard from "../components/DrinkCard";
import "./DrinkSlideshowView.css";
import Spacer from "../components/Spacer";
import { HeadingTwo } from "../components/Headings";
import { useNavigate } from "react-router-dom";

export default function DrinkSlideshowView(props) {
  let drinkArray = props.data.drinks;

  const navigate = useNavigate();

  function renderDrinkCard(drink, i) {
    function onUserClickOnCard() {
      props.clickOnCard(navigate("/drinkDetails/" + drink.idDrink));
    }

    return (
      <div className="DrinkCardItem" key={i} onClick={onUserClickOnCard}>
        <DrinkCard
          name={drink.strDrink}
          img={drink.strDrinkThumb}
          id={drink.idDrink}
        />
        <Spacer size={2} />
      </div>
    );
  }

  return (
    <div className="SlideshowContainer">
      <div style={{ display: "flex" }}>
        <Spacer size={2} />
        <HeadingTwo>{props.title}</HeadingTwo>
      </div>
      <Spacer size={0} />
      <div className="DrinkCardContainer">
        {drinkArray.map(renderDrinkCard)};
      </div>
    </div>
  );
}
