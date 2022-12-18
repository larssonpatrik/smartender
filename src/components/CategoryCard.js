import { HeadingFour } from "./Headings";
import "./css/CategoryCard.css";
import { useNavigate } from "react-router-dom";

export default function CategoryCard(props) {
  const navigate = useNavigate();

  function onUserClickOnCardACB() {
    navigate("/categoryResult/" + props.name);
  }

  return (
    <div
      className="categoryContainer"
      style={{ backgroundImage: `url(${props.img})` }}
      onClick={onUserClickOnCardACB}
    >
      <HeadingFour className="text">{props.name}</HeadingFour>
    </div>
  );
}
