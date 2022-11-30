import drinkCollectionView from "../views/drinkCollectionView";
let props = {
  drinks: [
    { name: "drink 1", image: "image 1" },
    { name: "drink 2", image: "image 2" },
  ],
};
export default function drinkCollectionPresenter(props) {
  return (
    <div>
      <drinkCollectionView />
    </div>
  );
}
