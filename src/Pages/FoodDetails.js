import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { foodDetailsThunk } from '../action/FoodAndDrinkDetailsAction';
import { drinksThunkAction } from '../action/FoodAndDrinkAction';
import CarouselDetails from '../components/CarouselFoodDetails';
import '../styles/Details.css';
import { doneRecipesAction,
  favoriteRecipesAction, inProgressRecipesAction } from '../action/ButtonAction';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

class FoodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.ingredientName = this.ingredientName.bind(this);
    this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
    this.heartToggle = this.heartToggle.bind(this);
    this.verificFavorite = this.verificFavorite.bind(this);
    this.state = {
      linkCopy: false,
      heartToggle: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } },
      setFoodDetails,
      setDrinks,
      getDrinkBoolean,
      getDrinkName,
      setDone,
      setProgress,
      setFavorite } = this.props;
    setFoodDetails(id);
    setDrinks('', getDrinkBoolean, getDrinkName);
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDone(localDone);
    const localProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setProgress(localProgress, 'meals');
    const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorite(localFavorite);
    this.verificFavorite();
  }

  verificFavorite() {
    const { match: { params: { id } } } = this.props;
    const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorite && localFavorite.find((favorite) => favorite.id === id)) {
      this.setState({ heartToggle: true });
    }
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

  copyCodeToClipboard() {
    copy(window.location.href);
    this.setState({ linkCopy: true });
  }

  removeFavorite(favoriteRecipes) {
    const { match: { params: { id } }, setFavorite } = this.props;
    const favoriteFilter = favoriteRecipes.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteFilter));
    setFavorite(favoriteFilter);
  }

  heartToggle() {
    const { heartToggle } = this.state;
    const { getFoodDetails, getFavorite, setFavorite } = this.props;
    const newFavorite = {
      id: getFoodDetails.idMeal,
      type: 'comida',
      area: getFoodDetails.strArea,
      category: getFoodDetails.strCategory,
      alcoholicOrNot: '',
      name: getFoodDetails.strMeal,
      image: getFoodDetails.strMealThumb,
    };
    let favoriteRecipes = [];
    if (getFavorite) {
      favoriteRecipes = [...getFavorite, newFavorite];
    } else {
      favoriteRecipes = [newFavorite];
    }
    if (heartToggle) {
      this.setState({ heartToggle: false });
      this.removeFavorite(favoriteRecipes);
    } else {
      this.setState({ heartToggle: true });
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      setFavorite(favoriteRecipes);
    }
  }

  render() {
    const { match: { params: { id } },
      getFoodDetails, getInProgress, getDoneRecipes } = this.props;
    const { linkCopy, heartToggle } = this.state;
    let nameButton = 'Iniciar Receita';
    let classButton = true;
    if (getInProgress && Object.values(getInProgress.meals)
      .find((progress) => Object.keys(progress)[0] === id)) {
      nameButton = 'Continuar Receita';
    }
    if (getDoneRecipes && getDoneRecipes.find((done) => done.id === id)) {
      classButton = false;
    }
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
              onClick={ () => this.copyCodeToClipboard() }
            >
              <img src={ shareIcon } alt="share" className="icoBtn" />
            </button>
            <button
              className="btn"
              type="button"
              onClick={ () => this.heartToggle() }
            >
              { heartToggle ? <img
                src={ blackHeartIcon }
                alt="favorit"
                data-testid="favorite-btn"
                className="icoBtn"
              /> : <img
                src={ whiteHeartIcon }
                alt="favorit"
                data-testid="favorite-btn"
                className="icoBtn"
              />}
            </button>
            { linkCopy && <p>Link copiado!</p> }
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
          <CarouselDetails className="carousel" />
        </section>
        <section className="bottom">
          { classButton && (
            <Link to={ `/comidas/${id}/in-progress` }>
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
  getFoodDetails: state.FoodAndDrinkDetailsReducer.foodDetails,
  getDrinks: state.FoodAndDrinkReducer.drinks,
  getDrinkName: state.FoodAndDrinkReducer.drinkName,
  getDrinkBoolean: state.FoodAndDrinkReducer.drinkBoolean,
  getInProgress: state.ButtonReducer.inProgressRecipes,
  getDoneRecipes: state.ButtonReducer.doneRecipes,
  getFavorite: state.ButtonReducer.favoriteRecipes,
});
const mapDispatchToProps = (dispatch) => ({
  setFoodDetails: (id) => dispatch(foodDetailsThunk(id)),
  setDrinks: (drink, drinkBoolean, drinkName) => dispatch(
    drinksThunkAction(drink, drinkBoolean, drinkName),
  ),
  setDone: (done) => dispatch(doneRecipesAction(done)),
  setProgress: (progress, id) => dispatch(inProgressRecipesAction(progress, id)),
  setFavorite: (favorite) => dispatch(favoriteRecipesAction(favorite)),
});

FoodDetails.propTypes = ({
  getFoodDetails: PropTypes.arrayOf(PropTypes.object),
  setFoodDetails: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
