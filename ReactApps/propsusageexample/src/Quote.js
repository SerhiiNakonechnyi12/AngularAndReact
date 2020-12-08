import React from "react";

export default function Quote(props) {
  return (
    <>
      <blockquote>{props.text}</blockquote>
      <div>{props.author}</div>
    </>
  );
}

// Quote.defaultProps = {text: "Hello, world", author: "Serhii N"}
Quote.defaultProps = {};
Quote.defaultProps["text"] = "Hello, world";
Quote.defaultProps["author"] = "Serhii N";