import "./css/TextBodies.css";

export function Paragraph(props) {
  return <p className="Paragraph">{props.children}</p>;
}

export function METAText(props) {
  return (
    <p className="METAText" style={props.style}>
      {props.children}
    </p>
  );
}
