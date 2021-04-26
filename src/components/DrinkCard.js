import React from 'react';
import PropTypes from 'prop-types';

class DrinkCard extends React.Component {
  render() {
    const { drink, index } = this.props;
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
      </div>
    );
  }
}

DrinkCard.propTypes = ({
  drink: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}).isRequired;

export default DrinkCard;
