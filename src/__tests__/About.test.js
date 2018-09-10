import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import About from '../components/About';

describe('test About component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<About />, container);

  test("h1 shows up", () => {
    const h1 = container.querySelector('h1');
    expect(h1.textContent).toMatch("About this project:");
  });

  test("there are 2 h3s", () => {
    const h3s = container.querySelectorAll('h3');
    expect(h3s).toHaveLength(2);
    expect(h3s[0].textContent).toMatch("Tech used:");
  });

  test("there are 11 links", () => {
    const a = container.querySelectorAll('a');
    expect(a).toHaveLength(11);
  });

  test("snapshot test", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toMatchSnapshot();
  });

});
