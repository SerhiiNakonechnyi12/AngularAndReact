import React from "react";

export default function RandomNumber(props) {
  let min = props.min;
  let max = props.max;
  let qwe;
  let rnd = Math.floor(Math.random() * (max - min + 1) + min);
  return (<h3>Случайное число: {rnd}</h3>);
}
