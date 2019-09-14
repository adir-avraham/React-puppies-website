import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
import ImagesList from './components/imageslist/index';
import Footer from './components/footer/index';




const App: React.FC = () => {
  return (
    <div className="App">
      <Header style={{ color: "#61DAFB", border: "2px solid grey", padding: "40px" }} title="Welcome to my best puppies website ever!" />
      <header className="App-header">
        <ImagesList height="175" width="200" style={{ opacity: "0.5" }} />
      </header>
      <Footer style={{ color: "red" }} title="All Rights Reserved (c)" />
    </div>
  );
}

export default App;
