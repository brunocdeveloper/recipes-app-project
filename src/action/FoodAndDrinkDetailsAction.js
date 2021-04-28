export const FOODDETAILS_ACTION = 'FOODDETAILS_ACTION';

const foodDetailsAction = (foodDetails) => ({
  type: FOODDETAILS_ACTION, foodDetails });

export const foodDetailsThunk = (id) => async (dispatch) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endpoint);
  const result = await response.json();
  return dispatch(foodDetailsAction(result.meals[0]));
};

export const DRINKDETAILS_ACTION = 'DRINKDETAILS_ACTION';

const drinkDetailsAction = (drinkDetails) => ({
  type: DRINKDETAILS_ACTION, drinkDetails });

export const drinkDetailsThunk = (id) => async (dispatch) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endpoint);
  const result = await response.json();
  return dispatch(drinkDetailsAction(result.drinks[0]));
};
