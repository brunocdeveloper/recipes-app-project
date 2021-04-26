import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ Food } />
      <Route path="/bebidas" component={ Drinks } />
    </Switch>
  );
}

export default App;
