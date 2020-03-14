import React, { useContext, useState } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import * as H from 'history';
import Toggle from 'react-toggle';
import { Button, Icon, Menu } from 'semantic-ui-react';
import { logout } from '../auth';
import * as ROUTES from '../constants/routes';
import { ThemeContext } from '../providers/ThemeProvider';

interface IProps extends RouteComponentProps {
  authUser: firebase.User | null;
  history: H.History;
}

const StyledHeader: React.FC<IProps> = ({ authUser, history }) => {
  const [activeItem, setActiveItem] = useState(window.location.pathname);
  const [theme, setTheme] = useContext(ThemeContext);

  const updateTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const logoutUser = () => {
    logout()
      .then(() => {
        history.push(ROUTES.LOGIN);
      })
      .catch(err => {
        console.error('err: ', err);
        history.push(ROUTES.LOGIN);
      });
  };

  return (
    <Menu className={`${theme}`} stackable inverted pointing>

      <Menu.Item
        name="admin"
        active={activeItem === ROUTES.ONBOARDING}
        onClick={() => setActiveItem(ROUTES.ONBOARDING)}
        as={Link}
        to={ROUTES.ONBOARDING}
      >
        On Boarding
      </Menu.Item>

      <Menu.Item>
        <Toggle
          aria-label={'toggle theme mode'}
          className="theme-toggle"
          defaultChecked={theme === 'dark'}
          icons={{
            checked: <Icon name="moon" color={'yellow'} />,
            unchecked: <Icon name="sun" color={'yellow'} />,
          }}
          onChange={() => updateTheme()}
        />
      </Menu.Item>

      <Menu.Menu position="right">

        {authUser ? (
          <Menu.Item className="item">
            <Button onClick={logoutUser}>Logout</Button>
          </Menu.Item>
        ) : (
            <>
              <Menu.Item>
                <Button as={Link} to={ROUTES.REGISTER} inverted color="black">
                  Sign Up
              </Button>
              </Menu.Item>
              <Menu.Item className="item">
                <Button as={Link} to={ROUTES.LOGIN}>
                  Log in
                </Button>
              </Menu.Item>
            </>
          )}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(StyledHeader);
