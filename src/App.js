import React from 'react';
// import './App.css';
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Header></Header>
      <HelloWorld name="Sammy"></HelloWorld>
      <Footer></Footer>
    </div>
  );
}

export default App;
