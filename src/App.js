import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Login from './components/Login';
import FoodDetails from './components/FoodDetails';
import DrinkDetails from './components/DrinkDetails';
import Profile from './components/Profile';
import InProgress from './Pages/InProgress';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas/:id/in-progress" component={ InProgress } />
      <Route path="/bebidas/:id/in-progress" component={ InProgress } />
      <Route path="/comidas/:id" component={ FoodDetails } />
      <Route path="/bebidas/:id" component={ DrinkDetails } />
      <Route path="/comidas" component={ Food } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/perfil" component={ Profile } />
    </Switch>
  );
}

export default App;
