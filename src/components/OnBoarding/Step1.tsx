import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;

const Step1 = ({ ...props }) => {
  const [form] = Form.useForm();

  const onFormSubmit = (values: any) => {
    props.onFormSubmit(values, 2);
    props.routing.history.push(`/onboarding/2`)
  }

  const onFinishFailed = (error: any) => {
    console.log('error', error);
  }

  return (
    <>
      <Card className="card">
        <Meta
          title="User Onboarding"
          description="Part 1/3 - Basic Questions"
        />

        <Form form={form} onFinish={onFormSubmit} onFinishFailed={onFinishFailed} layout={'vertical'}>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'This field is required.' }]}
              >
                <Input placeholder="First Name" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'This field is required.' }]}
              >
                <Input placeholder="Last Name" />
              </FormItem>
            </Col>
          </Row>
          <FormItem
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter valid email address' }]}
          >
            <Input placeholder="Email" />
          </FormItem>
          <FormItem
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please write your phone number' }, {
              type: 'number',
              message: 'Need to enter numbers only'
            }]}
          >
            <InputNumber min={0} placeholder="Phone Number" maxLength={10} />
          </FormItem>
          <FormItem>
            <Button className="submit-btn" htmlType="submit" type="primary">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Card>
    </>
  );
}

Step1.propTypes = {
  nextStep: PropTypes.func,
}

export default (Step1);