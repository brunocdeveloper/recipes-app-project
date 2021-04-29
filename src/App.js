import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import FoodDetails from './Pages/FoodDetails';
import DrinkDetails from './Pages/DrinkDetails';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import ExploreFoods from './Pages/ExploreFoods';
import ExploreDrinks from './Pages/ExploreDrinks';
import ExploreFoodIngredient from './Pages/ExploreFoodIngredients';
import ExploreDrinkIngredients from './Pages/ExploreDrinkIngredients';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas/:id" component={ FoodDetails } />
      <Route exact path="/bebidas/:id" component={ DrinkDetails } />
      <Route exact path="/explorar" component={ Explore } />
      <Route path="/comidas" component={ Food } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/perfil" component={ Profile } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodIngredient }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinkIngredients }
      />
    </Switch>
  );
}

export default App;
