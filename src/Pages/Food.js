import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { foodThunkAction } from '../action/FoodAndDrinkAction';
import FoodCard from '../components/FoodCard';

class Food extends React.Component {
  componentDidMount() {
    const { setFood } = this.props;
    setFood();
  }

  render() {
    const { getFood } = this.props;
    return (
      <div>
        <h1>Food</h1>
        <Link to="bebidas">Drinks</Link>
        { getFood.map((food, index) => (
          <FoodCard key={ food } food={ food } index={ index } />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getFood: state.FoodAndDrinkReducer.food,
});

const mapDispatchToProps = (dispatch) => ({
  setFood: () => dispatch(foodThunkAction()),
});

Food.propTypes = ({
  setFood: PropTypes.func.isRequired,
  getFood: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);
