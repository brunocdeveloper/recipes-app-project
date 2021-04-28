import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Login from './components/Login';
import FoodDetails from './components/FoodDetails';
import DrinkDetails from './components/DrinkDetails';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas/:id" component={ FoodDetails } />
        <Route path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/comidas" component={ Food } />
        <Route path="/bebidas" component={ Drinks } />
      </Switch>
    </>
  );
}

export default App;
