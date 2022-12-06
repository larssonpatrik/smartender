import "../components/css/Headings.css";
export function HeadingOne(props) {
  return (
    <h1 className="HeadingOne" style={props.style}>
      {props.children}
    </h1>
  );
}

export function HeadingTwo(props) {
  return (
    <h2 className="HeadingTwo" style={props.style}>
      {props.children}
    </h2>
  );
}

export function HeadingThree(props) {
  return (
    <h3 className="HeadingThree" style={props.style}>
      {props.children}
    </h3>
  );
}

export function HeadingFour(props) {
  return (
    <h4 className="HeadingFour" style={props.style}>
      {props.children}
    </h4>
  );
}
