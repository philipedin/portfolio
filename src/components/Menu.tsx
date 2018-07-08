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

  transition: all 100ms;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const routes = {
  home: {
    name: 'Home',
    path: '/',
  },
  work: {
    name: 'Work',
    path: '/work',
  },
  skills: {
    name: 'Home',
    path: '/skills',
  },
};

interface INameProps {
  isCurrentRoute: boolean;
}

const Name = styled.span<INameProps>`
  font-weight: ${(props: INameProps) => props.isCurrentRoute ? 'bold' : 'none' };
`;

const Menu = () => (
  <Wrapper>
    {console.log(location)}
    <MenuItem>
      <Link
        to={routes.home.path}
        style={{
          textDecoration: 'none',
        }}
      >
        <Name isCurrentRoute={location.pathname === routes.home.path}>
          {routes.home.name}
        </Name>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to={routes.work.path}
        style={{
          textDecoration: 'none',
        }}
      >
        <Name isCurrentRoute={location.pathname === routes.work.path}>
          {routes.work.name}
        </Name>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to={routes.skills.path}
        style={{
          textDecoration: 'none',
        }}
      >
        <Name isCurrentRoute={location.pathname === routes.skills.path}>
          {routes.skills.name}
        </Name>
      </Link>
    </MenuItem>
  </Wrapper>
);

export default Menu;
