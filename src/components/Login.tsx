import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import * as H from 'history';
import { login } from '../auth';
import * as ROUTES from '../constants/routes';
import { Typography, Layout, Button, Form, Input, message } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const FormItem = Form.Item;
interface IProps {
  history: H.History;
}

const Login = (props: IProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    if (!values.email || !values.password) {
      message.error("Email and password fields must be filled out");
      return;
    }

    try {
      await login(values.email, values.password);
      props.history.push(ROUTES.HOME);
      message.success('Logged in successfully.');
    } catch (e) {
      message.error((e.code) || 'Invalid username/password.');
    }
  };


  return (
    <Content className="container-div">
      <Helmet>
        <title>login</title>
      </Helmet>
      <Title> Login </Title>
      <Form form={form} onFinish={handleSubmit} layout={'vertical'}>
        <FormItem
          label="Email"
          name="email"
        >
          <Input placeholder="Email" />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
        >
          <Input type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button htmlType="submit">Login</Button>
        </FormItem>
      </Form>
    </Content>
  );
}

export default withRouter(Login);
