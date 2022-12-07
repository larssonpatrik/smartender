import "./css/Button.css";
import { BiChevronDown } from "react-icons/bi";

export function PrimaryButton(props) {
  return (
    <button onClick={props.action} className="PrimaryButton">
      {props.children}
    </button>
  );
}

export function SecondaryButton(props) {
  return <button className="SecondaryButton">{props.children}</button>;
}

export function TirtiaryButton(props) {
  return (
    <button onClick={props.action} className="TirtiaryButton">
      {props.children} <BiChevronDown />
    </button>
  );
}
