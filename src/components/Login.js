import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      email: '',
      keyEmail: false,
      keyPassword: false,
    };
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleKeyPassword = this.handleKeyPassword.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  }

  handleInputEmail({ target }) {
    const validateEmail = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(target.value);
    this.setState({
      email: target.value,
      keyEmail: validateEmail,
    });
    this.enableButton();
  }

  handleKeyPassword({ target }) {
    const six = 6;
    if (target.value.length >= six) {
      this.setState({
        keyPassword: true,
      });
    } else {
      this.setState({
        keyPassword: false,
      });
    }
    this.enableButton();
  }

  enableButton() {
    const { keyEmail, keyPassword } = this.state;
    if (keyEmail && keyPassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  saveLocalStorage() {
    const { email } = this.state;
    const data = {
      mealsToken: 1,
      cocktailsToken: 1,
      user: {
        email,
      },
    };
    localStorage.setItem('data', JSON.stringify(data));
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <input data-testid="email-input" onChange={ this.handleInputEmail } />
        <input
          data-testid="password-input"
          type="password"
          onChange={ this.handleKeyPassword }
        />
        <Link to="/comidas">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ this.saveLocalStorage }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
