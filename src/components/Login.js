import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" />
        <input data-testid="password-input" type="password"/>
        <button data-testid="login-submit-btn">Entrar</button>
      </div>
    )
  }
}

export default Login;