import React, { Component } from 'react';
import { Card, Icon, Image, Button, Form, Input, Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import abc123_1 from '../../public/images/abc123_1.png';
// import abc123_1 from '../../public/images/abc123_1.png';
// import abc123_1 from '../../public/images/abc123_1.png';
// import abc123_1 from '../../public/images/abc123_1.png';
// import abc123_1 from '../../public/images/abc123_1.png';

class ItemCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = { amt: 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      amt: e.target.value
    });
  }
  render() {
    const { item, onClickFn } = this.props;
    const amt = this.state.amt;
    return (
      <Form onSubmit={() => onClickFn(item, amt)}>
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
            content={
              window.location.pathname === "/cart" ? "Remove From Cart" : "Add to cart"
            }
          />
        </Form.Field>
      </Form>
    );
  }
}

// const findImg = (id) => {
//   const imgVar = null;
//   return;
// }

const ItemCard = (props) => (
  <Card>
    <Image
      src={abc123_1}
      alt={`image for ${props.item.name}`}
      size='tiny'
      centered={true}
    />
    <Card.Content>
      <Card.Header>{props.item.name}</Card.Header>
      <Rating
        icon='star'
        defaultRating={Math.floor(Math.random() * 6)}
        maxRating={5}
        disabled
      />
      <Card.Meta>
        <span className='stock-amount'>
          { `Stock: ${props.item.stock}` }
        </span>
      </Card.Meta>
      <Card.Description>
        { props.item.description || 'Deliciousness' }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ItemCardInput
        item={props.item}
        onClickFn={props.onClickFn}
      />
    </Card.Content>
  </Card>
);

ItemCard.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default ItemCard;