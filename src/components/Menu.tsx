import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const Menu = () => (
  <div>
    <div>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Work
      </Link>
    </div>
  </div>
)

export default Menu;
