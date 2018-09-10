import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';
import ItemCardInput from './ItemCardInput';

const ItemCard = ({ item, onClickFn }) => (
  <Card>
    <Image
      src={item.image}
      alt={`image for ${item.name}`}
      size='tiny'
      centered={true}
    />
    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Rating
        icon='star'
        defaultRating={Math.floor(Math.random() * 6)}
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
        item={item}
        onClickFn={onClickFn}
      />
    </Card.Content>
  </Card>
);

ItemCard.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.shape({
    amt: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default ItemCard;
