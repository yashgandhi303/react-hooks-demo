import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Item = (props) => (
  <div className="item-div" style={{ border: "1px solid black" }}>

    { console.log('Item props: ', props) }
    {/* ant design component here nb??? */}
    <p> Item: {props.item.name}
        <br/>
        Stock: {props.item.stock}
        <br/>
        Id: {props.item.id}
    </p>
    <input type="number" /><br/>
    <button onClick={() => props.onClickFn(props.item.id, props.item.name, (props.item.stock - 3))}>Add to cart</button>

  </div>
);

Item.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default Item;
