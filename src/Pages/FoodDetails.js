import '../styles/Details.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { foodDetailsThunk } from '../action/FoodAndDrinkDetailsAction';
import { drinksThunkAction } from '../action/FoodAndDrinkAction';
import CarouselDetails from '../components/CarouselFoodDetails';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

class FoodDetails extends React.Component {
  constructor(props) {
    super(props);

    this.ingredientName = this.ingredientName.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } },
      setFoodDetails,
      setDrinks,
      getDrinkBoolean,
      getDrinkName } = this.props;

    setFoodDetails(id);
    setDrinks('', getDrinkBoolean, getDrinkName);
  }

  entreisLoop(food, type, bug) {
    let indexDetails = 1;
    let resultFilter = [];
    Object.entries(food).filter((foodFilter) => {
      if (foodFilter[0] === `str${type}${indexDetails}` && foodFilter[1] !== bug) {
        indexDetails += 1;
        resultFilter = [...resultFilter, foodFilter[1]];
      }
      return foodFilter;
    });
    return resultFilter;
  }

  ingredientName(food) {
    const ingredientFilter = this.entreisLoop(food, 'Ingredient', '');
    const measureFilter = this.entreisLoop(food, 'Measure', ' ');

    const totalIngredient = ingredientFilter.map((ingredient, index) => (
      <p key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
        {`-${ingredient} - ${measureFilter[index]}`}
      </p>
    ));
    return totalIngredient;
  }

  render() {
    const { getFoodDetails } = this.props;

    return (
      <div className="main">
        <div>
          <img
            src={ getFoodDetails.strMealThumb }
            alt={ getFoodDetails.strMeal }
            data-testid="recipe-photo"
            className="image"
          />
        </div>
        <div className="title">
          <h2 data-testid="recipe-title">{getFoodDetails.strMeal}</h2>
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
        <p data-testid="recipe-category" className="sub">{getFoodDetails.strCategory}</p>
        <section className="section">
          <h3>Ingredients</h3>
          <div className="recipe">
            {this.ingredientName(getFoodDetails)}
          </div>
        </section>
        <section className="section">
          <h3>Instructions</h3>
          <p
            data-testid="instructions"
            className="recipe"
          >
            {getFoodDetails.strInstructions}
          </p>
        </section>
        <section className="section">
          <h3>Video</h3>
          <iframe
            title={ getFoodDetails.strMeal }
            width="340"
            height="165"
            src={ getFoodDetails.strYoutube }
            frameBorder="0"
            allowFullScreen
            data-testid="video"
          />
        </section>
        <section className="section">
          <h3>Recommended</h3>
          <div className="carousel">
            <CarouselDetails />
          </div>
        </section>
        <div className="botton">
          <button
            className="btnBottom"
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getFoodDetails: state.FoodAndDrinkDetailsReducer.foodDetails,
  getDrinks: state.FoodAndDrinkReducer.drinks,
  getDrinkName: state.FoodAndDrinkReducer.drinkName,
  getDrinkBoolean: state.FoodAndDrinkReducer.drinkBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  setFoodDetails: (id) => dispatch(foodDetailsThunk(id)),
  setDrinks: (drink, drinkBoolean, drinkName) => dispatch(
    drinksThunkAction(drink, drinkBoolean, drinkName),
  ),
});

FoodDetails.propTypes = ({
  getFoodDetails: PropTypes.arrayOf(PropTypes.object),
  setFoodDetails: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
