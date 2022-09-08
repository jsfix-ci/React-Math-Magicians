import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="cal">
        <div className="screen">
          <p>0</p>
        </div>

        <div className="numsOper">

          <div className="Columns">
            <button type="button" className="calBtn">AC</button>
            <button type="button" className="calBtn">+/-</button>
            <button type="button" className="calBtn">%</button>
            <button type="button" className="calBtn operationBtn">/</button>
          </div>

          <div className="Columns">
            <button type="button" className="calBtn">7</button>
            <button type="button" className="calBtn">8</button>
            <button type="button" className="calBtn">9</button>
            <button type="button" value="x" className="calBtn operationBtn">x</button>
          </div>

          <div className="Columns">
            <button type="button" className="calBtn">4</button>
            <button type="button" className="calBtn">5</button>
            <button type="button" className="calBtn">6</button>
            <button type="button" value="-" className="calBtn operationBtn">-</button>
          </div>

          <div className="Columns">
            <button type="button" className="calBtn">1</button>
            <button type="button" className="calBtn">2</button>
            <button type="button" className="calBtn">3</button>
            <button type="button" className="calBtn operationBtn">+</button>
          </div>

          <div className="Columns">
            <button type="button" value={0} className="calBtn zero">0</button>
            <button type="button" value="." className="calBtn">.</button>
            <button type="button" value="=" className="calBtn operationBtn">=</button>
          </div>

        </div>

      </div>

    );
  }
}
