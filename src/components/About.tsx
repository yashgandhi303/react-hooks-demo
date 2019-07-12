import React from 'react';
import {Container, List} from 'semantic-ui-react';
import {Helmet} from 'react-helmet';

const About = () => (
  <Container id="about-div">
    <Helmet>
      <title>Carrinho - about</title>
    </Helmet>

    <h1>About this project:</h1>

    <List link>
      <List.Item href="https://github.com/nickbouldien/carrinho" target="_blank">
        github link
      </List.Item>
    </List>

    <h3>Tech used:</h3>
    <List link>
      <List.Item href="https://github.com/facebook/react" target="_blank">
        React 16
      </List.Item>
      <List.Item href="https://redux.js.org/" target="_blank">
        redux{' '}
      </List.Item>
      <List.Item href="https://redux-saga.js.org/" target="_blank">
        redux-saga
      </List.Item>
      <List.Item href="https://react.semantic-ui.com/introduction" target="_blank">
        Semantic UI React
      </List.Item>
      <List.Item href="https://redux-saga.js.org/" target="_blank">
        redux-saga
      </List.Item>
      <List.Item href="http://recharts.org/#/en-US" target="_blank">
        Recharts
      </List.Item>
      <List.Item href="https://www.heroku.com/" target="_blank">
        hosted on Heroku
      </List.Item>
      <List.Item href="https://firebase.google.com/docs/reference/rest/database/" target="_blank">
        Firebase rest api
      </List.Item>
    </List>

    <h3>Sources:</h3>
    <List link>
      <List.Item href="https://github.com/reactjs/react-redux" target="_blank">
        react-redux
      </List.Item>
      <List.Item href="https://redux.js.org/" target="_blank">
        redux
      </List.Item>
    </List>
  </Container>
);

export default About;
