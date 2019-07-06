import React from 'react';
import { cleanup, render } from 'react-testing-library';

import StyledHeader from '../components/StyledHeader';

afterEach(cleanup);

// https://github.com/airbnb/enzyme/issues/1112
describe("tests for ItemCardInput component", () => {
  const mockFn = jest.fn();

  const { container, getByText, queryByText } = render(<StyledHeader />);
  const links = container.querySelectorAll('a'); // ("Store stock:");

  test("verify that correct links are shown", () => {
    // expect(h2.textContent).toBe("");
  });

  test("when user is signed in", () => {
    const { container } = render(<StyledHeader authed={true} />);
    // expect(h2.textContent).toBe("");
  });

});
