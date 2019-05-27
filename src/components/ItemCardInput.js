import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class ItemCardInput extends Component {
  state = {
    amt: this.props.item.amt || 1,
    initialAmt: this.props.item.amt || 0,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      amt: parseInt(value, 10),
    });
  };

  render() {
    console.log("state: ", this.state);
    console.log("props: ", this.props);

    const { amt, initialAmt } = this.state;
    const { item, location, onClickFn } = this.props;
    return (
      <Form onSubmit={ () => onClickFn(item, amt, initialAmt) }>
        <Form.Field>
          <label htmlFor={`item-${ item.id }-quantity`}>
            Amount
          </label>
          <Input
            id={`item-${ item.id }-quantity`}
            min={0}
            max={item.stock}
            name={`quantity`}
            onChange={this.handleChange}
            type='number'
            value={amt}
          />
          <Form.Button
            disabled={ amt === 0 }
            content={ location === "cart" ? "Remove From Cart" : "Add to cart" }
          />
        </Form.Field>
      </Form>
    );
  }
}

export default ItemCardInput;
