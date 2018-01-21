import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
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
        >
          <Link to="/">
            Carrinho.com <Icon name={'shopping cart'} size={"large"} />
          </Link>
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <Link to="/about">      
            About
          </Link>
        </Menu.Item>

        {/* <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          <Link to="/">
            Testimonials
          </Link>
        </Menu.Item> */}
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