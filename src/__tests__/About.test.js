import React from 'react';
import ReactDOM from 'react-dom';

import About from '../components/About';

test("test About component", () => {
  // arange
  const container = document.createElement('div');
  // act
  ReactDOM.render(<About />, container);
  // console.log("container: ", container);

  const h1 = container.querySelector('h1');
  expect(h1.textContent).toMatch("About this project:");
  // assert
  // const lis = container.querySelectorAll('li');
  // console.log("lis: ", lis);
  // expect(lis.length).toBe(11);
});
