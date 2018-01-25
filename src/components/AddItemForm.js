import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addNewItemToStock } from '../actions/actionCreators';
import { Form, Input, TextArea, Header, Button /*, Container, Divider, Grid, Dimmer, Loader */ } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

class AddItemForm extends Component {
  state = {
    name: '',
    quantity: 0,
    description: ''
  }

  handleChange = (e /*, { name, value }*/) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    const item = this.state;
    //TODO: need to validate here (joi??)

    if (item.quantity === 0) return; // need to display something here
    console.log('handlesubmit: ', item);
    this.props.addItemToStock(item);
    this.setState({ name: '', quantity: 0, description: ''});
  }

  render() {
    const { name, quantity, description } = this.state;
    return [
      <Header as='h2' key="addItemForm-h2">Add an item to stock</Header>,
      <Form onSubmit={this.handleSubmit} key="addItemForm-form">
        <Form.Field required control={Input} name='name' value={name} label='Name' placeholder='Name' onChange={this.handleChange} />
        {/* <Form.Field required control={Input} name='name' label='Last name' placeholder='Last name' /> */}
        <Form.Field required label='Quantity' name='quantity' value={quantity} control='input' type='number' max={99} onChange={this.handleChange}  />
        <Form.Field id='form-textarea-control-description' name='description' control={TextArea} label='Description' placeholder='Description' value={description} onChange={this.handleChange}  />
  
        <Button type='submit'>Submit</Button>
      </Form>
    ];  
  }
}

AddItemForm.propTypes = {
  addItemToStock: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addItemToStock: (item) => {
    dispatch({
      type: 'ADD_NEW_ITEM_TO_STOCK',
      item
    })
  }
});

export default connect(null, mapDispatchToProps)(AddItemForm);
