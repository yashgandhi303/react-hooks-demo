import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Form, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Meta } = Card;
const FormItem = Form.Item;

const Step3 = ({ ...props }) => {

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  function onFormSubmit(values: any) {
    props.onFormSubmit(values)
  }

  function onFinishFailed(error: any) {
    console.log('error', error, setLoading);
  }

  return (
    <>
      <Card className="card" loading={loading}>
        <Meta
          title="User Onboarding"
          description="Part 3/3 - Short Response Question"
        />

        <Form form={form} onFinish={onFormSubmit} onFinishFailed={onFinishFailed} layout={'vertical'}>
          <FormItem
            label="Why are you interested in software engineering?"
            name="whyInterested"
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