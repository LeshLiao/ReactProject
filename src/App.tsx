import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <div className="App">
      <div>123</div>
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
        <FirstPage/>


    </div>
  );
}

export default App;
