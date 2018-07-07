import * as React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  margin: 0px 10px;
  transition: padding-left 100ms;
  position: relative;

  transition: transform 100ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const Menu = () => (
  <Wrapper>
    <MenuItem>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        Home
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to="/work"
        style={{
          textDecoration: 'none',
        }}
      >
        Work
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to="/skills"
        style={{
          textDecoration: 'none',
        }}
      >
        Skills
      </Link>
    </MenuItem>
  </Wrapper>
);

export default Menu;
