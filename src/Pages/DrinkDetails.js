import '../styles/Details.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { drinkDetailsThunk } from '../action/FoodAndDrinkDetailsAction';
import { foodThunkAction } from '../action/FoodAndDrinkAction';
import CarouselDrinkDetails from '../components/CarouselDrinkDetails';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { doneRecipesAction, inProgressRecipesAction } from '../action/ButtonAction';

class DrinkDetails extends React.Component {
  constructor(props) {
    super(props);

    this.ingredientName = this.ingredientName.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } },
      setDrinksDetails,
      setFood,
      getFoodBoolean,
      getFoodName,
      setDone,
      setProgress } = this.props;

    setDrinksDetails(id);
    setFood('', getFoodBoolean, getFoodName);
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDone(localDone);
    const localProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setProgress(localProgress, 'cocktails');
  }

  entreisLoop(food, type) {
    let indexDetails = 1;
    let resultFilter = [];
    Object.entries(food).filter((foodFilter) => {
      if (foodFilter[0] === `str${type}${indexDetails}` && foodFilter[1]) {
        indexDetails += 1;
        resultFilter = [...resultFilter, foodFilter[1]];
      }
      return foodFilter;
    });
    return resultFilter;
  }

  ingredientName(drink) {
    const ingredientFilter = this.entreisLoop(drink, 'Ingredient');
    const measureFilter = this.entreisLoop(drink, 'Measure');

    const totalIngredient = ingredientFilter.map((ingredient, index) => (
      <p key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
        {`-${ingredient} - ${measureFilter[index]}`}
      </p>
    ));
    return totalIngredient;
  }

  render() {
    const { match: { params: { id } },
      getDrinkDetails, getInProgress, getDoneRecipes } = this.props;
    let nameButton = 'Iniciar Receita';
    let classButton = true;

    if (getInProgress && Object.values(getInProgress.cocktails)
      .find((progress) => Object.keys(progress)[0] === id)) {
      nameButton = 'Continuar Receita';
    }

    if (getDoneRecipes && getDoneRecipes.find((done) => done.id === id)) {
      classButton = false;
    }

    return (
      <div>
        <div>
          <img
            src={ getDrinkDetails.strDrinkThumb }
            alt={ getDrinkDetails.strDrink }
            data-testid="recipe-photo"
            className="image"
          />
        </div>
        <div className="title">
          <h2 data-testid="recipe-title">{getDrinkDetails.strDrink}</h2>
          <div className="btns">
            <button
              className="btn"
              type="button"
              data-testid="share-btn"
            >
              <img src={ shareIcon } alt="share icon" className="icoBtn" />
            </button>
            <button
              className="btn"
              type="button"
              data-testid="favorite-btn"
            >
              <img src={ whiteHeartIcon } alt="white heart icon" className="icoBtn" />
            </button>
          </div>
        </div>
        <p data-testid="recipe-category">{getDrinkDetails.strAlcoholic}</p>
        <section className="section">
          <h3>Ingredients</h3>
          <div className="recipe">
            {this.ingredientName(getDrinkDetails)}
          </div>
        </section>
        <section className="section">
          <h3>Instructions</h3>
          <p
            data-testid="instructions"
            className="recipe"
          >
            {getDrinkDetails.strInstructions}
          </p>
        </section>
        <section className="section">
          <h3>Recommended</h3>
          <CarouselDrinkDetails className="carousel" />
        </section>
        <section className="bottom">
          { classButton && (
            <Link to={ `/bebidas/${id}/in-progress` }>
              <button
                type="button"
                className="btnBottom button_start"
                data-testid="start-recipe-btn"
              >
                {nameButton}
              </button>
            </Link>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getDrinkDetails: state.FoodAndDrinkDetailsReducer.drinkDetails,
  getFood: state.FoodAndDrinkReducer.food,
  getFoodName: state.FoodAndDrinkReducer.foodName,
  getFoodBoolean: state.FoodAndDrinkReducer.foodBoolean,
  getInProgress: state.ButtonReducer.inProgressRecipes,
  getDoneRecipes: state.ButtonReducer.doneRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  setDrinksDetails: (id) => dispatch(drinkDetailsThunk(id)),
  setFood: (food, drinkBoolean, drinkName) => dispatch(
    foodThunkAction(food, drinkBoolean, drinkName),
  ),
  setDone: (done) => dispatch(doneRecipesAction(done)),
  setProgress: (progress, name) => dispatch(inProgressRecipesAction(progress, name)),
});

DrinkDetails.propTypes = ({
  getDrinkDetails: PropTypes.arrayOf(PropTypes.object),
  setDrinksDetails: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetails);
