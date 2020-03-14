import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { Typography, Layout, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {

  return (
    <Content className="container-div">
      <Title>
        Welcome to The Future School!
      </Title>

      <Button>
        <Link to={ROUTES.ONBOARDING}>
          On Boarding
        </Link>
      </Button>
    </Content>
  );
};

export default Home;
