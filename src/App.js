import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Food } />
      <Route path="/bebidas" component={ Drinks } />
    </Switch>
  );
}

export default App;
