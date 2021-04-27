import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FoodCard extends React.Component {
  render() {
    const { food, index } = this.props;
    return (
      <Link to={ `comidas/${food.idMeal}` }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            src={ food.strMealThumb }
            alt={ food.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
        </div>
      </Link>
    );
  }
}

FoodCard.propTypes = ({
  food: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}).isRequired;

export default FoodCard;
