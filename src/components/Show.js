import React from "react";

export default function Show(props) {
  if (props.active) {
    return props.children;
  }
}
