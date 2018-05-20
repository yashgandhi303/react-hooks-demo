import React from 'react';

const About = () => (
  <div id='about-div'>
    <h1>About this project:</h1>

    <h3>Creator:</h3>
    <p>Nick Bouldien <a href="https://github.com/nickbouldien">github profile</a></p>


    <h3>Tech used:</h3>
    <div>
      <p>- <a href='https://github.com/facebook/react'>React 16</a></p>
      <p>- <a href='https://redux.js.org/'>redux </a></p>
      <p>- <a href='https://redux-saga.js.org/'>redux-sagas </a></p>
      <p>- <a href='https://react.semantic-ui.com/introduction'>Semantic UI React</a></p>
      <p>- <a href='http://recharts.org/#/en-US'>Recharts</a></p>
      
      {/* styled components */}
      {/* <p>- <a href='https://webpack.github.io/'>Webpack 3</a> (too much fun to setup...)</p> */}

    </div>

    <br />

    <div>
      <p>
        API usage:
        <br />
        <a href='https://firebase.google.com/docs/reference/rest/database/'>Firebase rest api</a>

        {/* <p>- <a href='https://github.com/toddmotto/public-apis#currency-exchange'>github link</a></p> */}

      </p>
      
    </div>

    <div>
      Sources:
      <a href="https://github.com/reactjs/react-redux" target="_blank" rel="noopener noreferrer">react-redux</a>
      <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">redux</a>


      {/* <a href="https://github.com/redux-saga/redux-saga" target="_blank">redux-saga</a> */}
      {/* thunks (in firebase branch) */}
    </div>

  </div>
);


export default About;
