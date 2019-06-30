import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { Button, Container } from 'semantic-ui-react';
import { login, sendPasswordResetEmail } from '../auth';

class Login extends Component {
  state = {
    loginMessage: null,
    email: "",
    password: ""
  };
  handleChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      [target.name]: target.value,
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("email/pw", this.state.email, this.state.password);
    login(this.state.email, this.state.password)
      .then( (res) => {
        console.log("res: ", res);
        this.props.setUser(res.user);
        // eslint-disable-next-line no-restricted-globals
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          loginMessage: 'Invalid username/password.',
        }));
      })
  };

  resetPassword = () => {
    sendPasswordResetEmail(this.state.email)
      .then(() =>
        this.setState(state => ({
          ...state,
          loginMessage: `Password reset email sent to ${this.state.email}.`,
        }))
      )
      .catch(() =>
        this.setState(state => ({
          ...state,
          loginMessage: `Email address not found.`,
        }))
      )
  };
  render () {
    return (
      <Container>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          {
            this.state.loginMessage && (
              <>
                <br />
                <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
                  <span className="sr-only">Error:</span>
                  &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
                </div>
                <br />
              </>
            )
          }
          <Button type="submit">Login</Button>
        </form>
      </Container>
    )
  }
}

export default withRouter(Login);
