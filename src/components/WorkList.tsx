import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { IWork, IEdge } from '../models';
import WorkListItem from './WorkListItem';
import itemAppear from '../animations/itemAppear';

interface IProps {
  work: [IEdge<IWork>];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin: 10px;
    width: 200px;
    height: 200px;

    @media only screen and (max-width: 680px) {
      height: 75px !important;
      width: 75px !important;
    }

    & > div {
      ${itemAppear}
    }
  }
`;

const WorkList = ({ work }: IProps) => (
  <Wrapper>
    {work &&
      work.map((workItem, index) =>
        <Link to={workItem.node.frontmatter.path} key={workItem.node.id}>
          <WorkListItem work={workItem} delay={index * 60} />
        </Link>,
      )
    }
  </Wrapper>
);

export default WorkList;
