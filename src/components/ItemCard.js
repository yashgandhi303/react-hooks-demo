import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';
import ItemCardInput from './ItemCardInput';

const ItemCard = (props) => (
  <Card>
    <Image
      src={props.item.image}
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
  item: PropTypes.object.isRequired,
};

export default ItemCard;