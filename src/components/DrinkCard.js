import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DrinkCard extends React.Component {
  render() {
    const { drink, index } = this.props;
    return (
      <Link to={ `/bebidas/${drink.idDrink}` }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
        </div>
      </Link>
    );
  }
}

DrinkCard.propTypes = ({
  drink: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}).isRequired;

export default DrinkCard;
