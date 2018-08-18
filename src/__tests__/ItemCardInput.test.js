import React from 'react';
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

  const { container, getByLabelText } = render(<ItemCardInput onClickFn={mockFn} item={mockItem} />);
  const numInput = getByLabelText("Amount");
  const submitButton = container.querySelector('button'); // getByText("Add to cart");

  test("mockFn gets called when button is clicked", () => {
    fireEvent.click(submitButton);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(submitButton.type).toBe('submit');
    expect(submitButton.disabled).toBe(false);
  });

  test("Button calls mockFn with correct data when clicked", () => {
    fireEvent.click(submitButton);
    expect(mockFn).toHaveBeenCalledWith(
      mockItem,
      mockItem.amt,
      mockItem.amt
    );
  });

  test("Button renders the correct verbiage based on current location - home page", () => {
    expect(submitButton.textContent).toMatch("Add to cart");
  });

  test("Button renders the correct verbiage based on current location - cart page", () => {
    Object.defineProperty(window.location, 'pathname', {
      writable: true,
      value: '/cart',
    });
    const { container } = render(<ItemCardInput onClickFn={mockFn} item={mockItem} />);
    const cartSubmitButton = container.querySelector('button');
    expect(cartSubmitButton.textContent).toMatch("Remove From Cart");
  });

  test("Amount input changes are reflected in the UI", () => {
    numInput.value = '7';
    fireEvent.change(numInput);
    expect(numInput.value).toBe("7");
  });

  test("Submit button is disabled if the amount is 0", () => {
    const mockFn = jest.fn();
    const mockItem = {
      amt: 0,
      id: "abc123",
      image: "",
      name: "thing",
      stock: 234,
    };
    const { container } = render(<ItemCardInput onClickFn={mockFn} item={mockItem} />);
    const submitButton = container.querySelector('button');
    expect(submitButton.disabled).toBe(true);
  });

  test("Amount input changes are reflected in the UI - submitButton", () => {
    const { container } = render(<ItemCardInput onClickFn={mockFn} item={mockItem} />);
    const submitButton = container.querySelector('button');
    numInput.value = '0';
    fireEvent.change(numInput);
    expect(numInput.value).toBe("0");
    // expect(submitButton.disabled).toBe(true);

    numInput.value = '3';
    fireEvent.change(numInput);
    expect(numInput.value).toBe("3");
    expect(submitButton.disabled).toBe(false);
  });

});
