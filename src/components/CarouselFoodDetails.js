import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { drinksThunkAction } from '../action/FoodAndDrinkAction';
import DrinkCard from './DrinkCard';
import '../css/Details.css';

class CarouselDetails extends React.Component {
  componentDidMount() {
    const {
      setDrinks,
      getDrinkBoolean,
      getDrinkName } = this.props;
    setDrinks('', getDrinkBoolean, getDrinkName);
  }

  createCard(numb1, numb2) {
    let magicNumber = numb1 - 1;
    const { getDrinks } = this.props;
    return (
      <div className="cardDetails">
        {getDrinks.slice(numb1, numb2).map((drink) => {
          magicNumber += 1;
          return (
            <DrinkCard
              key={ `${drink}${magicNumber}` }
              drink={ drink }
              index={ magicNumber }
              testid="-recomendation-card"
              nameId="-recomendation-title"
            />
          );
        })}
      </div>
    );
  }

  render() {
    const { getDrinks } = this.props;
    if (!getDrinks[0]) {
      return <p>Loading...</p>;
    }

    return (

      <Carousel fade>
        <Carousel.Item interval={ 7000 }>
          {this.createCard(0, 2)}
        </Carousel.Item>
        <Carousel.Item interval={ 7000 }>
          {this.createCard(2, Number('4'))}
        </Carousel.Item>
        <Carousel.Item interval={ 7000 }>
          {this.createCard(Number('4'), Number('6'))}
        </Carousel.Item>
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => ({
  getDrinks: state.FoodAndDrinkReducer.drinks,
  getDrinkName: state.FoodAndDrinkReducer.drinkName,
  getDrinkBoolean: state.FoodAndDrinkReducer.drinkBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  setDrinks: (drink, drinkBoolean, drinkName) => dispatch(
    drinksThunkAction(drink, drinkBoolean, drinkName),
  ),
});

CarouselDetails.propTypes = ({
  getDrinks: PropTypes.arrayOf(PropTypes.object),
  setDrinks: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(CarouselDetails);
