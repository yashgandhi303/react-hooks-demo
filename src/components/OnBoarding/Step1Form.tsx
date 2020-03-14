import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;

const Step1 = ({ ...props }) => {
  const [form] = Form.useForm();

  const onFormSubmit = (values: any) => {
    props.onFormSubmit(values, 2)
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
              >
                <Input placeholder="First Name" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                label="Last Name"
                name="lastName"
              >
                <Input placeholder="Last Name" />
              </FormItem>
            </Col>
          </Row>
          <FormItem
            label="Email"
            name="email"
          >
            <Input placeholder="Email" />
          </FormItem>
          <FormItem
            label="Phone Number"
            name="phoneNumber"
          >
            <Input placeholder="Phone Number" />
          </FormItem>
          <FormItem>
            <Button className="submit-btn" htmlType="submit" type="primary">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    </>
  );
}

Step1.propTypes = {
  nextStep: PropTypes.func,
}

export default Step1;