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
  margin: 10px;

  transition: transform 100ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Image = styled.img`
  max-height: 100%;
  margin: 0px;
`;

const WorkListItem = ({ work }: IProps) => {
  const {
    node: {
      frontmatter: {
        images: {
          logo,
        },
      },
    },
  } = work;
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={logo.publicURL} />
      </ImageContainer>
    </Wrapper>
  );

};

export default WorkListItem;
