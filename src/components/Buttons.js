import './css/Button.css'

export function PrimaryButton(props) {
  return <button className="PrimaryButton">{props.children}</button>;
}

export function SecondaryButton(props) {
  return <button className="SecondaryButton">{props.children}</button>;
}
