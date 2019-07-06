import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from '../reducers/root_reducer';

import Home from '../components/Home';

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ ui }</Provider>),
    store,
  }
}

describe.skip('All tests in this describe will be skipped', () => {
  const mockProps = {
    storeStock: {
      stockItems: [
        {
          id: "id-1234",
          stock: 172,
          name: "fake item name",
        }
      ],
    },
    addItemToCartFn: () => jest.fn(),
    getItemsInStock: () => jest.fn(),
  };

  const { container, getByLabelText } = renderWithRedux(<Home {...mockProps} />);
  const h1 = container.querySelector('h1'); // getByText("Add to cart");
  test('renders welcome message', () => {
    expect(h1.textContent).toMatch("About this project:");
    expect(true).toEqual(true);
  });

  // test('HomeContainer snapshot', () => {
  //   const component = renderer.create(<HomeContainer store={store} />, );
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();

  //   manually trigger the callback
  //   tree.props.onMouseEnter();
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();

  //   // manually trigger the callback
  //   tree.props.onMouseLeave();
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // describe('>>>H O M E --- Snapshot', () => {
  //   it('+++capturing Snapshot of HomeContainer', () => {
  //     const renderedValue = renderer.create(<HomeContainer store={store} />).toJSON();
  //     expect(renderedValue).toMatchSnapshot();
  //   });
  // });

  /* shallow/dive : // https://github.com/airbnb/enzyme/issues/1002 */

});
