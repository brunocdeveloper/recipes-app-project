import React from 'react';
import drinkIcon from './images/drinkIcon.svg';

function BottomMenu() => {
  return (
    <footer data-testid="footer">
      <span
        data-testid="drinks-bottom-btn"
        type="image/svg+xml"
        data={ drinkIcon }
      ></span>
      <span data-testid="explore-bottom-btn"></span>
      <span data-testid="food-bottom-btn"></span>
    </footer>
  );
}

export default BottomMenu;
