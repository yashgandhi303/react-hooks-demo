import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { Button, Container, Form, Message } from 'semantic-ui-react';
import { register } from '../auth';
import * as ROUTES from '../constants/routes';

class Register extends Component {
  state = {
    email: null,
    password: null,
    registerError: null,
  };

  handleChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      [target.name]: target.value,
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState(prevState => ({
        ...prevState,
        registerError: "Email and password fields must be filled out",
      }));
      return;
    }

    register(email, password)
      .then( () => {
        // TODO - redirect to the originally requested url
        this.props.history.push(ROUTES.HOME);
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          registerError: 'There was a problem making your account. Please try again.',
        }));
      })
  };

  render () {
    const { registerError } = this.state;
    return (
      <Container>
        <Helmet>
          <title>Carrinho - register</title>
        </Helmet>

        <h1>Register</h1>

        <Message error>
          <Message.Header>Account Creation Unavailable</Message.Header>
          <p>
            We are not actively accepting new user accounts.  Thanks for your understanding.
          </p>
        </Message>

        <Form
          onSubmit={this.handleSubmit}
          error={registerError !== null}
        >
          <Form.Field required disabled>
            <label htmlFor={"email"}>Email</label>
            <input
              name="email"
              id="email"
              onChange={this.handleChange}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field required disabled>
            <label htmlFor={"password"}>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit" disabled>Register</Button>
          {
            registerError && (
              <Message error>
                <Message.Header>Registration Error</Message.Header>
                &nbsp;{registerError} <a href="#" onClick={this.resetPassword}>Forgot Password?</a>
              </Message>
            )
          }
        </Form>
      </Container>
    )
  }
}

export default withRouter(Register);
