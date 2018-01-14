import React from 'react';
import styled /*, { css } */ from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-div">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

const StyledHeader = styled(Header)`
  ${'' /* border-radius: 3px; */}
  ${'' /* padding: 0.25em 1em; */}
  ${'' /* margin: 0 1em; */}
  ${'' /* background: transparent; */}
  background-color: black;
    ${'' /* color: green;
  border: 2px solid green; */}
`;

export default StyledHeader;
