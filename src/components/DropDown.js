import React from "react";

export default function DropDown(props) {
  if (props.data) return props.data.map((ing) => <div>{ing}</div>);
}
