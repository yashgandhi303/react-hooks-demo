import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Rating } from 'semantic-ui-react';
import useInput from "../hooks/useInput";

const ItemCard = ({ location, item, onClickFn }) => {
  const defaultAmt = location === "cart" ? item.amt : 1;
  const maxAmt = location === "cart" ? item.amt : item.stock;

  const [itemAmt, ItemInput] = useInput("Amount", `item-${item.id}-quantity`, defaultAmt, {
    type: "number",
    max: maxAmt,
    min: 0,
  });

  return (
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
          defaultRating={Math.floor(Math.random() * 6)}
          maxRating={5}
          disabled
        />
        <Card.Meta>
        <span className='stock-amount'>
          {`Stock: ${item.stock}`}
        </span>
        </Card.Meta>
        <Card.Description>
          {item.description || 'Deliciousness'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ItemInput />
        <Button
          onClick={ () => onClickFn(item, itemAmt) }
          disabled={parseInt(itemAmt) === 0}
        >
          { location === "cart" ? "Remove From Cart" : "Add to cart" }
        </Button>
      </Card.Content>
    </Card>
  );
};

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
