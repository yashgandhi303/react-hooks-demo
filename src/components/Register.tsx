import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import * as H from 'history';
import { register } from '../services/api';
import * as ROUTES from '../constants/routes';
import { Typography, Layout, Button, Form, Input, message } from 'antd';
import AuthUserContext from '../providers/AuthProvider';
const { Content } = Layout;
const { Title } = Typography;
const FormItem = Form.Item;
interface IProps {
  history: H.History;
}

const Register = (props: IProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    if (!values.email || !values.password) {
      message.error("Email and password fields must be filled out");
      return;
    }

    try {
      await register(values.email, values.password);
      // TODO - redirect to the originally requested url
      props.history.push(ROUTES.HOME);
      message.success('Account created successfully.');
    } catch (e) {
      message.error((e.message) || 'There was a problem making your account. Please try again.');
    }
  };


  return (
    <Content className="container-div">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Title> Register </Title>
      <Form form={form} onFinish={handleSubmit} layout={'vertical'}>
        <FormItem
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (value) {
                const data = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
                const isTrue = data.test(value);
                console.log();
                if (isTrue) {
                  return Promise.resolve();
                }
              }
              return Promise.reject('Passwords must have at least 6 characters and contain the following: upper case letters, lower case letters, numbers and symbols.');
            },
          }),]}
          hasFeedback
        >
          <Input type="password" placeholder="Password" />
        </FormItem>
        <FormItem
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}

        >
          <Input type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    </Content>
  );
}

export default withRouter(Register);

