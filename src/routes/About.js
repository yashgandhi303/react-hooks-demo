import React from 'react';

const About = () => (
  <div id='about-div'>
    <h1>About this project:</h1>

    <h3>Tech used:</h3>
    <p>Nick Bouldien <a href="">github profile</a></p>


    <h3>Tech used:</h3>
    <div>
      <p>- <a href='https://github.com/facebook/react'>React 16</a></p>
      {/* redux */}
      {/* redux-sagas */}
      {/* styled components */}
      {/* <p>- <a href='https://webpack.github.io/'>Webpack 3</a> (too much fun to setup...)</p> */}

    </div>

    <div>
      <p>
        API usage:
        <br />
        For list of public apis:
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
