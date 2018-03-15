import React, { Component } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logout } from '../auth';
// import firebaseAuth from '../store';

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

          { this.props.authed ?
            <Menu.Item className='item'>
              <Button as={Link} to="login">Log in</Button>
            </Menu.Item>
            : 
            <Menu.Item>
              <Button as={Link} to="register" primary>Sign Up</Button>
            </Menu.Item>
          }
          
          { this.props.authed ?
            <Menu.Item className='item'>
              <Button onClick={logout} to="logout">Logout</Button>
            </Menu.Item>
            : 
            null
          }


        </Menu.Menu>
      </Menu>
    )
  }
}


// {this.state.authed
//   ? <button
//       style={{border: 'none', background: 'transparent'}}
//       onClick={() => {
//         logout()
//       }}
//       className="navbar-brand">Logout</button>
//   : <span>
//       <Link to="/login" className="navbar-brand">Login</Link>
//       <Link to="/register" className="navbar-brand">Register</Link>
//     </span>}

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