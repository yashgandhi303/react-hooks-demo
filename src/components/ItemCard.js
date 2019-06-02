import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';
import ItemCardInput from './ItemCardInput';

const ItemCard = ({ location, item, onClickFn }) => (
  <Card>
    <Image
      alt={`${item.name}`}
      centered={true}
      height={"100"}
      src={item.image}
      width={"100"}
    />

    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Rating
        icon='star'
        defaultRating={ Math.floor(Math.random() * 6) }
        maxRating={5}
        disabled
      />
      <Card.Meta>
        <span className='stock-amount'>
          { `Stock: ${item.stock}` }
        </span>
      </Card.Meta>
      <Card.Description>
        { item.description || 'Deliciousness' }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ItemCardInput
        location={location}
        item={item}
        onClickFn={onClickFn}
      />
    </Card.Content>
  </Card>
);

ItemCard.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.shape({
    amt: PropTypes.number,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default ItemCard;
