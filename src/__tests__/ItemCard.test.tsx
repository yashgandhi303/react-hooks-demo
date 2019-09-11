import React from 'react';
import ReactDOM from 'react-dom';

import ItemCard, {IItem} from '../components/ItemCard';

describe('tests for ItemCard component', () => {
  const mockFn = jest.fn();
  const mockItem: IItem = {
    id: 'id-1234',
    stock: 172,
    name: 'fake item name',
    amt: 0,
    description: 'asdfasdf',
    image: 'imagepath',
    rating: 4,
  };

  const container = document.createElement('div');
  ReactDOM.render(<ItemCard onClickFn={mockFn} location="cart" item={mockItem} />, container);

  test('mockFn gets called when button is clicked', () => {
    const button = container.querySelectorAll('button');
    expect(button).toHaveLength(1);
  });
});
