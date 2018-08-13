import React from 'react';
import ReactDOM from 'react-dom';

import ItemCardInput from '../components/ItemCardInput';

describe("tests for ItemCardInput component", () => {
  const mockFn = jest.fn();
  const mockItem = {
    amt: 12,
    id: "abc123",
    image: "",
    name: "thing",
    stock: 234,
  };

  const container = document.createElement('div');
  ReactDOM.render(
    <ItemCardInput onClickFn={mockFn} item={mockItem} />,
    container
  );

  const form = container.querySelector("form");
  const { quantity } = form.elements;

  test("Button calls mockFn when clicked", () => {
    expect(parseInt(quantity.value, 10)).toBe(mockItem.amt);

    form.dispatchEvent(new window.Event('submit'));
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(
      mockItem,
      mockItem.amt,
      mockItem.amt
    );
  });

  test("mockFn gets called when button is clicked", () => {
    const button = container.querySelectorAll('button');
    expect(button).toHaveLength(1);

  });

  test.skip("Button renders the correct verbiage based on current location", () => {
    const button = container.querySelectorAll('button');
    console.log(button);
    expect(button.textContent).toMatch("asdfasf");
  });

});
