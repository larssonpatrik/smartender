import "../components/css/Forms.css";
import Spacer from "./Spacer";

export function SearchForm(props) {
  function onInputChangeACB(event) {
    props.onInputChange(event.target.value);
  }

  function onUserClickOnButtonACB() {
    props.onSearch();
  }

  return (
    <div className="SearchForm" onChange={onInputChangeACB}>
      <input
        className="SearchFormInput"
        placeholder="Search for your favorite drinks"
      />
      <Spacer size={0} />
      <button className="SearchFormButton" onClick={onUserClickOnButtonACB}>
        Lets go
      </button>
    </div>
  );
}

export function AlterativeForm(props) {
  return (
    <div className="AlterativeForm">
      <select className="AlterativeFormSelect">
        <option value="Alcohol">Alcohol</option>
        <option value="Alcohol">Alcohol</option>
        <option value="Alcohol">Alcohol</option>
        <option value="Alcohol">Alcohol</option>
      </select>

      <select>
        <option value="Sweet">Sweet</option>
        <option value="Sweet">Sweet</option>
        <option value="Sweet">Sweet</option>
      </select>

      <select>
        <option value="Sour">Sour</option>
        <option value="Sour">Sour</option>
        <option value="Sour">Sour</option>
        <option value="Sour">Sour</option>
      </select>

      <button> Go </button>
    </div>
  );
}

export function FormThree(props) {
  <form className="FormThree"></form>;
}
