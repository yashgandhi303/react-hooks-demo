import React from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title, Text } = Typography;

interface IProps {
  location: H.Location;
}

const NoMatch: React.FC<IProps> = ({ location }) => {
  return (
    <Content className="container-div">
      <Title level={3}>
        404 - Sorry, there was no match for <Text code>{location.pathname}</Text>.
        <br />
        Click <Link to={'/'}>here</Link> to go back home.
      </Title>
    </Content>
  );
};

export default NoMatch;
