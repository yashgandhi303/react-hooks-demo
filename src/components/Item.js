import React from 'react';
import PropTypes from 'prop-types';
import styled /*, { css }*/ from 'styled-components';
// import { Link } from 'react-router-dom';

// const Test = () => {
//   return  <p>this is cool</p>
// }

// const StyledTest = styled(Test)`
//   background: red;
//   background-color: rgba(21,19,21,0.83);
//   border-radius: 8px;
//   color: white;
//   height: ${props => props.small ? 40 : 60}px;
//   width: ${props => props.small ? 60 : 120}px;
// `;

const StyledDiv = styled.div`
  background-color: rgba(218,219,221,0.3);
`;

const StyledButton = styled.button`
  background-color: rgba(21,19,21,0.83);
  border-radius: 10px;
  color: white;
  height: ${props => props.small ? 30 : 40}px;
  width: ${props => props.small ? 60 : 105}px;

  &:hover {
    background-color: rgba(21,19,21,0.64);
  }
`;

const Item = (props) => (
  <div className="item-div" style={{ border: "1px solid black" }}>
    {/* ant design component here nb??? */}
    <StyledDiv> 
      Item: {props.item.name}
      <br/>
      Stock: {props.item.stock}
      <br/>
      Id: {props.item.id}
      <br />
      <input type="number" min={1} max={props.item.stock} />
      <br/>

      <StyledButton
        small={false}
        onClick={() => props.onClickFn(props.item, 3)}
        disabled={props.item.stock < 1}
      >
        {window.location.pathname === "/cart" ? "Remove From Cart" : "Add to cart"}
      </StyledButton>
    </StyledDiv>
    
    {(
      window.location.pathname === "/cart" && 
      <div>
        <p>Amt in Cart: {props.item.amt}</p>
        {/* TODO: need to get the value of the input for the onclick function below (have to use state???) */}
        <input type="number" min={0} max={props.item.amt} defaultValue={props.item.amt} />

        <StyledButton 
          onClick={() => props.onClickFn(props.item, props.item.amt)}
        >
          Remove Item From Cart
        </StyledButton>
      </div>
    )}
  </div>
);

Item.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default Item;