import * as React from 'react';
import styled from 'styled-components';

import { IWork, IEdge } from '../models';

interface IProps {
  work: IEdge<IWork>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  margin-right: 15px;

  transition: transform 100ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  width: 300px;
  height: 200px;
  background-image: url("${(props) => props.imageUrl}");
  background-position: center;
  background-size: contain;
  background-color: #fff;
  background-repeat: no-repeat;
`;

const WorkListItem = ({ work }: IProps) => {
  const {
    node: {
      frontmatter: {
        title,
        images: {
          logo,
        },
      },
    },
  } = work;
  return (
    <Wrapper>
      <ImageContainer imageUrl={logo.publicURL}  />
    </Wrapper>
  );

};

export default WorkListItem;
