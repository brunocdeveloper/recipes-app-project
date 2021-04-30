import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DrinkCard extends React.Component {
  render() {
    const { drink, index, testid, nameId } = this.props;
    return (
      <Link to={ `/bebidas/${drink.idDrink}` } className="link">
        <div data-testid={ `${index}${testid}` } className="boxImg">
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
            className="img w-100 h-50"
          />
          <p data-testid={ `${index}${nameId}` }>{drink.strDrink}</p>
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
