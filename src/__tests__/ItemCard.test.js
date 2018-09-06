import React from 'react';
import ReactDOM from 'react-dom';

import ItemCard from '../components/ItemCard';

describe("tests for ItemCard component", () => {
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
    <ItemCard onClickFn={mockFn} item={mockItem} />,
    container
  );

  // test("ItemCard has the correct props", () => {
  //    console.log("container: ", container);
  // });

  test("mockFn gets called when button is clicked", () => {
    const button = container.querySelectorAll('button');
    expect(button).toHaveLength(1);
    // expect(a).toHaveLength(11);
    // console.log("button: ", button);
    // expect(lis.length).toBe(11);
  });

});
