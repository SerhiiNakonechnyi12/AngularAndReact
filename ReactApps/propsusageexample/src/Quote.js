import React from "react";

export default function Quote(props) {
  return (
    <>
      <blockquote>{props.text}</blockquote>
      <div>{props.author}</div>
    </>
  );
}
