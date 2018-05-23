import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class ItemCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amt: this.props.item.amt || 0,
      initialAmt: this.props.item.amt || 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      amt: e.target.value
    });
  }
  render() {
    const { item, onClickFn } = this.props;
    const { amt, initialAmt } = this.state;

    console.log('ItemCard props: ', item, amt, initialAmt);
    return (
      <Form onSubmit={() => onClickFn(item, amt, initialAmt)}>
        <Form.Field>
          <label>Amount</label>
          <Input
            type='number'
            min={0}
            max={item.stock}
            value={amt}
            onChange={this.handleChange}
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