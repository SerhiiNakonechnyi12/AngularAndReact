import React from "react";
import Writer from "./Writer";
export default function WriterList(props) {
  let writers = props.data;
  return (
    <>
      {writers.map((writer) => (
        <Writer {...writer}></Writer>
      ))}
      {/* <Writer {...writers[0]}></Writer>
        <Writer {...writers[1]}></Writer>
        <Writer {...writers[2]}></Writer> */}
    </>
  );
}
