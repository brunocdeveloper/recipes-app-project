import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor() {
    super();
    this.exitAndClearLocalStorage = this.exitAndClearLocalStorage.bind(this);
  }

  exitAndClearLocalStorage() {
    localStorage.clear();
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;
    return (
      <div>
        <p data-testid="profile-email">{ email }</p>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ this.exitAndClearLocalStorage }
          >
            Sair
          </button>
        </Link>
      </div>
    );
  }
}

export default Profile;
