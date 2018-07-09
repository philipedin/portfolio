import * as React from 'react';
import styled from 'styled-components';

import { IWork } from '../models';
import Carousel from '../components/Carousel';

const ImageContainer = styled.div`
  height: 400px;
`;

const Image = styled.img`
  max-height: 100%;
`;

const Description = styled.div`
  margin-top: 15px;
`;

interface IProps {
  pathContext: {
    html: string | undefined;
    workData: IWork
  };
}

const WorkTemplate = ({
  pathContext: {
    html,
    workData: {
      title,
      technologies,
      images: {
        screenshots,
      },
    },
  },
}: IProps) => (
  <div>
    <h1>{title}</h1>

    {screenshots &&
      <Carousel
        imagesSources={screenshots.map((screenshot) => screenshot.publicURL)}
      />
    }

    {html &&
      <Description dangerouslySetInnerHTML={{__html: html}} />
    }
    {technologies &&
      <div>
        <h2>Technologies</h2>
        <ul>
          {technologies.map((skill) =>
            <li key={skill}>
              <div>{skill}</div>
            </li>,
          )}
        </ul>
      </div>
    }
  </div>
);

export default WorkTemplate;
