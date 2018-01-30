import React, { Component } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class StyledHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => (
    this.setState({ activeItem: name })
  );

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
          {/* <Menu.Item className='item'>
            <Button as='a'>Log in</Button>
          </Menu.Item>
          <Menu.Item>
            <Button as='a' primary>Sign Up</Button>
          </Menu.Item> */}
        </Menu.Menu>
      </Menu>
    )
  }
}

// import styled /*, { css } */ from 'styled-components';

// const Header = () => (
//   <div className="header-div">
//     <Link to="/home">Home</Link>
//     <Link to="/about">About</Link>
//   </div>
// );

// const StyledHeader = styled(Header)`
//   ${'' /* border-radius: 3px; */}
//   ${'' /* padding: 0.25em 1em; */}
//   ${'' /* margin: 0 1em; */}
//   ${'' /* background: transparent; */}
//   background-color: black;
//     ${'' /* color: green;
//   border: 2px solid green; */}
// `;

// export default StyledHeader;