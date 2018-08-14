import React from 'react';
// import ReactDOM from 'react-dom';
import { cleanup, fireEvent, render } from 'react-testing-library';

import ItemCardInput from '../components/ItemCardInput';

afterEach(cleanup);

describe("tests for ItemCardInput component", () => {
  const mockFn = jest.fn();
  const mockItem = {
    amt: 12,
    id: "abc123",
    image: "",
    name: "thing",
    stock: 234,
  };

  const { container, getByLabelText, getByText } = render(<ItemCardInput onClickFn={mockFn} item={mockItem} />);

  const numInput = getByLabelText("Amount");
  const form = container.querySelector('form');
  const submitButton = container.querySelector('button'); // getByText("Add to cart");
  // const { quantity } = form.elements;

  test("mockFn gets called when button is clicked", () => {
    fireEvent(
      submitButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(
      mockItem,
      mockItem.amt,
      mockItem.amt
    );
    expect(submitButton.type).toBe('submit');
  });

  // test("Button calls mockFn with correct data when clicked", () => {
  //   expect(parseInt(quantity.value, 10)).toBe(mockItem.amt);
  //   form.dispatchEvent(new window.Event('submit'));
  //   expect(mockFn).toHaveBeenCalledWith(
  //     mockItem,
  //     mockItem.amt,
  //     mockItem.amt
  //   );
  // });

  // test.skip("Button renders the correct verbiage based on current location", () => {
  //   const button = container.querySelectorAll('button');
  //   console.log(button);
  //   expect(button.textContent).toMatch("asdfasf");
  // });

});
