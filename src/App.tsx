import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';

import Footer from './components/footer/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Welcome to my best puppies website ever!"/>
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
          <Footer title="All Rights Reserved (c)"/>
    </div>
  );
}

export default App;
