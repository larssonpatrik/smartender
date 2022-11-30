import { HeadingThree } from "./Headings";
import "./css/DrinkCard.css";
export function DrinkCard(props) {
  return (
    <div className="container">
      <img className="img" src={props.img} alt="drink" />
      <HeadingThree>{props.name}</HeadingThree>
    </div>
  );
}
