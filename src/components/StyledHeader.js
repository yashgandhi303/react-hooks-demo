import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

const logout = () => {
  // TODO: implement with firebase auth
  console.log("logging out");
};

const StyledHeader = ({ authed = false }) => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Menu stackable inverted pointing>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')}
        as={Link}
        to={"/"}
      >
        Carrinho.com <Icon name={'shopping cart'} size={"large"} />
      </Menu.Item>

      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={() => setActiveItem('about')}
        as={Link}
        to={"/about"}
      >
        About
      </Menu.Item>

      <Menu.Item
        name='admin'
        active={activeItem === 'admin'}
        onClick={() => setActiveItem('admin')}
        as={Link}
        to={"/admin"}
      >
        Admin
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={() => setActiveItem('cart')}
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
