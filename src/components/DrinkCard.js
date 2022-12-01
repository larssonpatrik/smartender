import { HeadingThree } from "./Headings";
import "./css/DrinkCard.css";
export function DrinkCard(props) {
  function onClickACB() {
    console.log("clicky");
  }
  return (
    <div className="container">
      <img className="img" src={props.img} alt="drink" />
      <button onClick={onClickACB}>Check out the drink!</button>
      <HeadingThree>{props.name}</HeadingThree>
    </div>
  );
}
