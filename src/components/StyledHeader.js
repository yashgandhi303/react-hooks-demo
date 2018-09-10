import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

class StyledHeader extends Component {
  static defaultProps = {
    authed: false,
  };

  state = { activeItem: "" };

  handleItemClick = (e, { name }) => (
    this.setState({ activeItem: name })
  );

  logout = () => {
    // TODO: implement
    console.log("logging out");
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable inverted pointing>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to={"/"}
        >
          Carrinho.com <Icon name={'shopping cart'} size={"large"} />
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={Link}
          to={"/about"}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='admin'
          active={activeItem === 'admin'}
          onClick={this.handleItemClick}
          as={Link}
          to={"/admin"}
        >
          Admin
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
            as={Link}
            to={"/cart"}
          >
            Cart <Icon name={'cart'} size={"large"} color={"blue"} />
          </Menu.Item>

          { this.props.authed ? // TODO: implement
            <Menu.Item className='item'>
              <Button as={Link} to="login">Log in</Button>
            </Menu.Item>
            :
            <Menu.Item>
              <Button as={Link} to="register" primary>Sign Up</Button>
            </Menu.Item>
          }
          
          { this.props.authed ? // TODO: implement
            <Menu.Item className='item'>
              <Button onClick={this.logout} to="logout">Logout</Button>
            </Menu.Item>
            :
            null
          }

        </Menu.Menu>
      </Menu>
    )
  }
}

export default StyledHeader;
