import { HeadingTwo } from "./components/Headings";

export default function promiseNoData(promiseState) {
  if (promiseState) {
    if (promiseState.promise) {
      if (promiseState.data) {
        if (promiseState.data?.drinks === "None Found")
          return <HeadingTwo>No matches found! Please try again!</HeadingTwo>;
        return false;
      } else if (promiseState.error) {
        return <div>{promiseState.error.toString()}</div>;
      } else {
        return (
          <img
            src="https://media0.giphy.com/media/cLYP8GMcNMWL3kaJ00/giphy.gif?cid=790b7611305c025451ee0d4517743606a7098edd22000ffb&rid=giphy.gif&ct=s"
            width={500}
          />
        );
      }
    } else if (!promiseState.promise) {
      return <div>no data</div>;
    }
  } else {
    return <div>no data</div>;
  }
}
