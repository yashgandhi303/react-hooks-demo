import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions/actionCreators';

const AddItemForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <p>Add Item</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addItemToCart(input.value));
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

AddItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddItemForm);
