import {
  FOODDETAILS_ACTION,
  DRINKDETAILS_ACTION } from '../action/FoodAndDrinkDetailsAction';

const INITIAL_STATE = {
  foodDetails: {},
  drinkDetails: {},
};

function FoodAndDrinkDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FOODDETAILS_ACTION:
    return { ...state, foodDetails: action.foodDetails };
  case DRINKDETAILS_ACTION:
    return { ...state, drinkDetails: action.drinkDetails };
  default:
    return state;
  }
}

export default FoodAndDrinkDetailsReducer;
