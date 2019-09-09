import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withRouter, RouteComponentProps} from 'react-router';
import * as H from 'history';
import {Button, Container, Form, Message} from 'semantic-ui-react';

import {login, sendPasswordResetEmail} from '../auth';
import * as ROUTES from '../constants/routes';

interface IProps {
  history: H.History;
}

interface IState {
  loginMessage: string;
  email: string;
  password: string;
}

class Login extends Component<IProps & RouteComponentProps, IState> {
  state: IState = {
    loginMessage: '',
    email: '',
    password: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = this.state;
    if (!email || !password) {
      this.setState(prevState => ({
        ...prevState,
        loginMessage: 'Email and password fields must be filled out',
      }));
      return;
    }

    login(email, password)
      .then(() => {
        // TODO - redirect to the originally requested url
        this.props.history.push(ROUTES.HOME);
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          loginMessage: 'Invalid username/password.',
        }));
      });
  };

  resetPassword = () => {
    sendPasswordResetEmail(this.state.email)
      .then(() =>
        this.setState(state => ({
          ...state,
          loginMessage: `Password reset email sent to ${this.state.email}.`,
        })),
      )
      .catch(() =>
        this.setState(state => ({
          ...state,
          loginMessage: `Email address not found.`,
        })),
      );
  };
  render() {
    const {loginMessage} = this.state;
    return (
      <Container>
        <Helmet>
          <title>Carrinho - login</title>
        </Helmet>

        <h1> Login </h1>
        <Form onSubmit={this.handleSubmit} error={loginMessage !== null}>
          <Form.Field required>
            <label htmlFor={'email'}>Email</label>
            <input name="email" id="email" onChange={this.handleChange} placeholder="Email" />
          </Form.Field>
          <Form.Field required>
            <label htmlFor={'password'}>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Login</Button>
          {loginMessage && (
            <Message error>
              <Message.Header>Login Error</Message.Header>
              &nbsp;{loginMessage}{' '}
              <a href="#" onClick={this.resetPassword}>
                Forgot Password?
              </a>
            </Message>
          )}
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
