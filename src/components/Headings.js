import "../components/css/Headings.css";
export function HeadingOne(props) {
  return <h1 className="HeadingOne">{props.children}</h1>;
}

export function HeadingTwo(props) {
  return <h2 className="HeadingTwo">{props.children}</h2>;
}

export function HeadingThree(props) {
  return <h3 className="HeadingThree">{props.children}</h3>;
}
