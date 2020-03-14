import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import * as H from 'history';
import { register } from '../auth';
import * as ROUTES from '../constants/routes';
import { Typography, Layout, Button, Form, Input, message } from 'antd';
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
      message.error((e.code) || 'There was a problem making your account. Please try again.');
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
          <Button htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    </Content>
  );
}

export default withRouter(Register);

