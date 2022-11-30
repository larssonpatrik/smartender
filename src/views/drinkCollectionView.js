let props = {
  drinks: [
    { name: "drink 1", image: "image 1" },
    { name: "drink 2", image: "image 2" },
  ],
};
console.log(props);
export default function drinkCollectionView(props) {
  function render_drinkCB(drink) {
    return (
      <div>
        <div> {drink.image}</div>
        <div>{drink.name}</div>
      </div>
    );
  }

  return <div>{props.map(render_drinkCB)}</div>;
}
