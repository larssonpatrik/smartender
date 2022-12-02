import { HeadingFour } from "./Headings";
import "./css/CategoryCard.css";

export default function CategoryCard(props) {
  function onUserClickOnCardACB() {
    props.onClickCard(props.name);
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
