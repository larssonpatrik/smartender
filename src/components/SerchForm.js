import "../components/css/Forms.css";
import Spacer from "./Spacer";
import { PrimaryButton } from "./Buttons";
import { useNavigate } from "react-router-dom";
import React from "react";

export function SearchForm(props) {
  const [input, setInput] = React.useState("");

  const navigate = useNavigate();

  function onInputChangeACB(event) {
    setInput(event.target.value);
    props.onInputChange(input);
  }

  function onUserClickOnButtonACB(event) {
    navigate("searchResult/" + input);
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
