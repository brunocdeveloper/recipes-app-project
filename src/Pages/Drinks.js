import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { drinksThunkAction } from '../action/FoodAndDrinkAction';
import DrinkCard from '../components/DrinkCard';

class Drinks extends React.Component {
  componentDidMount() {
    const { setDrinks } = this.props;
    setDrinks();
  }

  render() {
    const { getDrinks } = this.props;
    return (
      <div>
        <h1>Drinks</h1>
        <Link to="comidas">Comidas</Link>
        { getDrinks.map((drink, index) => (
          <DrinkCard key={ drink } drink={ drink } index={ index } />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getDrinks: state.FoodAndDrinkReducer.drinks,
});

const mapDispatchToProps = (dispatch) => ({
  setDrinks: () => dispatch(drinksThunkAction()),
});

Drinks.propTypes = ({
  setDrinks: PropTypes.func.isRequired,
  getDrinks: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
