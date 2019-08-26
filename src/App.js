import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({counter:0});
  const add1ToCounter = () => {
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue});
  }

  return (
    <div>
      <p>You clicked {state.counter} times</p>
      <button onClick={add1ToCounter}>
        Click me
      </button>
    </div>
  );
}

export default App;
