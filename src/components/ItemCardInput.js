import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class ItemCardInput extends Component {
  state = {
    amt: this.props.item.amt || 0,
    initialAmt: this.props.item.amt || 0,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      amt: value,
    });
  };

  render() {
    const { item, onClickFn } = this.props;
    const { amt, initialAmt } = this.state;
    return (
      <Form onSubmit={ () => onClickFn(item, amt, initialAmt) }>
        <Form.Field>
          <label>Amount</label>
          <Input
            onChange={this.handleChange}
            name={`quantity`}
            min={0}
            max={item.stock}
            type='number'
            value={amt}
          />
          <Form.Button
            disabled={amt === 0}
            content={window.location.pathname === "/cart" ? "Remove From Cart" : "Add to cart"}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default ItemCardInput;
