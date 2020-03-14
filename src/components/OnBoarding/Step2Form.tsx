import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;

const Step2 = ({ ...props }) => {

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  function onFormSubmit(values: any) {
    props.onFormSubmit(values, 3)
  }

  function onFinishFailed(error: any) {
    console.log('error', error, setLoading);
  }

  return (
    <>
      <Card className="card" loading={loading}>
        <Meta
          title="User Onboarding"
          description="Part 2/3 - Experience Questions"
        />

        <Form form={form} onFinish={onFormSubmit} onFinishFailed={onFinishFailed} layout={'vertical'}>
          <FormItem
            label="Which college did you go to?"
            name="college"
          >
            <Input placeholder="Uc Irvice" />
          </FormItem>
          <FormItem
            label="What was the last company you worked at?"
            name="lastCompany"
          >
            <Input placeholder="Accenture" />
          </FormItem>
          <FormItem
            label="How many years of experience do you have?"
            name="experienceYear"
          >
            <Input placeholder="3-5" />
          </FormItem>
          <FormItem>
            <Button className="submit-btn" htmlType="submit" type="primary">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    </>
  );
}

Step2.propTypes = {
  nextStep: PropTypes.func,
}

export default Step2;