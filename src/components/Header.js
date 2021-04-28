import React from 'react';
import '../Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <label htmlFor="icon-left">
          <input
            id="icon-left"
            type="button"
            className="profile-btn"
            data-testid="profile-top-btn"
          />
        </label>
        <span
          data-testid="page-title"
          className="page-title"
        >
          Comidas
        </span>
        <label htmlFor="icon-rigth">
          <input
            id="icon-rigth"
            type="button"
            className="search-btn"
            data-testid="search-top-btn"
          />
        </label>
      </header>
    );
  }
}

export default Header;
