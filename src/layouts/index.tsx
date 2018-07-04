import * as React from 'react'
import Helmet from 'react-helmet';

import styled from 'styled-components';
import './index.css'
import Header from '../components/header';

interface Props {
  children: () => JSX.Element[];
  data: {
    site: {
      siteMetadata: {
        title: string;
      },
    },
  }
}

const Wrapper = styled.div`
  display: flex;
  background: rgb(85, 71, 130);
`;

const LeftPane = styled.div`
  min-width: 180px;
  padding: 25px 15px;
  background: rgba(0, 0, 0, 0.5);
`;

const Main = styled.div`
  flex: 1;
  padding: 25px 15px;
  background: rgba(0, 0, 0, 0.6);
`;

const Layout = ({ children, data }: Props) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <LeftPane>
      Testing
    </LeftPane>
    <Main>
      <div>
        {children()}
      </div>
    </Main>
  </Wrapper>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
