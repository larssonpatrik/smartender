import { HeadingThree } from "./Headings";
import "./css/DrinkCard.css";
import Spacer from "./Spacer";

export default function DrinkCard(props) {
  return (
    <div className="container">
      <img className="img" src={props.img} alt="drink" />
      <Spacer size={0} />
      <HeadingThree>{props.name}</HeadingThree>
    </div>
  );
}
