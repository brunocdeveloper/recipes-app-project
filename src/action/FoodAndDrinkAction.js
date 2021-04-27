const magicNumber = 12;

export const FOOD_ACTION = 'FOOD_ACTION';

export const getFoodAction = (food) => ({ type: FOOD_ACTION, food });

export const foodThunkAction = () => async (dispatch) => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(endpoint);
  const result = await response.json();
  return dispatch(getFoodAction(result.meals.slice(0, magicNumber)));
};

export const DRINKS_ACTION = 'DRINKS_ACTION';

export const getDrinksAction = (drinks) => ({ type: DRINKS_ACTION, drinks });

export const drinksThunkAction = () => async (dispatch) => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(endpoint);
  const result = await response.json();
  return dispatch(getDrinksAction(result.drinks.slice(0, magicNumber)));
};
