import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import isNumber from '../logic/calculate';

const Calculator = () => {
  const [cal, setCal] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleNum = (e) => {
    setCal((cal) => calculate(cal, e.target.value));
  };

  const { total, operation, next } = cal;
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

          <button type="button" value="AC" onClick={handleNum} className="calBtn">AC</button>
          <button type="button" value="+/-" onClick={handleNum} className="calBtn">+/-</button>
          <button type="button" value="%" onClick={handleNum} className="calBtn">%</button>
          <button type="button" value="÷" onClick={handleNum} className="calBtn operationBtn">/</button>
        </div>

        <div className="Columns">
          <button type="button" value={7} onClick={handleNum} className="calBtn">7</button>
          <button type="button" value={8} onClick={handleNum} className="calBtn">8</button>
          <button type="button" value={9} onClick={handleNum} className="calBtn">9</button>
          <button type="button" value="x" onClick={handleNum} className="calBtn operationBtn">x</button>
        </div>

        <div className="Columns">
          <button type="button" value={4} onClick={handleNum} className="calBtn">4</button>
          <button type="button" value={5} onClick={handleNum} className="calBtn">5</button>
          <button type="button" value={6} onClick={handleNum} className="calBtn">6</button>
          <button type="button" value="-" onClick={handleNum} className="calBtn operationBtn">-</button>
        </div>

        <div className="Columns">
          <button type="button" value={1} onClick={handleNum} className="calBtn">1</button>
          <button type="button" value={2} onClick={handleNum} className="calBtn">2</button>
          <button type="button" value={3} onClick={handleNum} className="calBtn">3</button>
          <button type="button" value="+" onClick={handleNum} className="calBtn operationBtn">+</button>
        </div>

        <div className="Columns">
          <button type="button" value={0} onClick={handleNum} className="calBtn zero">0</button>
          <button type="button" value="." onClick={handleNum} className="calBtn">.</button>
          <button type="button" value="=" onClick={handleNum} className="calBtn operationBtn">=</button>
        </div>

      </div>

    </div>

  );
};

export default Calculator;
