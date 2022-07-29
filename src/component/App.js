import React from "react";
import Display from "./Display"
import ButtonPannel from "./ButtonPanel"
import './App.css';
import calculate from "./logic/caculate";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
        <div className="container">
          <div className="component-app">
            <Display value={this.state.next || this.state.total || "0"}></Display>
            <ButtonPannel clickHandler={this.handleClick}></ButtonPannel>
          </div>
        </div>
      );
  }
}


