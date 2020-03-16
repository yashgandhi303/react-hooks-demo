import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const { Meta } = Card;
const FormItem = Form.Item;

const Step2 = ({ ...props }) => {

  const [form] = Form.useForm();

  const onFormSubmit = (values: any) => {
    props.onFormSubmit(values, 3)
    props.routing.history.push(`/onboarding/3`)
  }

  const onFinishFailed = (error: any) => {
    console.log('error', error);
  }

  return (
    <>
      <Card className="card">
        <Meta
          title="User Onboarding"
          description="Part 2/3 - Experience Questions"
        />

        <Form form={form} onFinish={onFormSubmit} onFinishFailed={onFinishFailed} layout={'vertical'} initialValues={{ experienceYear: '0-2' }}>
          <FormItem
            label="Which college did you go to?"
            name="college"
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <Input placeholder="Uc Irvice" />
          </FormItem>
          <FormItem
            label="What was the last company you worked at?"
            name="lastCompany"
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <Input placeholder="Accenture" />
          </FormItem>
          <FormItem
            label="How many years of experience do you have?"
            name="experienceYear"
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <Select defaultValue="0-2">
              <Option value="0-2">0-2</Option>
              <Option value="2-5">2-5</Option>
              <Option value="5-10">5-10</Option>
            </Select>
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