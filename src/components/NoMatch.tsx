import React from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import { Layout } from 'antd';
const { Content } = Layout;
interface IProps {
  location: H.Location;
}

const NoMatch: React.FC<IProps> = ({ location }) => {
  return (
    <Content className="container-div">
      <h3>
        404 - Sorry, there was no match for <code>{location.pathname}</code>.
        <br />
        Click <Link to={'/'}>here</Link> to go back home.
      </h3>
    </Content>
  );
};

export default NoMatch;
