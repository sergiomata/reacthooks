import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({counter:0});
  const add1ToCounter = () => {
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue});
  }

  /*  same result as componentDidMount() ,
   the useEffect method only render after certain variables used in second parameter
  */
  useEffect(() => {
    console.log('I will run only once');
  }, []);

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
