import { HeadingThree } from "./Headings";
import "./css/DrinkCard.css";
import Spacer from "./Spacer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DrinkCard(props) {
  return (
    <div className="container">
      <img className="img" src={props.img} alt="drink" />
      <Spacer size={0} />
      <HeadingThree>{props.name}</HeadingThree>
    </div>
  );
}
