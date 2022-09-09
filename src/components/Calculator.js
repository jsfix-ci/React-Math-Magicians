import React, { Component } from 'react';
import calculate from '../logic/calculate';
// import isNumber from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleNum = (e) => {
    this.setState((state) => calculate(state, e.target.value));
  }

  render() {
    const { total, operation, next } = this.state;
    return (

      <div className="cal">
        <div className="screen">
          <p>
            {total}
            {operation}
            {next}
          </p>
        </div>

        <div className="numsOper">

          <div className="Columns">

            <button type="button" value="AC" onClick={this.handleNum} className="calBtn">AC</button>
            <button type="button" value="+/-" onClick={this.handleNum} className="calBtn">+/-</button>
            <button type="button" value="%" onClick={this.handleNum} className="calBtn">%</button>
            <button type="button" value="÷" onClick={this.handleNum} className="calBtn operationBtn">/</button>
          </div>

          <div className="Columns">
            <button type="button" value={7} onClick={this.handleNum} className="calBtn">7</button>
            <button type="button" value={8} onClick={this.handleNum} className="calBtn">8</button>
            <button type="button" value={9} onClick={this.handleNum} className="calBtn">9</button>
            <button type="button" value="x" onClick={this.handleNum} className="calBtn operationBtn">x</button>
          </div>

          <div className="Columns">
            <button type="button" value={4} onClick={this.handleNum} className="calBtn">4</button>
            <button type="button" value={5} onClick={this.handleNum} className="calBtn">5</button>
            <button type="button" value={6} onClick={this.handleNum} className="calBtn">6</button>
            <button type="button" value="-" onClick={this.handleNum} className="calBtn operationBtn">-</button>
          </div>

          <div className="Columns">
            <button type="button" value={1} onClick={this.handleNum} className="calBtn">1</button>
            <button type="button" value={2} onClick={this.handleNum} className="calBtn">2</button>
            <button type="button" value={3} onClick={this.handleNum} className="calBtn">3</button>
            <button type="button" value="+" onClick={this.handleNum} className="calBtn operationBtn">+</button>
          </div>

          <div className="Columns">
            <button type="button" value={0} onClick={this.handleNum} className="calBtn zero">0</button>
            <button type="button" value="." onClick={this.handleNum} className="calBtn">.</button>
            <button type="button" value="=" onClick={this.handleNum} className="calBtn operationBtn">=</button>
          </div>

        </div>

      </div>

    );
  }
}
