import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';
import Menu from '../components/Menu';

interface IProps {
  children: () => JSX.Element[];
  data: {
    site: {
      siteMetadata: {
        title: string;
      },
    },
  };
}

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  min-width: 180px;
  padding: 15px;
`;

const Right = styled.div`
  flex: 1;
  padding: 0px 15px;
`;

const Layout = ({ children, data }: IProps) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header>
      <Menu />
    </Header>
    <Right>
      <div>
        {children()}
      </div>
    </Right>
  </Wrapper>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
