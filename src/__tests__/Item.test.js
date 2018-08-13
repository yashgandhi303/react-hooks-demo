import React from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/Item';

describe("tests for Item component", () => {

  const mockFn = jest.fn();

  const mockItem = {
    amt: 12,
    description: "awesome taste",
    id: "abc123",
    name: "thing",
    stock: 23,
  };

  const container = document.createElement('div');
  ReactDOM.render(
    <Item onClickFn={mockFn} item={mockItem} />,
    container
  );

  test("test Item component", () => {
    // console.log("container: ", container);
    
    // const h1 = container.querySelector('h1');
    // expect(h1.textContent).toMatch("About this project:");
    // assert
    // const lis = container.querySelectorAll('li');
    // console.log("lis: ", lis);
    // expect(lis.length).toBe(11);

    // TODO: mock location (route) and test button

  });

});
