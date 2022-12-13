import { HeadingThree } from "./Headings";
import "./css/DrinkCard.css";
import Spacer from "./Spacer";
import { useNavigate } from "react-router-dom";

export default function DrinkCard(props) {
  const navigate = useNavigate();

  function onUserClickOnCardACB() {
    navigate("/" + props.navigation + "/" + props.id);
  }

  return (
    <div className="container" onClick={onUserClickOnCardACB}>
      <img className="img" src={props.img} alt="drink" />
      <Spacer size={0} />
      <HeadingThree>{props.name}</HeadingThree>
    </div>
  );
}
