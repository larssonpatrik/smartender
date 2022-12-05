import './css/Button.css'

export function PrimaryButton(props) {
  return <button onClick={props.action} className="PrimaryButton">{props.children}</button>;
}

export function SecondaryButton(props) {
  return <button className="SecondaryButton">{props.children}</button>;
}
