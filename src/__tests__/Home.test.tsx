import React from 'react';
import {cleanup, render} from 'react-testing-library';

import Home from '../components/Home';
import {IItem} from '../components/ItemCard';
import {AppContextProvider} from '../providers/AppProvider';

afterEach(cleanup);

describe('All tests in this describe will be skipped', () => {
  const stockItems: IItem[] = [
    {
      id: 'id-1234',
      stock: 172,
      name: 'fake item name',
      amt: 0,
      description: 'asdfasdf',
      image: 'imagepath',
      rating: 4,
    },
    {
      id: 'id-5678',
      stock: 812,
      name: 'mock item 2',
      amt: 0,
      description: 'asdfasdf',
      image: 'imagepath',
      rating: 4,
    },
  ];

  const {container} = render(
    <AppContextProvider>
      <Home />
    </AppContextProvider>,
  );
  const h1 = container.querySelector('h1');
  test.skip('renders welcome message', () => {
    expect(h1 && h1.textContent).toMatch('Welcome to Carrinho');
  });
  /* shallow/dive : // https://github.com/airbnb/enzyme/issues/1002 */
});
