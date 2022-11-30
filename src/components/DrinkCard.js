import "./css/DrinkCard.css";

export function DrinkCard(props) {
  return (
    //Change img to img tag with drink prop "img"

    <img className="img" src={props.img} alt="drink" />
  );
}
