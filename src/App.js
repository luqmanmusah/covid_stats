import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Details from './components/details';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </div>
  );
}

export default App;
