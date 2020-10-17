import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from "./Searchbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar name={"input"}/>
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
      </header>
    </div>
  );
}

export default App;
