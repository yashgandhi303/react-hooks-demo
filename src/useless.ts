import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, RouteComponentProps } from 'react-router';
import * as H from 'history';
import { Button, Container, Form, Message } from 'semantic-ui-react';

import { register, saveUser } from '../auth';
import * as ROUTES from '../constants/routes';

interface IProps {
    history: H.History;
}

interface IState {
    email: string;
    password: string | null;
    registerError: string | null;
}


const Register = (props: IProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [registerError, setRegisterError] = useState(null);


    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const name = event.target.name;
    //   const value = event.target.value;

    //   this.setState(state => ({
    //     ...state,
    //     [name]: value,
    //   }));
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState(prevState => ({
                ...prevState,
                registerError: 'Email and password fields must be filled out',
            }));
            return;
        }
        try {
            await register(email, password);
            // TODO - redirect to the originally requested url
            saveUser;
            props.history.push(ROUTES.HOME);
        } catch (e) {
            this.setState(state => ({
                ...state,
                registerError: (e.code) || 'There was a problem making your account. Please try again.',
            }));
        }
    };

    return (
        <Container>
        <Helmet>
        <title>register < /title>
        < /Helmet>

        < h1 > Register < /h1>

      {/* <Message error>
          <Message.Header>Account Creation Unavailable</Message.Header>
          <p>We are not actively accepting new user accounts. Thanks for your understanding.</p>
        </Message> */}

    <Form onSubmit={ handleSubmit } error = { registerError !== null
}>
    <Form.Field required >
    <label htmlFor={ 'email' }> Email < /label>
        < input name = "email" id = "email" onChange = { handleChange } placeholder = "Email" />
            </Form.Field>
            < Form.Field required >
                <label htmlFor={ 'password' }> Password < /label>
                    < input
name = "password"
id = "password"
type = "password"
placeholder = "Password"
onChange = { handleChange }
    />
    </Form.Field>
    < Button type = "submit" >
        Register
        < /Button>
{
    registerError && (
        <Message error >
        <Message.Header>Registration Error < /Message.Header>
            & nbsp; { registerError } { ' ' }
    <a href="#" >
        Forgot Password ?
            </a>
            < /Message>
        )
}
</Form>
    < /Container>
  );
}

export default withRouter(Register);
