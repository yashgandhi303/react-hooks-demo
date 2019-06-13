import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Rating } from 'semantic-ui-react';
import { ThemeContext } from '../providers/ThemeProvider';
import { parseIntWithFallback } from '../utils/nutils';

const ItemCard = ({ location, item, onClickFn }) => {
  const initialAmt = location === "cart" ? item.amt : 1;

  const [itemAmt, setState] = useState(initialAmt);
  const [theme] = useContext(ThemeContext);
  const [raised, setRaised] = useState(false);

  return (
    <Card
      className={`${theme}`}
      onClick={() => setRaised(!raised)}
      raised={raised}
    >
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
        <label htmlFor={`item-${item.id}-quantity`}>
          Amount
          <input
            id={`item-${item.id}-quantity`}
            type={"number"}
            value={itemAmt}
            onChange={ (e) => setState(parseIntWithFallback(e.target.value)) }
            onBlur={ (e) => setState(parseIntWithFallback(e.target.value)) }
          />
        </label>
        <Button
          onClick={ () => onClickFn(item, itemAmt) }
          disabled={itemAmt === 0}
        >
          { location === "cart" ? "Remove From Cart" : "Add to cart" }
        </Button>
      </Card.Content>
    </Card>
  );
};

ItemCard.propTypes = {
  location: PropTypes.string.isRequired,
  item: PropTypes.shape({
    amt: PropTypes.number,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
  onClickFn: PropTypes.func.isRequired,
};

export default ItemCard;
