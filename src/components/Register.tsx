import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withRouter, RouteComponentProps} from 'react-router';
import * as H from 'history';
import {Button, Container, Form, Message} from 'semantic-ui-react';

import {sendPasswordResetEmail, register} from '../auth';
import * as ROUTES from '../constants/routes';

interface IProps {
  history: H.History;
}

interface IState {
  email: string;
  password: string | null;
  registerError: string | null;
}

class Register extends Component<IProps & RouteComponentProps, IState> {
  state: IState = {
    email: '',
    password: null,
    registerError: null,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = this.state;
    if (!email || !password) {
      this.setState(prevState => ({
        ...prevState,
        registerError: 'Email and password fields must be filled out',
      }));
      return;
    }

    register(email, password)
      .then(() => {
        // TODO - redirect to the originally requested url
        this.props.history.push(ROUTES.HOME);
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          registerError: 'There was a problem making your account. Please try again.',
        }));
      });
  };

  resetPassword = () => {
    sendPasswordResetEmail(this.state.email)
      .then(() =>
        this.setState(state => ({
          ...state,
          registerError: `Password reset email sent to ${this.state.email}.`,
        })),
      )
      .catch(() =>
        this.setState(state => ({
          ...state,
          registerError: `Email address not found.`,
        })),
      );
  };

  render() {
    const {registerError} = this.state;
    return (
      <Container>
        <Helmet>
          <title>Carrinho - register</title>
        </Helmet>

        <h1>Register</h1>

        <Message error>
          <Message.Header>Account Creation Unavailable</Message.Header>
          <p>We are not actively accepting new user accounts. Thanks for your understanding.</p>
        </Message>

        <Form onSubmit={this.handleSubmit} error={registerError !== null}>
          <Form.Field required disabled>
            <label htmlFor={'email'}>Email</label>
            <input name="email" id="email" onChange={this.handleChange} placeholder="Email" />
          </Form.Field>
          <Form.Field required disabled>
            <label htmlFor={'password'}>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit" disabled>
            Register
          </Button>
          {registerError && (
            <Message error>
              <Message.Header>Registration Error</Message.Header>
              &nbsp;{registerError}{' '}
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

export default withRouter(Register);
