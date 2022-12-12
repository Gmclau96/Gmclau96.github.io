import React from "react";
import { RiStarSmileFill } from "react-icons/ri";

export default function Star(props) {
  return (
    <RiStarSmileFill color={props.selected ? "92b4a7" : "b0b0b0"} onClick={props.onSelect} size={30} />
  );
}
