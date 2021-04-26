import React from 'react';
import PropTypes from 'prop-types';

class FoodCard extends React.Component {
  render() {
    const { food, index } = this.props;
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ food.strMealThumb }
          alt={ food.strMeal }
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
      </div>
    );
  }
}

FoodCard.propTypes = ({
  food: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}).isRequired;

export default FoodCard;
