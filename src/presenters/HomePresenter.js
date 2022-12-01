import { SearchForm } from "../components/Forms";
import Spacer from "../components/Spacer";
import Header from "../views/headerView";
import SearchResultsPresenter from "./SearchResultsPresenter";

export default function HomePresenter(props) {
  return (
    <div>
      <Header />
      <SearchForm />
    </div>
  );
}
