import "../components/css/Forms.css";
import Spacer from "./Spacer";
import { PrimaryButton } from "./Buttons";

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
      <Spacer size={1} />
      <PrimaryButton action={onUserClickOnButtonACB}>Let's go!</PrimaryButton>
    </div>
  );
}

export function AlterativeForm(props) {
  return (
    <div className="AlterativeForm">
      <select className="AlterativeFormSelect">
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
        <option value="Tequila">Tequila</option>
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
