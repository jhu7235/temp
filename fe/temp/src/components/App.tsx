import React from 'react';
import useGetConfigurations from '../hooks/getQueenConfig';
import logo from '../logo.svg';
import './App.css';

function App() {

  const n = 5;
  const configurations = useGetConfigurations(n)
  console.log(`configurations(${n})`,configurations)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
