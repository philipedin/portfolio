import * as React from 'react';
import { Work } from '../models';

interface Props {
  pathContext: Work;
}

const WorkTemplate = ({
  pathContext: {
    title,
    technologies
  }
}: Props) => (
  <div>
    <h2>{title}</h2>
    <img src="https://i0.wp.com/www.whiskysaga.com/wp-content/uploads/2014/12/box_distillery_winter.jpg?ssl=1" />
    {technologies &&
      <div>
        <h3>Technologies</h3>
        {technologies.map(skill => <div key={skill}>{skill}</div>)}
      </div>
    }
  </div>
);

export default WorkTemplate;