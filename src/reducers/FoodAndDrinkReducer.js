import { FOOD_ACTION, DRINKS_ACTION } from '../action/FoodAndDrinkAction';

const INITIAL_STATE = {
  food: [],
  drinks: [],
};

function FoodAndDrinkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FOOD_ACTION:
    return { ...state, food: action.food };
  case DRINKS_ACTION:
    return { ...state, drinks: action.drinks };
  default:
    return state;
  }
}

export default FoodAndDrinkReducer;
