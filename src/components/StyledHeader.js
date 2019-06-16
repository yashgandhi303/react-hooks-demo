import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { Button, Icon, Menu } from 'semantic-ui-react';
import { ThemeContext } from '../providers/ThemeProvider';

const logout = () => {
  // TODO: implement with firebase auth
  console.log("logging out");
};

const StyledHeader = ({ authed = false }) => {
  const [activeItem, setActiveItem] = useState(window.location.pathname);
  const [theme, setTheme] = useContext(ThemeContext);

  const updateTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Menu stackable inverted pointing>
      <Menu.Item
        name='home'
        active={activeItem === '/'}
        onClick={() => setActiveItem('/')}
        as={Link}
        to={"/"}
      >
        Carrinho.com <Icon name={'shopping cart'} size={"large"} />
      </Menu.Item>

      <Menu.Item
        name='about'
        active={activeItem === '/about'}
        onClick={() => setActiveItem('/about')}
        as={Link}
        to={"/about"}
      >
        About
      </Menu.Item>

      <Menu.Item
        name='admin'
        active={activeItem === '/admin'}
        onClick={() => setActiveItem('/admin')}
        as={Link}
        to={"/admin"}
      >
        Admin
      </Menu.Item>

      <Menu.Item>
        <Toggle
          aria-label={"toggle theme mode"}
          className='theme-toggle'
          defaultChecked={theme === "dark"}
          icons={{
            checked: <Icon name='moon' color={"yellow"} />,
            unchecked: <Icon name='sun' color={"yellow"} />
          }}
          onChange={() => updateTheme()}
        />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='cart'
          active={activeItem === '/cart'}
          onClick={() => setActiveItem('/cart')}
          as={Link}
          to={"/cart"}
        >
          Cart <Icon name={'cart'} size={"large"} color={"blue"} />
        </Menu.Item>

        { authed ? // TODO: implement
          <Menu.Item className='item'>
            <Button onClick={logout} to="logout">Logout</Button>
          </Menu.Item>
          :
          <>
            <Menu.Item>
              <Button as={Link} to="register" inverted color='black'>Sign Up</Button>
            </Menu.Item>
            <Menu.Item className='item'>
              <Button as={Link} to="login">Log in</Button>
            </Menu.Item>
          </>
        }
      </Menu.Menu>
    </Menu>
  )
};

export default StyledHeader;
