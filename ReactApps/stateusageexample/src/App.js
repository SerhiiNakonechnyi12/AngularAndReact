import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Counter";
import { CounterBtn, Display } from "./Display";
import HookBtn from "./hookBtn";

export class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0 };
  }
  render() {
    const clickHandler = incValue => {
      this.setState({ currentValue: this.state.currentValue + incValue })
    };
    return (
      <div className="App">
        <Button startValue={1} incValue={2}></Button>
        <hr/>
        <CounterBtn btnValue={2} onClickAct={clickHandler}></CounterBtn>
        <Display dispValue={this.state.currentValue}></Display>
        <hr/>
        <HookBtn></HookBtn>
        {/* <header className="App-header">
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
      </header> */}
      </div>
    );
  }
}

export default App;
