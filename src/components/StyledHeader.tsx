import React, { useContext, useState } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import * as H from 'history';
import Toggle from 'react-toggle'; import { logout } from '../auth';
import * as ROUTES from '../constants/routes';
import { ThemeContext } from '../providers/ThemeProvider';
import { Menu, message } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

interface IProps extends RouteComponentProps {
  authUser: firebase.User | null;
  history: H.History;
}

const StyledHeader: React.FC<IProps> = ({ authUser, history }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const updateTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const logoutUser = async () => {
    try {
      await logout();
      history.push(ROUTES.LOGIN);
    } catch (e) {
      message.error((e.code) || 'Failed to log out, please refresh the page.');
      history.push(ROUTES.LOGIN);
    }
  };

  return (
    <Menu theme={theme === "light" ? "light" : "dark"} mode="horizontal" >

      <Menu.Item
        key="onBoarding"
      >
        <Link to={ROUTES.ONBOARDING} >
          On Boarding
        </Link>
      </Menu.Item>

      <Menu.Item key="toggle theme mode">
        <Toggle
          aria-label={'toggle theme mode'}
          className="theme-toggle"
          defaultChecked={theme === 'dark'}
          icons={{
            checked: <BulbFilled />,
            unchecked: <BulbOutlined />
          }}
          onChange={() => updateTheme()}
        />
      </Menu.Item>

      {authUser && (
        <Menu.Item key="logout" onClick={logoutUser}>
          Logout
        </Menu.Item>
      )}

      {!authUser && (<Menu.Item key="signup">
        <Link to={ROUTES.REGISTER}>
          Sign Up
        </Link>
      </Menu.Item >)}
      {!authUser && (<Menu.Item key="login">
        <Link to={ROUTES.LOGIN}>
          Log in
          </Link>
      </Menu.Item>)}
    </Menu>
  );
};

export default withRouter(StyledHeader);
