import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, RouteComponentProps } from 'react-router';
import * as H from 'history';
import { Message } from 'semantic-ui-react';
import { login } from '../auth';
import * as ROUTES from '../constants/routes';
import { Typography, Layout, Button, Form } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const FormItem = Form.Item;

interface IProps {
    history: H.History;
}

interface IState {
    loginMessage: string;
    email: string;
    password: string;
}
const [form] = Form.useForm();

class Login extends Component<IProps & RouteComponentProps, IState> {
    state: IState = {
        loginMessage: '',
        email: '',
        password: '',
    };

    // const [email, setEmail] = useState('');
    // const[password, setPassword] = useState(null);
    // const[registerError, setRegisterError] = useState(null);

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(state => ({
            ...state,
            [name]: value,
        }));
    };

    handleSubmit = async (e: any) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState(prevState => ({
                ...prevState,
                loginMessage: 'Email and password fields must be filled out',
            }));
            return;
        }

        try {
            await login(email, password);
            // TODO - redirect to the originally requested url
            this.props.history.push(ROUTES.HOME);
        } catch (e) {
            this.setState(state => ({
                ...state,
                loginMessage: (e.code) || 'Invalid username/password.',
            }));
        }
    };

    render() {
        const { loginMessage } = this.state;
        return (
            <Content className="container-div">
                <Helmet>
                    <title>login</title>
                </Helmet>
                <Title> Login </Title>
                <Form form={form} onFinish={this.handleSubmit} layout={'vertical'}>
                    <FormItem required>
                        <label htmlFor={'email'}>Email</label>
                        <input name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </FormItem>
                    <FormItem required>
                        <label htmlFor={'password'}>Password</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit">Login</Button>
                    </FormItem>
                    {loginMessage && (
                        <Message error>
                            <Message.Header>Login Error</Message.Header>
                            &nbsp;{loginMessage}{' '}
                            <a href="#">
                                Forgot Password?
              </a>
                        </Message>
                    )}
                </Form>
            </Content>
        );
    }
}

export default withRouter(Login);
