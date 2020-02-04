import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  const [result, setResult] = useState(2);

  return (
    <div className="App">
      <header className="App-header">
      <div>
          <input type={Number} id="firstValue" 
          onChange={e =>
          {
            setX(Number(e.target.value));
            evaluate();
          }}>
          </input>
          <select id="operation">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <input type={Number} id="secondValue" onChange={e =>
          {
            setY(Number(e.target.value));
            evaluate();
          }}>
          </input>
          <button onClick={evaluate} >=</button>
          <input type={Number} id="result" value ={result}>
          </input>
        </div>
      </header>
    </div>
  );

  function evaluate(){
    setResult(x+y);
  };
}

export default App;
