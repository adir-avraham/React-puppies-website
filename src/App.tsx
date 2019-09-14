import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
import Images from './components/images/index';
import Footer from './components/footer/index';




const App: React.FC = () => {
  return (
    <div className="App">
      <Header style={{color: "#61DAFB", border: "2px solid grey", padding: "40px"}} title="Welcome to my best puppies website ever!"/>
      <header className="App-header">
      <Images/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
          <Footer style={{color: "red"}} title="All Rights Reserved (c)"/>
    </div>
  );
}

export default App;
