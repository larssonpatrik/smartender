export default function DrinkCollectionView(props) {
  function render_drinkCB(drink, i) {
    return (
      //Change img to img tag with drink prop "img"
      <div key={i}>
        <div> {drink.image}</div>
        <div>{drink.name}</div>
      </div>
    );
  }

  return <div>{props.drinks.map(render_drinkCB)}</div>;
}
