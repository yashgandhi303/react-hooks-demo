import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { login, sendPasswordResetEmail } from '../auth';

function setErrorMsg(error) {
  return {
    loginMessage: error,
  }
}

class Login extends Component {
  state = { loginMessage: null };
  handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .catch(() => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  };
  resetPassword = () => {
    sendPasswordResetEmail(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch(() => this.setState(setErrorMsg(`Email address not found.`)))
  };
  render () {
    return (
      <Container className="col-sm-6 col-sm-offset-3">
        <Helmet>
          <title>Carrinho - login</title>
        </Helmet>

        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor={"email"}>Email</label>
            <input
              name="email"
              id="email"
              className="form-control"
              ref={(email) => this.email = email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor={"password"}>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
              ref={(pw) => this.pw = pw}
            />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </Container>
    )
  }
}

export default Login;
