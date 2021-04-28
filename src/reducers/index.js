import { combineReducers } from 'redux';
import FoodAndDrinkReducer from './FoodAndDrinkReducer';
import FoodAndDrinkDetailsReducer from './FoodAndDrinkDetailsReducer';

const rootReducer = combineReducers({
  FoodAndDrinkReducer,
  FoodAndDrinkDetailsReducer,
});

export default rootReducer;
