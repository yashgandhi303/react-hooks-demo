import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../actions/actionCreators';

const AddItem = ({ dispatch }) => {
  let input;
  return (
    <p>Add Item</p>
  );
  //
  // return (
  //   <div>
  //     <form
  //       onSubmit={e => {
  //         e.preventDefault();
  //         if (!input.value.trim()) {
  //           return;
  //         }
  //         dispatch(addTodo(input.value));
  //         input.value = '';
  //       }}
  //     >
  //       <input ref={node => { input = node; }} />
  //       <button type="submit">
  //         Add Todo
  //       </button>
  //     </form>
  //   </div>
  // );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddItem);
