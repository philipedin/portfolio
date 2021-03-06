import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { IRoute } from '../models';
const githubIcon = require('../../data/images/github_icon.png');

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
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

const IconLink = styled.a`
  height: 22px;
  width: 22px;
  margin: 0px 10px;
`;

interface INameProps {
  isCurrentRoute: boolean;
}

const Name = styled.span<INameProps>`
  font-weight: ${(props: INameProps) => props.isCurrentRoute ? 'bold' : 'none' };
`;

const Menu = () => {
  const currentPathName =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const menuRoutes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Work',
      path: '/work',
    },
    {
      name: 'Skills',
      path: '/skills',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const getMenuItems = (routes: IRoute[]) => {
    return routes.map((route) => {
      return (
        <MenuItem key={route.name}>
          <Link
            to={route.path}
            style={{
              textDecoration: 'none',
            }}
          >
            <Name isCurrentRoute={currentPathName === route.path}>
              {route.name}
            </Name>
          </Link>
        </MenuItem>
      );
    });
  };

  return (
    <Wrapper>
      {getMenuItems(menuRoutes)}
      <IconLink target="_blank" href="https://www.github.com/philipedin/portfolio">
        <img src={githubIcon} />
      </IconLink>
    </Wrapper>
  );
};

export default Menu;
