import * as React from 'react';
import styled from 'styled-components';

import { ISkill, IEdge } from '../models';
import SkillListItem from './SkillListItem';

interface IProps {
  skills: [ISkill];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillList = ({ skills }: IProps) => (
  <Wrapper>
    {skills &&
      skills.map((skill) =>
        <SkillListItem skill={skill} />,
      )
    }
  </Wrapper>
);

export default SkillList;
