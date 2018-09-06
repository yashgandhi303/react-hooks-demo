import React from 'react';
// import renderer from 'react-test-renderer';
// import HomeContainer from '../containers/HomeContainer';
// import store from '../store';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });

describe.skip('All tests in this describe will be skipped', () => {

  it('Home: sanity check', () => {
    expect(true).toEqual(true);
  });
    
  // it('renders welcome message', () => {
  //   const wrapper = shallow(<HomeContainer store={store} />).dive();
  //   const welcome = <h1 id="welcome">Welcome</h1>;
  //   expect(wrapper.contains(welcome)).toEqual(true);
  // });

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
