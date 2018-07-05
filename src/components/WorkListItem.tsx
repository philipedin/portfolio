import * as React from 'react';
import styled from 'styled-components';

import { Work, Edge } from '../models';

interface Props {
  work: Edge<Work>;
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
  background-image: url("${props => props.imageUrl}");
  background-position: center; 
  background-size: contain;
  background-color: #fff;
  background-repeat: no-repeat;
`;

const WorkListItem = ({ work }: Props) => {
  const {
    node: {
      frontmatter: {
        path,
        title,
        images: {
          logo
        }
      }
    }
  } = work;
  return (
    <Wrapper>
      {/* <img src={logo.publicURL} /> */}
      <ImageContainer imageUrl={logo.publicURL}  />
      <h3>{title}</h3>
    </Wrapper>
  );

};

export default WorkListItem;