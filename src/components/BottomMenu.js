import '../styles/BottomMenu.css';
import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function BottomMenu() {
  return (
    <footer className="footer" data-testid="footer">
      <object
        className="btnMenuIcon"
        data={ drinkIcon }
        data-testid="drinks-bottom-btn"
        type="image/svg+xml"
      >
        Drinks
      </object>
      <object
        className="btnMenuIcon"
        data={ exploreIcon }
        data-testid="explore-bottom-btn"
        type="image/svg+xml"
      >
        Explore
      </object>
      <object
        className="btnMenuIcon"
        data={ mealIcon }
        data-testid="food-bottom-btn"
        type="image/svg+xml"
      >
        Meal
      </object>
    </footer>
  );
}

export default BottomMenu;
