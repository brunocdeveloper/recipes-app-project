import '../styles/FooterSpec.css';
import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterSpec() {
  return (
    <footer className="footer" data-testid="footer">
      <object
        className="cocktailIcon"
        data={ drinkIcon }
        data-testid="drinks-bottom-btn"
        type="image/svg+xml"
      >
        Drinks
      </object>
      <object
        className="explorerIcon"
        data={ exploreIcon }
        data-testid="explore-bottom-btn"
        type="image/svg+xml"
      >
        Explore
      </object>
      <object
        className="forkIcon"
        data={ mealIcon }
        data-testid="food-bottom-btn"
        type="image/svg+xml"
      >
        Meal
      </object>
    </footer>
  );
}

export default FooterSpec;
