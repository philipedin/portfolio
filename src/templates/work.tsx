import * as React from 'react';

import { Work } from '../models';
import Carousel from 'nuka-carousel';

interface IProps {
  pathContext: {
    html: string | undefined;
    workData: Work
  };
}

const WorkTemplate = ({
  pathContext,
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
    <Carousel autoplay>
      {screenshots &&
        screenshots.map((screenshot) =>
          <div><img key={screenshot.publicURL} src={screenshot.publicURL} /></div>,
      )}
    </Carousel>
    {html &&
      <div dangerouslySetInnerHTML={{__html: html}} />
    }
    {technologies &&
      <div>
        <h2>Technologies</h2>
        {technologies.map((skill) => <div key={skill}>{skill}</div>)}
      </div>
    }
  </div>
);
export default WorkTemplate;
