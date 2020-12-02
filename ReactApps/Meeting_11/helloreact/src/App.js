import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    //<div className="App">
    /*
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }*/

    <>
      <h1>Hello React from VS Code</h1>
      <div>Текущее время: {new Date().toLocaleTimeString()}</div>
      <CurrentDate></CurrentDate>
      <button onClick={ClickHandler}>Push me!</button>
    </>
  );
}

export default App;

const style1 = {
  border: "1px dotted magenta",
  backgroundColor: "skyblue",
};

function CurrentDate() {
  return <div>Сегодня: {new Date().toLocaleTimeString()}</div>;
}

function ClickHandler() {
  alert("Button was clicked!");
}
