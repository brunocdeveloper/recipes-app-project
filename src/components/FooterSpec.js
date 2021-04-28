import '../styles/FooterSpec.css';
import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterSpec() {
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas">
        <img
          alt="drink icon"
          className="cocktailIcon"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
        />
      </Link>
      <Link to="/explorar">
        <img
          alt="explore icon"
          className="explorerIcon"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
        />
      </Link>
      <Link to="/comidas">
        <img
          alt="meal icon"
          className="mealIcon"
          data-testid="food-bottom-btn"
          src={ mealIcon }
        />
      </Link>
    </footer>
  );
}

export default FooterSpec;
