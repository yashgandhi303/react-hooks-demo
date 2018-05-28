import React from 'react';
import { Container, List } from 'semantic-ui-react';

const About = () => (
  <div id='about-div'>
    <Container>
      <h1>About this project:</h1>

      <List link>
        <List.Item href="https://github.com/nickbouldien/carrinho">github link</List.Item>
      </List>

      <h3>Tech used:</h3>
      <List link>
        <List.Item href="https://github.com/facebook/react">React 16</List.Item>
        <List.Item href='https://redux.js.org/'>redux </List.Item>
        <List.Item href='https://redux-saga.js.org/'>redux-saga</List.Item>
        <List.Item href='https://react.semantic-ui.com/introduction'>Semantic UI React</List.Item>
        <List.Item href='https://redux-saga.js.org/'>redux-saga</List.Item>
        <List.Item href='http://recharts.org/#/en-US'>Recharts</List.Item>
        <List.Item href="https://www.heroku.com/">hosted on Heroku</List.Item>
        <List.Item href='https://firebase.google.com/docs/reference/rest/database/'>Firebase rest api</List.Item>
      </List>

      <h3>Sources:</h3>
      <List link>
        <List.Item href="https://github.com/reactjs/react-redux">react-redux</List.Item>
        <List.Item href='https://redux.js.org/'>redux</List.Item>
      </List>

    </Container>
  </div>
);


export default About;
