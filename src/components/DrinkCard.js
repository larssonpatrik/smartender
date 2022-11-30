export function DrinkCard(props) {
  return (
    //Change img to img tag with drink prop "img"
    <div>
      <img src={props.img} />
      <h1>{props.name}</h1>
    </div>
  );
}
