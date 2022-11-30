import "./css/DrinkCard.css";
export function DrinkCard(props) {
  return (
    <div>
      <img className="img" src={props.img} alt="drink" />
    </div>
  );
}
