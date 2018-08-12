// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() })
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import renderer from 'react-test-renderer';

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './App';

// // it('renders without crashing', () => {
// //   const div = document.createElement('div');
// //   ReactDOM.render(<App />, div);
// // });

// // import React from 'react';
// // import { shallow } from 'enzyme';
// import App from '../App';

test.skip('sanity check', () => {
  // const wrapper = shallow(<App />);
  expect(true).toEqual(true);
});

// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2 id="welcome">Welcome to React</h2>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });