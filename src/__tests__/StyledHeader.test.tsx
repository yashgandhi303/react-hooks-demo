import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {BrowserRouter} from 'react-router-dom';
import StyledHeader from '../components/StyledHeader';

afterEach(cleanup);

// https://github.com/airbnb/enzyme/issues/1112
describe('tests for ItemCardInput component', () => {
  const {container} = render(
    <BrowserRouter>
      <StyledHeader authUser={null} />
    </BrowserRouter>,
  );
  const links = container.querySelectorAll('a');

  test('verify that correct links are shown', () => {
    expect(links).toHaveLength(6);
  });

  test.skip('when user is signed in', () => {
    const {container} = render(<StyledHeader authUser={null} />);
  });
});
