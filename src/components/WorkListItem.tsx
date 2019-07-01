import * as React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { IWork, IEdge } from '../models';

interface IProps {
  work: IEdge<IWork>;
  delay: number;
}

const Wrapper = styled.div`
  margin: 10px;

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  @media only screen and (max-width: 680px) {
    height: 75px;
    width: 75px;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  img, div {
    @media only screen and (max-width: 680px) {
      height: 75px !important;
      width: 75px !important;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 200px;
    width: 200px;

    @media only screen and (max-width: 680px) {
      height: 75px !important;
      width: 75px !important;
    }
  }
`;

const WorkListItem = (props: IProps) => {
  const {
    node: {
      frontmatter: {
        images: {
          logo,
        },
      },
    },
  } = props.work;
  return (
    <Wrapper style={{ animationDelay: `${props.delay}ms` }}>
      <ImageContainer>
      <Img resolutions={logo.childImageSharp.resolutions} />
      </ImageContainer>
    </Wrapper>
  );

};

export default WorkListItem;
