import React from 'react';
// import './App.css';
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// react has two packages - dom for web app, native for app

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>


        <div className="p-3">
          <Switch>
            {/* the way we display different stuff */}
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/about" >
              <About></About>
            </Route>
            {/* : is a wildcard */}
            <Route path="/products/:id" >
              <Product></Product>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
