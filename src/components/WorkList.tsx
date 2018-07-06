import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Work, Edge } from '../models';
import WorkListItem from './WorkListItem';

interface IProps {
  work: [Edge<Work>];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WorkList = ({ work }: IProps) => (
  <Wrapper>
    {work &&
      work.map((workItem) =>
        <Link to={workItem.node.frontmatter.path}>
          <WorkListItem work={workItem} key={workItem.node.id} />
        </Link>,
      )
    }
  </Wrapper>
);

export default WorkList;
