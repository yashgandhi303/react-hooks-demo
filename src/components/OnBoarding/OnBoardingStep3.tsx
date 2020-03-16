import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Meta } = Card;
const FormItem = Form.Item;

const Step3 = ({ ...props }) => {

  const [form] = Form.useForm();

  const onFormSubmit = async (values: any) => {
    props.onFormSubmit(values);
    props.routing.history.push(`/`)
  }

  const onFinishFailed = (error: any) => {
    console.log('error', error);
  }

  return (
    <>
      <Card className="card">
        <Meta
          title="User Onboarding"
          description="Part 3/3 - Short Response Question"
        />

        <Form form={form} onFinish={onFormSubmit} onFinishFailed={onFinishFailed} layout={'vertical'}>
          <FormItem
            label="Why are you interested in software engineering?"
            name="whyInterested"
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <TextArea
              name="expericeYear"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </FormItem>
          <FormItem>
            <Button className="submit-btn" htmlType="submit" type="primary">Finish</Button>
          </FormItem>
        </Form>
      </Card>
    </>
  );
}

Step3.propTypes = {
  nextStep: PropTypes.func,
}

export default Step3;