import "./css/Button.css";
import { BiChevronDown } from "react-icons/bi";

export function PrimaryButton(props) {
  return (
    <button
      onClick={props.action}
      className={"PrimaryButton " + props.className}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

export function SecondaryButton(props) {
  return (
    <button onClick={props.action} className="SecondaryButton" style={props.style}>
      {props.children}
    </button>
  );
}

export function TirtiaryButton(props) {
  return (
    <button onClick={props.action} className="TirtiaryButton" style={props.style}>
      {props.children} <BiChevronDown />
    </button>
  );
}
