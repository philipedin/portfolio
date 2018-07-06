import * as React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const MenuItem = styled.div`
  transition: padding-left 100ms;
  position: relative;

  &:hover {
    cursor: pointer;
    padding-left: 15px;
  }
`;

const Menu = () => (
  <div>
    <MenuItem>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        Work
      </Link>
    </MenuItem>
  </div>
);

export default Menu;
