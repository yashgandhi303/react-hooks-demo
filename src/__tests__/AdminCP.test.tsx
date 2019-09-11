import React from 'react';
import {cleanup, render} from 'react-testing-library';

import AdminCP from '../components/AdminCP';
import {IItem} from '../components/ItemCard';
import {AppContextProvider} from '../providers/AppProvider';

afterEach(cleanup);

describe('tests for AdminCP component', () => {
  const mockFn = jest.fn();
  const emptyStock: IItem[] = [];
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

  // const {getByText, queryByText} = render(
  //   <AppContextProvider>
  //     <AdminCP />
  //   </AppContextProvider>,
  // );
  // const h2 = getByText('Store stock:');
  // const p = queryByText('No items in stock.');

  // test('getItemsInStock prop function is called', () => {
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  //   expect(mockFn).toHaveBeenCalledWith();
  // });

  // test('h2 header is shown', () => {
  //   expect(h2.textContent).toBe('Store stock: ');
  // });

  // test("displays 'No items in stock.' when there are no stock items", () => {
  //   expect(p && p.textContent).toBe('No items in stock.');
  // });

  // test('displays bar chart with items when they exist as props', () => {
  //   const {container} = render(<AdminCP />);
  //   const tooltip = container.querySelectorAll('recharts-tooltip-label');
  //   expect(tooltip.length).toBe(0);

  //   const bars = container.querySelectorAll('.recharts-bar-rectangle');
  //   expect(bars.length).toBe(stockItems.length);
  // });

  test.skip('displays (correct) tooltip when hovering over a bar on bar chart', () => {
    // TODO
  });

  // test('snapshot test with data (stock)', () => {
  //   const {container} = render(<AdminCP />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // test('snapshot test without data (no stock)', () => {
  //   const {container} = render(<AdminCP />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
